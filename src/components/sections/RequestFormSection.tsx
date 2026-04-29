import type { Dictionary } from "@/i18n/types";
import type { Lang } from "@/i18n/languages";
import { Section } from "@/components/sections/Section";
import { RequestForm } from "@/components/form/RequestForm";

export function RequestFormSection({
  lang,
  dict,
}: {
  lang: Lang;
  dict: Dictionary;
}) {
  return (
    <Section id="request" title={dict.form.title}>
      <div className="max-w-3xl">
        <p className="text-sm leading-6 text-zinc-600">{dict.form.subtitle}</p>
        <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
          <RequestForm lang={lang} dict={dict} />
        </div>
      </div>
    </Section>
  );
}