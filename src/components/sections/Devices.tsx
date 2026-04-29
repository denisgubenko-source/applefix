import type { Dictionary } from "@/i18n/types";
import { Section } from "@/components/sections/Section";
import { DeviceIcon } from "@/components/visuals/DeviceIcon";

const deviceOrder = ["macbook", "iphone", "ipad", "watch"] as const;

type DeviceKey = (typeof deviceOrder)[number];

export function Devices({ dict }: { dict: Dictionary }) {
  return (
    <Section title={dict.devices.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {deviceOrder.map((key) => {
          const item = dict.devices.items[key as DeviceKey];
          return (
            <div
              key={key}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900">
                <DeviceIcon kind={key} />
              </div>
              <div className="text-base font-semibold text-zinc-950">{item.title}</div>
              <div className="mt-1 text-sm leading-6 text-zinc-600">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}