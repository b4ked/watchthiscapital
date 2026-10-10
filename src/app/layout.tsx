import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, TAGLINE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Watch This Capital is a UK company building managed AI agents that run routine business workflows: inbound triage, record keeping, staff answers and regular reports.";

export const metadata: Metadata = {
  title: {
    default: "Watch This Capital — Managed AI agents for business workflows",
    template: "%s | Watch This Capital",
  },
  description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Watch This Capital — Managed AI agents for business workflows",
    description: TAGLINE,
    siteName: "Watch This Capital",
    locale: "en_GB",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Watch This Capital — Managed AI agents for business workflows",
    description: TAGLINE,
  },
  other: {
    "impact-site-verification": "44dee71b-4663-411c-913a-da5de7059c93",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-surface text-on-surface">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] btn-primary"
        >
          Skip to content
        </a>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
