export const business = {
  domain: "applefix.ee",
  company: "XDR OÜ",
  address: "Tallinn, Punane 16/1 - 101",
  phoneDisplay: "+372 5158700",
  phoneTel: "+3725158700",
  email: "info@applefix.ee",
  wazeUrl:
    "https://waze.com/ul?q=Tallinn%20Punane%2016%2F1%20101&navigate=yes",
} as const;

export type Business = typeof business;