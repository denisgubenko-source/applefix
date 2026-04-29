import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/Container";
import { business } from "@/lib/business";
import { DeviceVisual } from "@/components/visuals/DeviceVisual";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <Container className="py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              {dict.hero.headline}
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
              {dict.hero.subheadline}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#request"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white shadow-sm hover:bg-zinc-900"
              >
                {dict.hero.primaryCta}
              </a>
              <a
                href={`tel:${business.phoneTel}`}
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                {dict.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {dict.hero.trust.map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 shadow-sm"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <DeviceVisual ariaLabel="Apple devices" />
            </div>
            <div className="mt-4 text-xs text-zinc-500">{business.address}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}