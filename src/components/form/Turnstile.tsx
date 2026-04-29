"use client";

import { useEffect, useId, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark";
        },
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

let scriptLoaded = false;

export function Turnstile({
  siteKey,
  onToken,
  onError,
}: {
  siteKey: string;
  onToken: (token: string) => void;
  onError: () => void;
}) {
  const id = useId();
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const ensure = async () => {
      if (!scriptLoaded) {
        await new Promise<void>((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
          s.async = true;
          s.defer = true;
          s.onload = () => resolve();
          s.onerror = () => reject(new Error("turnstile_script_failed"));
          document.head.appendChild(s);
        });
        scriptLoaded = true;
      }

      const el = document.getElementById(id);
      if (!el || !window.turnstile) return;

      widgetIdRef.current = window.turnstile.render(el, {
        sitekey: siteKey,
        callback: (token) => onToken(token),
        "error-callback": () => onError(),
        "expired-callback": () => onToken(""),
        theme: "light",
      });
    };

    ensure().catch(() => onError());

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.reset(widgetIdRef.current);
        } catch {
          // ignore
        }
      }
    };
  }, [id, siteKey, onToken, onError]);

  return <div id={id} className="min-h-[64px]" />;
}