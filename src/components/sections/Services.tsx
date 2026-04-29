import type { Dictionary } from "@/i18n/types";
import { Section } from "@/components/sections/Section";

export function Services({ dict }: { dict: Dictionary }) {
  const items = Object.values(dict.services.items);
  return (
    <Section title={dict.services.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <div className="text-sm font-medium text-zinc-950">{s.title}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-sm text-zinc-600">{dict.services.note}</div>
    </Section>
  );
}