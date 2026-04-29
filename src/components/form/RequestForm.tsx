"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import type { Dictionary, DeviceType, RepairType } from "@/i18n/types";
import type { Lang } from "@/i18n/languages";
import { RepairRequestSchema } from "@/lib/repairRequest";
import { Turnstile } from "@/components/form/Turnstile";

type FormState = {
  name: string;
  contact: string;
  email: string;
  deviceType: DeviceType | "";
  repairType: RepairType | "";
  deviceModel: string;
  deviceColor: string;
  comment: string;
  hp: string;
};

const STORAGE_KEY = "af_form_v1";

function FieldLabel({
  label,
  optional,
}: {
  label: string;
  optional?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span>{label}</span>
      {optional ? <span className="text-xs text-zinc-400">{optional}</span> : null}
    </div>
  );
}

export function RequestForm({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const [state, setState] = useState<FormState>({
    name: "",
    contact: "",
    email: "",
    deviceType: "",
    repairType: "",
    deviceModel: "",
    deviceColor: "",
    comment: "",
    hp: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof Omit<FormState, "hp">, string>>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<FormState>;
      setState((s) => ({ ...s, ...parsed }));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const deviceOptions = useMemo(
    () => [
      { value: "macbook", label: dict.form.options.deviceType.macbook },
      { value: "iphone", label: dict.form.options.deviceType.iphone },
      { value: "ipad", label: dict.form.options.deviceType.ipad },
      { value: "watch", label: dict.form.options.deviceType.watch },
    ],
    [dict],
  );

  const repairOptions = useMemo(
    () => [
      { value: "screen", label: dict.form.options.repairType.screen },
      { value: "battery", label: dict.form.options.repairType.battery },
      { value: "keyboard", label: dict.form.options.repairType.keyboard },
      { value: "trackpad", label: dict.form.options.repairType.trackpad },
      { value: "camera", label: dict.form.options.repairType.camera },
      { value: "charging_port", label: dict.form.options.repairType.charging_port },
      { value: "diagnostics", label: dict.form.options.repairType.diagnostics },
      { value: "other", label: dict.form.options.repairType.other },
    ],
    [dict],
  );

  function validateClient(next: FormState) {
    const nextErrors: Partial<Record<keyof Omit<FormState, "hp">, string>> = {};

    if (!next.name.trim()) nextErrors.name = dict.form.validation.nameRequired;
    if (!next.contact.trim()) nextErrors.contact = dict.form.validation.contactRequired;
    if (!next.email.trim() || !/^\S+@\S+\.[A-Za-z]{2,}$/.test(next.email.trim())) {
      nextErrors.email = dict.form.validation.emailInvalid;
    }
    if (!next.deviceType) nextErrors.deviceType = dict.form.validation.deviceTypeRequired;
    if (!next.repairType) nextErrors.repairType = dict.form.validation.repairTypeRequired;

    return nextErrors;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGeneralError(null);
    setSuccess(false);

    const nextErrors = validateClient(state);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!turnstileToken || turnstileError) {
      setGeneralError(dict.form.securityError);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name: state.name,
        contact: state.contact,
        email: state.email,
        deviceType: state.deviceType,
        repairType: state.repairType,
        deviceModel: state.deviceModel,
        deviceColor: state.deviceColor,
        comment: state.comment,

        language: lang,
        pageUrl: window.location.href,
        timestamp: new Date().toISOString(),
        source: "applefix.ee" as const,
        userAgent: navigator.userAgent,

        turnstileToken,
        hp: state.hp,
      };

      const parsed = RepairRequestSchema.safeParse(payload);
      if (!parsed.success) {
        setGeneralError(dict.form.errorBody);
        return;
      }

      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess(true);
        setErrors({});
        setGeneralError(null);
        setTurnstileToken("");
      } else {
        const data = await res.json().catch(() => null);
        if (data?.code === "RATE_LIMIT") setGeneralError(dict.form.validation.rateLimited);
        else if (data?.code === "TURNSTILE") setGeneralError(dict.form.securityError);
        else setGeneralError(dict.form.errorBody);
      }
    } catch {
      setGeneralError(dict.form.errorBody);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {success ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          <div className="font-semibold">{dict.form.successTitle}</div>
          <div className="mt-1 text-emerald-800">{dict.form.successBody}</div>
        </div>
      ) : null}

      {generalError ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
          <div className="font-semibold">{dict.form.errorTitle}</div>
          <div className="mt-1 text-rose-800">{generalError}</div>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-zinc-900">
            <FieldLabel label={dict.form.fields.name.label} />
          </label>
          <input
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            className="mt-2 h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none focus:border-zinc-900"
            placeholder={dict.form.fields.name.placeholder}
            autoComplete="name"
          />
          {errors.name ? <div className="mt-1 text-xs text-rose-600">{errors.name}</div> : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-900">
            <FieldLabel label={dict.form.fields.contact.label} />
          </label>
          <input
            value={state.contact}
            onChange={(e) => setState((s) => ({ ...s, contact: e.target.value }))}
            className="mt-2 h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none focus:border-zinc-900"
            placeholder={dict.form.fields.contact.placeholder}
            autoComplete="tel"
          />
          {errors.contact ? (
            <div className="mt-1 text-xs text-rose-600">{errors.contact}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-900">
            <FieldLabel label={dict.form.fields.email.label} />
          </label>
          <input
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            className="mt-2 h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none focus:border-zinc-900"
            placeholder={dict.form.fields.email.placeholder}
            autoComplete="email"
            inputMode="email"
          />
          {errors.email ? <div className="mt-1 text-xs text-rose-600">{errors.email}</div> : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-900">
            <FieldLabel label={dict.form.fields.deviceType.label} />
          </label>
          <select
            value={state.deviceType}
            onChange={(e) => setState((s) => ({ ...s, deviceType: e.target.value as DeviceType | "" }))}
            className="mt-2 h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none focus:border-zinc-900"
          >
            <option value="">{dict.form.fields.deviceType.placeholder}</option>
            {deviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.deviceType ? (
            <div className="mt-1 text-xs text-rose-600">{errors.deviceType}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-900">
            <FieldLabel label={dict.form.fields.repairType.label} />
          </label>
          <select
            value={state.repairType}
            onChange={(e) => setState((s) => ({ ...s, repairType: e.target.value as RepairType | "" }))}
            className="mt-2 h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none focus:border-zinc-900"
          >
            <option value="">{dict.form.fields.repairType.placeholder}</option>
            {repairOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.repairType ? (
            <div className="mt-1 text-xs text-rose-600">{errors.repairType}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-900">
            <FieldLabel
              label={dict.form.fields.deviceModel.label}
              optional={dict.form.fields.deviceModel.optional}
            />
          </label>
          <input
            value={state.deviceModel}
            onChange={(e) => setState((s) => ({ ...s, deviceModel: e.target.value }))}
            className="mt-2 h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none focus:border-zinc-900"
            placeholder={dict.form.fields.deviceModel.placeholder}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-900">
            <FieldLabel
              label={dict.form.fields.deviceColor.label}
              optional={dict.form.fields.deviceColor.optional}
            />
          </label>
          <input
            value={state.deviceColor}
            onChange={(e) => setState((s) => ({ ...s, deviceColor: e.target.value }))}
            className="mt-2 h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none focus:border-zinc-900"
            placeholder={dict.form.fields.deviceColor.placeholder}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-900">
          <FieldLabel label={dict.form.fields.comment.label} optional={dict.form.fields.comment.optional} />
        </label>
        <textarea
          value={state.comment}
          onChange={(e) => setState((s) => ({ ...s, comment: e.target.value }))}
          className="mt-2 min-h-[120px] w-full resize-y rounded-2xl border border-zinc-300 bg-white px-3 py-3 text-sm outline-none focus:border-zinc-900"
          placeholder={dict.form.fields.comment.placeholder}
        />
      </div>

      {/* Honeypot */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input
            tabIndex={-1}
            autoComplete="off"
            name="hp"
            value={state.hp}
            onChange={(e) => setState((s) => ({ ...s, hp: e.target.value }))}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
        {siteKey ? (
          <Turnstile
            siteKey={siteKey}
            onToken={(t) => {
              setTurnstileToken(t);
              setTurnstileError(false);
            }}
            onError={() => {
              setTurnstileError(true);
              setTurnstileToken("");
            }}
          />
        ) : (
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
            Turnstile site key is missing.
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-7 text-sm font-medium text-white shadow-sm hover:bg-zinc-900 disabled:opacity-60"
        >
          {submitting ? dict.form.submitting : dict.form.submit}
        </button>
      </div>
    </form>
  );
}