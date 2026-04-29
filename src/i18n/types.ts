import type { Lang } from "./languages";

export type DeviceType = "macbook" | "iphone" | "ipad" | "watch";
export type RepairType =
  | "screen"
  | "battery"
  | "keyboard"
  | "trackpad"
  | "camera"
  | "charging_port"
  | "diagnostics"
  | "other";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    cta: string;
    call: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trust: [string, string, string];
  };
  devices: {
    title: string;
    items: Record<DeviceType, { title: string; description: string }>;
  };
  services: {
    title: string;
    note: string;
    items: Record<RepairType, { title: string }>;
  };
  benefits: {
    title: string;
    items: Array<{ title: string; description: string; highlight?: boolean }>;
  };
  how: {
    title: string;
    steps: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
    ];
  };
  form: {
    title: string;
    subtitle: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBody: string;
    securityError: string;
    fields: {
      name: { label: string; placeholder: string };
      contact: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      deviceType: { label: string; placeholder: string };
      repairType: { label: string; placeholder: string };
      deviceModel: { label: string; placeholder: string; optional: string };
      deviceColor: { label: string; placeholder: string; optional: string };
      comment: { label: string; placeholder: string; optional: string };
    };
    options: {
      deviceType: Record<DeviceType, string>;
      repairType: Record<RepairType, string>;
    };
    validation: {
      nameRequired: string;
      contactRequired: string;
      emailInvalid: string;
      deviceTypeRequired: string;
      repairTypeRequired: string;
      rateLimited: string;
    };
  };
  contacts: {
    title: string;
    directions: string;
    mapHint: string;
  };
  footer: {
    privacy: string;
  };
  system: {
    language: Lang;
  };
};
