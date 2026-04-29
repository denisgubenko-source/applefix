import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://applefix.ee"),
  title: {
    default: "AppleFix — Apple device repair in Tallinn",
    template: "%s — AppleFix",
  },
  description:
    "Premium Apple device repair in Tallinn. Fast diagnostics, careful work, and parts options that match your preference and budget.",
  alternates: {
    canonical: "https://applefix.ee/",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const store = await cookies();
  const lang = store.get("af_lang")?.value ?? "en";

  return (
    <html lang={lang} className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-950">
        {children}
      </body>
    </html>
  );
}