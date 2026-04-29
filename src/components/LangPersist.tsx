"use client";

import { useEffect } from "react";
import type { Lang } from "@/i18n/languages";

const COOKIE = "af_lang";

export function LangPersist({ lang }: { lang: Lang }) {
  useEffect(() => {
    try {
      localStorage.setItem("af_lang", lang);
    } catch {
      // ignore
    }

    try {
      const maxAge = 60 * 60 * 24 * 365;
      document.cookie = `${COOKIE}=${lang}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
    } catch {
      // ignore
    }
  }, [lang]);

  return null;
}