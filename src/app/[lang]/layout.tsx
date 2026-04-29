import type { Metadata } from "next";
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import {
  fallbackLang,
  isLang,
  type Lang,
  supportedLangs,
} from "@/i18n/languages";
import { LangPersist } from "@/components/LangPersist";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (isLang(langParam) ? langParam : fallbackLang) as Lang;
  const dict = getDictionary(lang);

  const canonical = `https://applefix.ee/${lang}/`;

  return {
    title: dict.meta.ogTitle,
    description: dict.meta.description,
    alternates: {
      canonical,
      languages: {
        en: "https://applefix.ee/en/",
        et: "https://applefix.ee/et/",
        ru: "https://applefix.ee/ru/",
      },
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: canonical,
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      siteName: "AppleFix",
    },
  };
}

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLang(lang)) redirect(`/${fallbackLang}/`);

  return (
    <>
      <LangPersist lang={lang} />
      {children}
    </>
  );
}