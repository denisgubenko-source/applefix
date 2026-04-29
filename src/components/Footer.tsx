import type { Dictionary } from "@/i18n/types";
import type { Lang } from "@/i18n/languages";
import type { Business } from "@/lib/business";
import { Container } from "@/components/Container";

export function Footer({
  dict,
  business,
  lang,
}: {
  dict: Dictionary;
  business: Business;
  lang: Lang;
}) {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="font-semibold tracking-tight text-zinc-950">AppleFix</div>
            <div className="mt-2 text-sm text-zinc-600">{business.company}</div>
            <div className="text-sm text-zinc-600">{business.address}</div>
            <div className="mt-3 flex flex-col gap-1 text-sm">
              <a className="text-zinc-800 hover:text-zinc-950" href={`tel:${business.phoneTel}`}>
                {business.phoneDisplay}
              </a>
              <a className="text-zinc-800 hover:text-zinc-950" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <a className="text-zinc-600 hover:text-zinc-900" href={`/${lang}/privacy`}>
              {dict.footer.privacy}
            </a>
            <div className="text-zinc-400">•</div>
            <a className="text-zinc-600 hover:text-zinc-900" href={`/${lang}/`}>
              RU / ET / EN
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} {business.company}</div>
      </Container>
    </footer>
  );
}