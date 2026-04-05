import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: {
    default: "Watch This Capital",
    template: "%s | Watch This Capital",
  },
  description:
    "Watch This Capital builds trusted content and comparison resources in UK regulated markets, helping people make confident, informed decisions.",
  metadataBase: new URL("https://watchthiscapital.com"),
  openGraph: {
    siteName: "Watch This Capital",
    locale: "en_GB",
    type: "website",
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
      className={`dark ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-surface text-on-surface">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
