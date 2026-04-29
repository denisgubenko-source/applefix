import type { Dictionary } from "@/i18n/types";
import { Section } from "@/components/sections/Section";

export function Benefits({ dict }: { dict: Dictionary }) {
  return (
    <Section title={dict.benefits.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.benefits.items.map((b) => (
          <div
            key={b.title}
            className={
              "rounded-2xl border bg-white p-5 shadow-sm " +
              (b.highlight
                ? "border-zinc-900/20 ring-1 ring-zinc-900/10"
                : "border-zinc-200")
            }
          >
            <div className="text-base font-semibold text-zinc-950">{b.title}</div>
            <div className="mt-1 text-sm leading-6 text-zinc-600">{b.description}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}