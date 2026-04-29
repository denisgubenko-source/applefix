import type { Dictionary } from "@/i18n/types";
import { Section } from "@/components/sections/Section";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <Section title={dict.how.title}>
      <div className="grid gap-4 lg:grid-cols-5">
        {dict.how.steps.map((s, idx) => (
          <div
            key={s.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <div className="text-xs font-semibold tracking-wide text-zinc-500">
              {idx + 1}
            </div>
            <div className="mt-2 text-sm font-semibold text-zinc-950">{s.title}</div>
            <div className="mt-1 text-sm leading-6 text-zinc-600">{s.description}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}