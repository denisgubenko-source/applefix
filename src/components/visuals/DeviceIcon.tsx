import type { DeviceType } from "@/i18n/types";

export function DeviceIcon({ kind }: { kind: DeviceType }) {
  switch (kind) {
    case "macbook":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M6 6.5h12a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M3.5 18.5h17"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "iphone":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <rect
            x="8"
            y="3.5"
            width="8"
            height="17"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M11 6h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "ipad":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <rect
            x="6"
            y="4"
            width="12"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="16.5" cy="12" r="0.9" fill="currentColor" />
        </svg>
      );
    case "watch":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <rect x="8" y="7" width="8" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M9.5 7V5.2A1.2 1.2 0 0 1 10.7 4h2.6A1.2 1.2 0 0 1 14.5 5.2V7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M9.5 17v1.8A1.2 1.2 0 0 0 10.7 20h2.6a1.2 1.2 0 0 0 1.2-1.2V17"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}