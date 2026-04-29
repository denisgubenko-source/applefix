import { getDictionary } from "@/i18n/getDictionary";
import { isLang, fallbackLang, type Lang } from "@/i18n/languages";
import { business } from "@/lib/business";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Devices } from "@/components/sections/Devices";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { RequestFormSection } from "@/components/sections/RequestFormSection";
import { Contacts } from "@/components/sections/Contacts";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (isLang(langParam) ? langParam : fallbackLang) as Lang;
  const dict = getDictionary(lang);

  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header lang={lang} dict={dict} phoneDisplay={business.phoneDisplay} />
      <main className="flex-1">
        <Hero dict={dict} />
        <Devices dict={dict} />
        <Services dict={dict} />
        <Benefits dict={dict} />
        <HowItWorks dict={dict} />
        <RequestFormSection lang={lang} dict={dict} />
        <Contacts dict={dict} business={business} />
      </main>
      <Footer dict={dict} business={business} lang={lang} />
    </div>
  );
}