import type { Dictionary } from "../types";

export const et: Dictionary = {
  meta: {
    title: "Apple seadmete remont Tallinnas",
    description:
      "MacBooki, iPhone’i, iPadi ja Apple Watchi remont Tallinnas. Kiire diagnostika, hoolikas töö ja varuosa valik vastavalt sinu eelistusele ja eelarvele.",
    ogTitle: "AppleFix — Apple seadmete remont Tallinnas",
    ogDescription:
      "Saada remondipäring vähem kui minutiga. Kiire diagnostika ja selge suhtlus.",
  },
  nav: {
    cta: "Saada päring",
    call: "Helista",
  },
  hero: {
    headline: "Apple seadmete remont Tallinnas",
    subheadline:
      "MacBook, iPhone, iPad ja Apple Watch. Kiire diagnostika, hoolikas remont ning varuosa valik vastavalt sinu eelistusele ja eelarvele.",
    primaryCta: "Saada päring",
    secondaryCta: "Helista kohe",
    trust: ["Kiire diagnostika", "Hoolikas töö", "Varuosad: valid ise"],
  },
  devices: {
    title: "Seadmed",
    items: {
      macbook: {
        title: "MacBook",
        description: "Ekraan, aku, klaviatuur, trackpad ja emaplaadi vead.",
      },
      iphone: {
        title: "iPhone",
        description: "Ekraan ja aku, kaamerad, laadimine ja muu.",
      },
      ipad: {
        title: "iPad",
        description: "Klaas/ekraan, laadimine, akud ja diagnostika.",
      },
      watch: {
        title: "Apple Watch",
        description: "Aku, ekraan, laadimine ja niiskuskahjustuse diagnostika.",
      },
    },
  },
  services: {
    title: "Levinumad teenused",
    note: "Lõplik hind sõltub mudelist ja rikkest. Pärast diagnostikat kinnitame variandid ja hinna.",
    items: {
      screen: { title: "Ekraani vahetus" },
      battery: { title: "Aku vahetus" },
      keyboard: { title: "Klaviatuuri remont" },
      trackpad: { title: "Trackpadi remont" },
      camera: { title: "Kaamera remont" },
      charging_port: { title: "Laadimispesa remont" },
      diagnostics: { title: "Diagnostika" },
      other: { title: "Muu remont" },
    },
  },
  benefits: {
    title: "Miks valida AppleFix",
    items: [
      {
        title: "Fookus Apple seadmetele",
        description: "Spetsialiseeritud tööprotsess, tööriistad ja kogemus Apple seadmetega.",
      },
      {
        title: "Kiire diagnostika",
        description: "Kinnitame kiiresti vea ja parima remondilahenduse.",
      },
      {
        title: "Hoolikas remont",
        description: "Puhas töö, ESD-ohutu protsess ja tähelepanu detailidele.",
      },
      {
        title: "Varuosa valik — valid ise",
        description: "Originaalvaruosad või kvaliteetsed alternatiivid vastavalt sinu eelistusele ja eelarvele.",
        highlight: true,
      },
      {
        title: "Garantii tööle",
        description: "Seisame remondi taga ja selgitame, mis on kaetud.",
      },
      {
        title: "Selge suhtlus",
        description: "Läbipaistvad uuendused ja kinnitus enne töö alustamist.",
      },
    ],
  },
  how: {
    title: "Kuidas see käib",
    steps: [
      { title: "Saada päring", description: "Kirjelda seadet ja probleemi." },
      { title: "Võtame ühendust", description: "Kinnitame detailid ja järgmised sammud." },
      {
        title: "Diagnostika",
        description: "Selgitame põhjuse, ajakulu ja varuosa variandid.",
      },
      { title: "Remont", description: "Pärast kinnitust teostame remondi." },
      { title: "Saad seadme tagasi", description: "Tallinnas kätte — valmis kasutamiseks." },
    ],
  },
  form: {
    title: "Remondipäring",
    subtitle: "Võtab vähem kui minuti. Vastame peagi.",
    submit: "Saada päring",
    submitting: "Saadan…",
    successTitle: "Päring on saadetud",
    successBody: "Aitäh. Võtame varsti ühendust, et detailid kinnitada.",
    errorTitle: "Ei õnnestunud saata",
    errorBody: "Proovi uuesti mõne hetke pärast või helista otse.",
    securityError: "Turvakontroll ebaõnnestus. Värskenda lehte ja proovi uuesti.",
    fields: {
      name: { label: "Nimi", placeholder: "Sinu nimi" },
      contact: {
        label: "Kontakt (telefon või Telegram)",
        placeholder: "+372… või @kasutaja",
      },
      email: { label: "E-post", placeholder: "nimi@example.com" },
      deviceType: { label: "Seade", placeholder: "Vali seade" },
      repairType: { label: "Remonditüüp", placeholder: "Vali" },
      deviceModel: {
        label: "Mudel",
        placeholder: "nt iPhone 14 Pro, MacBook Air M1",
        optional: "Valikuline",
      },
      deviceColor: {
        label: "Värv",
        placeholder: "nt Midnight, Silver",
        optional: "Valikuline",
      },
      comment: {
        label: "Kommentaar",
        placeholder: "Kirjelda probleemi ja olulised detailid",
        optional: "Valikuline",
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
        screen: "Ekraan",
        battery: "Aku",
        keyboard: "Klaviatuur",
        trackpad: "Trackpad",
        camera: "Kaamera",
        charging_port: "Laadimispesa",
        diagnostics: "Diagnostika",
        other: "Muu",
      },
    },
    validation: {
      nameRequired: "Palun sisesta nimi.",
      contactRequired: "Palun lisa telefon või Telegram.",
      emailInvalid: "Palun sisesta korrektne e-post.",
      deviceTypeRequired: "Palun vali seade.",
      repairTypeRequired: "Palun vali remonditüüp.",
      rateLimited: "Liiga palju päringuid. Proovi minuti pärast uuesti.",
    },
  },
  contacts: {
    title: "Kontakt",
    directions: "Navigeeri",
    mapHint: "Tallinn, Punane 16/1 - 101",
  },
  footer: {
    privacy: "Privaatsuspoliitika",
  },
  system: { language: "et" },
};
