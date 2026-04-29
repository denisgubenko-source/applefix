import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Apple device repair in Tallinn",
    description:
      "MacBook, iPhone, iPad & Apple Watch repair in Tallinn. Fast diagnostics, careful work, and parts options that match your preference and budget.",
    ogTitle: "AppleFix — Apple device repair in Tallinn",
    ogDescription:
      "Submit a repair request in under a minute. Fast diagnostics and clear communication.",
  },
  nav: {
    cta: "Submit request",
    call: "Call",
  },
  hero: {
    headline: "Apple device repair in Tallinn",
    subheadline:
      "MacBook, iPhone, iPad and Apple Watch. Fast diagnostics, careful repair, and parts options that match your preference and budget.",
    primaryCta: "Submit request",
    secondaryCta: "Call now",
    trust: ["Fast diagnostics", "Careful repair", "Parts options: you choose"],
  },
  devices: {
    title: "Devices",
    items: {
      macbook: {
        title: "MacBook",
        description: "Screen, battery, keyboard, trackpad and board-level issues.",
      },
      iphone: {
        title: "iPhone",
        description: "Screen and battery replacement, cameras, charging and more.",
      },
      ipad: {
        title: "iPad",
        description: "Glass/screen, charging, batteries and diagnostics.",
      },
      watch: {
        title: "Apple Watch",
        description: "Battery, display, charging and water-damage diagnostics.",
      },
    },
  },
  services: {
    title: "Common services",
    note: "Final cost depends on the model and the issue. After diagnostics we confirm options and price.",
    items: {
      screen: { title: "Screen replacement" },
      battery: { title: "Battery replacement" },
      keyboard: { title: "Keyboard repair" },
      trackpad: { title: "Trackpad repair" },
      camera: { title: "Camera repair" },
      charging_port: { title: "Charging port repair" },
      diagnostics: { title: "Diagnostics" },
      other: { title: "Other repair" },
    },
  },
  benefits: {
    title: "Why choose AppleFix",
    items: [
      {
        title: "Apple-only focus",
        description: "Specialized workflow, tools and experience across Apple devices.",
      },
      {
        title: "Fast diagnostics",
        description: "We quickly confirm the issue and the best repair path.",
      },
      {
        title: "Careful repair",
        description: "Clean work, ESD-safe process and attention to details.",
      },
      {
        title: "Parts options — you choose",
        description: "Original parts or high-quality alternatives, depending on your preference and budget.",
        highlight: true,
      },
      {
        title: "Warranty on work",
        description: "We stand behind the repair and explain what’s covered.",
      },
      {
        title: "Clear communication",
        description: "Transparent updates and approval before we proceed.",
      },
    ],
  },
  how: {
    title: "How it works",
    steps: [
      { title: "Submit a request", description: "Tell us your device and the issue." },
      { title: "We contact you", description: "We confirm details and next steps." },
      {
        title: "Diagnostics",
        description: "We clarify the cause, time and parts options.",
      },
      { title: "Repair", description: "After approval we complete the repair." },
      { title: "Get your device back", description: "Pick up in Tallinn — ready to use." },
    ],
  },
  form: {
    title: "Repair request",
    subtitle: "Takes less than a minute. We’ll get back to you soon.",
    submit: "Send request",
    submitting: "Sending…",
    successTitle: "Request received",
    successBody: "Thank you. We’ll contact you shortly to confirm details.",
    errorTitle: "Couldn’t send",
    errorBody: "Please try again in a moment or call us directly.",
    securityError: "Security check failed. Please refresh and try again.",
    fields: {
      name: { label: "Name", placeholder: "Your name" },
      contact: {
        label: "Contact (phone or Telegram)",
        placeholder: "+372… or @username",
      },
      email: { label: "Email", placeholder: "name@example.com" },
      deviceType: { label: "Device", placeholder: "Select device" },
      repairType: { label: "Repair type", placeholder: "Select repair" },
      deviceModel: {
        label: "Model",
        placeholder: "e.g. iPhone 14 Pro, MacBook Air M1",
        optional: "Optional",
      },
      deviceColor: {
        label: "Color",
        placeholder: "e.g. Midnight, Silver",
        optional: "Optional",
      },
      comment: {
        label: "Comment",
        placeholder: "Describe the issue and any important details",
        optional: "Optional",
      },
    },
    options: {
      deviceType: {
        macbook: "MacBook",
        iphone: "iPhone",
        ipad: "iPad",
        watch: "Apple Watch",
      },
      repairType: {
        screen: "Screen",
        battery: "Battery",
        keyboard: "Keyboard",
        trackpad: "Trackpad",
        camera: "Camera",
        charging_port: "Charging Port",
        diagnostics: "Diagnostics",
        other: "Other",
      },
    },
    validation: {
      nameRequired: "Please enter your name.",
      contactRequired: "Please provide a phone number or Telegram.",
      emailInvalid: "Please enter a valid email address.",
      deviceTypeRequired: "Please select a device.",
      repairTypeRequired: "Please select a repair type.",
      rateLimited: "Too many requests. Please try again in a minute.",
    },
  },
  contacts: {
    title: "Contacts",
    directions: "Get directions",
    mapHint: "Tallinn, Punane 16/1 - 101",
  },
  footer: {
    privacy: "Privacy policy",
  },
  system: { language: "en" },
};
