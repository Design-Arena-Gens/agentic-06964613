import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-06964613.vercel.app"),
  title: "LinguaQuest | تعلم لغات العالم عبر المتعة",
  description:
    "تطبيق ويب تفاعلي يجمع بين المتعة والتعليم لاستكشاف وتعلّم أكثر من 190 لغة من حول العالم",
  openGraph: {
    title: "LinguaQuest | تعلم لغات العالم عبر المتعة",
    description:
      "رحلة ممتعة لتعلم لغات العالم من خلال الألعاب، والمغامرات، والمحادثات الواقعية",
    url: "https://agentic-06964613.vercel.app",
    siteName: "LinguaQuest",
    locale: "ar",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LinguaQuest | تعلم لغات العالم عبر المتعة",
    description:
      "حلق في رحلة عالمية لتعلم اللغات من خلال التحديات المرحه والمحادثات الواقعية"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
