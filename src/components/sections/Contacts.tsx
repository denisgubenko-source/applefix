import type { Dictionary } from "@/i18n/types";
import { Section } from "@/components/sections/Section";
import type { Business } from "@/lib/business";

export function Contacts({
  dict,
  business,
}: {
  dict: Dictionary;
  business: Business;
}) {
  return (
    <Section title={dict.contacts.title}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-sm text-zinc-600">{business.company}</div>
          <div className="mt-2 text-base font-semibold text-zinc-950">{business.address}</div>

          <div className="mt-5 grid gap-2 text-sm">
            <a className="text-zinc-800 hover:text-zinc-950" href={`tel:${business.phoneTel}`}>
              {business.phoneDisplay}
            </a>
            <a className="text-zinc-800 hover:text-zinc-950" href={`mailto:${business.email}`}>
              {business.email}
            </a>
          </div>

          <a
            href={business.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white shadow-sm hover:bg-zinc-900"
          >
            {dict.contacts.directions}
          </a>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-2 shadow-sm">
          <iframe
            title={dict.contacts.mapHint}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full rounded-2xl"
            src="https://www.openstreetmap.org/export/embed.html?bbox=24.7996%2C59.4346%2C24.8096%2C59.4396&layer=mapnik&marker=59.4371%2C24.8046"
          />
        </div>
      </div>
    </Section>
  );
}