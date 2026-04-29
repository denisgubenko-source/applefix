import type { Dictionary } from "@/i18n/types";
import type { Lang } from "@/i18n/languages";
import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header({
  lang,
  dict,
  phoneDisplay,
}: {
  lang: Lang;
  dict: Dictionary;
  phoneDisplay: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <a href={`/${lang}/`} className="font-semibold tracking-tight text-zinc-950">
          AppleFix
        </a>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-3 sm:flex">
            <LanguageSwitcher currentLang={lang} />
            <a
              href="tel:+3725158700"
              className="text-sm font-medium text-zinc-800 hover:text-zinc-950"
            >
              {phoneDisplay}
            </a>
          </nav>

          <a
            href="#request"
            className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-950 px-4 text-sm font-medium text-white shadow-sm hover:bg-zinc-900"
          >
            {dict.nav.cta}
          </a>
        </div>
      </Container>

      <div className="border-t border-zinc-200/60 bg-white sm:hidden">
        <Container className="flex h-12 items-center justify-between">
          <LanguageSwitcher currentLang={lang} />
          <a href="tel:+3725158700" className="text-sm font-medium text-zinc-800">
            {phoneDisplay}
          </a>
        </Container>
      </div>
    </header>
  );
}