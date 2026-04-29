import type { Dictionary } from "./types";
import type { Lang } from "./languages";
import { en } from "./dictionaries/en";
import { et } from "./dictionaries/et";
import { ru } from "./dictionaries/ru";

export function getDictionary(lang: Lang): Dictionary {
  switch (lang) {
    case "ru":
      return ru;
    case "et":
      return et;
    default:
      return en;
  }
}
