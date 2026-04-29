import { headers } from "next/headers";
import { cookies } from "next/headers";
import type { Lang } from "@/i18n/languages";
import { fallbackLang, isLang } from "@/i18n/languages";

const COOKIE = "af_lang";

function normalize(raw: string | null | undefined): Lang | null {
  if (!raw) return null;
  const base = raw.toLowerCase().split("-")[0] ?? raw.toLowerCase();
  if (isLang(base)) return base;
  return null;
}

function detectFromAcceptLanguage(value: string | null): Lang {
  if (!value) return fallbackLang;
  const parts = value
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);

  for (const part of parts) {
    const token = part.split(";")[0]?.trim();
    const lang = normalize(token);
    if (lang) return lang;
  }

  return fallbackLang;
}

export async function getPreferredLang(): Promise<Lang> {
  const cookieStore = await cookies();
  const saved = normalize(cookieStore.get(COOKIE)?.value);
  if (saved) return saved;

  const headerStore = await headers();
  const detected = detectFromAcceptLanguage(headerStore.get("accept-language"));
  return detected;
}