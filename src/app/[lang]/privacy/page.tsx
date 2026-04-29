import { getDictionary } from "@/i18n/getDictionary";
import { fallbackLang, isLang, type Lang } from "@/i18n/languages";
import { Container } from "@/components/Container";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (isLang(langParam) ? langParam : fallbackLang) as Lang;
  const dict = getDictionary(lang);

  return (
    <main className="flex-1 py-14 sm:py-20">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          {dict.footer.privacy}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600">
          Placeholder. Add your privacy policy text here.
        </p>
      </Container>
    </main>
  );
}