"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Lang } from "@/i18n/languages";

const LANGS: Array<{ code: Lang; label: string }> = [
  { code: "ru", label: "RU" },
  { code: "et", label: "ET" },
  { code: "en", label: "EN" },
];

function replaceLang(pathname: string, nextLang: Lang) {
  const m = pathname.match(/^\/(ru|et|en)(\/.*)?$/i);
  if (!m) return `/${nextLang}/`;
  const rest = m[2] ?? "/";
  return `/${nextLang}${rest}`;
}

function persistLang(lang: Lang) {
  try {
    localStorage.setItem("af_lang", lang);
  } catch {
    // ignore
  }

  try {
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `af_lang=${lang}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  } catch {
    // ignore
  }
}

export function LanguageSwitcher({ currentLang }: { currentLang: Lang }) {
  const pathname = usePathname();
  const router = useRouter();

  const targets = useMemo(() => {
    const p = pathname || `/${currentLang}/`;
    return LANGS.map((l) => ({
      ...l,
      href: replaceLang(p, l.code),
      active: l.code === currentLang,
    }));
  }, [pathname, currentLang]);

  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-zinc-700">
      {targets.map((t) => (
        <button
          key={t.code}
          type="button"
          onClick={() => {
            persistLang(t.code);
            router.push(t.href);
          }}
          className={
            "rounded-md px-2 py-1 transition-colors " +
            (t.active
              ? "bg-zinc-900 text-white"
              : "hover:bg-zinc-100 text-zinc-700")
          }
          aria-current={t.active ? "page" : undefined}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}