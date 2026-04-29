import type { HTMLAttributes } from "react";

export function DeviceVisual({
  ariaLabel,
  ...rest
}: { ariaLabel: string } & HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-label={ariaLabel}
      className="h-auto w-full"
      {...rest}
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f4f4f5" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="640" height="420" rx="28" fill="url(#g)" />
      <g fill="none" stroke="#18181b" strokeOpacity="0.18" strokeWidth="2">
        <rect x="70" y="70" width="250" height="160" rx="16" />
        <rect x="110" y="250" width="150" height="120" rx="24" />
        <rect x="320" y="110" width="210" height="270" rx="28" />
      </g>
      <g fill="#18181b" fillOpacity="0.08">
        <rect x="86" y="86" width="218" height="128" rx="12" />
        <rect x="332" y="124" width="186" height="244" rx="24" />
      </g>
      <g fill="#18181b" fillOpacity="0.14">
        <circle cx="195" cy="230" r="6" />
        <circle cx="425" cy="150" r="6" />
      </g>
    </svg>
  );
}