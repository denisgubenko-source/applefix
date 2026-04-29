import { redirect } from "next/navigation";
import { getPreferredLang } from "@/lib/langDetect";

export default async function Home() {
  const lang = await getPreferredLang();
  redirect(`/${lang}/`);
}