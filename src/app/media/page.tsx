import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Download, Mail, ExternalLink } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import CopyButton from "@/components/CopyButton";
import { portfolioSites } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Media Kit",
  description:
    "Press resources for Watch This Capital — boilerplate copy, brand assets, colour palette, and portfolio overview for journalists and commercial partners.",
};

/* ── Boilerplate copy ── */
const SHORT =
  "Watch This Capital is a UK portfolio holdings company that architects, scales, and sustains high-impact ventures at the intersection of Deep Tech, AI, and digital infrastructure.";

const MEDIUM =
  "Watch This Capital is a UK-based portfolio holdings company operating at the intersection of intelligence, infrastructure, and information. Founded in 2025 and registered in England and Wales, the company identifies high-value markets where no authoritative resource yet exists, builds the category-defining position, and compounds it for the long term. Current portfolio spans UK digital compliance and information services, with a pipeline extending into self-employed finance, equity release, and the trades sector.";

const FULL =
  `Watch This Capital is a UK-based portfolio holdings company. We architect, scale, and sustain high-impact ventures at the intersection of Deep Tech, AI, and digital infrastructure — turning early-stage market gaps into category leaders.

Our approach is rooted in one belief: the next decade of value creation belongs to companies that master the synergy between intelligence and infrastructure. We look for the same pattern every time — a sector under structural pressure, an audience making high-stakes decisions, and no independent category leader yet built. When we find it, we move.

Current positions span UK digital compliance and information services, with active development across self-employed finance, equity release, and the trades sector. Our pipeline extends into AI-native tooling and B2B SaaS verticals where the same structural dynamics apply. Each venture is independently operated with its own brand identity — but all share the same commitment to depth, trust, and long-term authority.`;

/* ── Colour palette ── */
const palette = [
  { name: "Deep Black", hex: "#131313", usage: "Background" },
  { name: "Surface", hex: "#1c1b1b", usage: "Cards / Panels" },
  { name: "Teal", hex: "#26c6da", usage: "Primary / Accent" },
  { name: "Dark Teal", hex: "#0097a7", usage: "Primary Container" },
  { name: "Off White", hex: "#e5e2e1", usage: "Body text" },
  { name: "Muted", hex: "#b0bec5", usage: "Subtext / Labels" },
];

/* ── Logo assets ── */
const logos = [
  {
    label: "Full wordmark",
    description: "Transparent background — use on dark surfaces",
    src: "/logo-transparent.png",
    file: "wtc-logo-transparent.png",
    bg: "#1c1b1b",
    width: 220,
    height: 110,
  },
  {
    label: "Square icon",
    description: "For avatars, favicons, and compact placements",
    src: "/logo-square.png",
    file: "wtc-logo-square.png",
    bg: "#1c1b1b",
    width: 80,
    height: 80,
  },
  {
    label: "Full wordmark (dark bg)",
    description: "On-background version with full contrast",
    src: "/logo.png",
    file: "wtc-logo.png",
    bg: "#0e0e0e",
    width: 220,
    height: 110,
  },
];

export default function MediaPage() {
  const liveSites = portfolioSites.filter((s) => s.status === "live");

  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="relative px-6 md:px-10 py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-screen-xl mx-auto">
          <FadeUp className="max-w-3xl">
            <span className="inline-block py-1 px-3 mb-6 border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase rounded-sm">
              Media Kit
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[0.9] tracking-tighter text-white mb-8">
              Everything you need{" "}
              <span className="hero-gradient-text">to write about us.</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl">
              Boilerplate copy, brand assets, colour palette, and portfolio
              overview — ready to use. For anything not covered here, contact us
              directly.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Quick facts ── */}
      <section className="py-20 px-6 md:px-10 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp className="mb-10">
            <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-2">
              Quick facts
            </span>
            <h2 className="text-2xl font-headline font-bold text-white">
              At a glance
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Founded", value: "2025" },
              { label: "Jurisdiction", value: "England\n& Wales" },
              { label: "Portfolio", value: `${portfolioSites.length}` },
              { label: "Live positions", value: `${liveSites.length}` },
              { label: "Primary market", value: "UK" },
              { label: "Sector", value: "Deep Tech\n& Info Services" },
            ].map((f, i) => (
              <FadeUp key={f.label} delay={i * 0.06}>
                <div className="bg-surface-container rounded-xl p-6 text-center h-full">
                  <div className="text-2xl font-headline font-black text-white mb-1 leading-tight whitespace-pre-line">
                    {f.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold font-headline">
                    {f.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Boilerplate ── */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp className="mb-10">
            <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-2">
              Boilerplate copy
            </span>
            <h2 className="text-2xl font-headline font-bold text-white">
              Ready-to-use descriptions
            </h2>
            <p className="text-sm text-on-surface-variant mt-2 max-w-xl">
              Use these verbatim. They are accurate, approved, and kept up to date.
            </p>
          </FadeUp>

          <div className="flex flex-col gap-6 max-w-3xl">

            {/* One sentence */}
            <FadeUp delay={0.05}>
              <div className="bg-surface-container-low rounded-xl border border-outline-variant/20 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/20">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-headline">
                    One sentence
                  </span>
                  <CopyButton text={SHORT} />
                </div>
                <p className="px-6 py-5 text-sm text-on-surface-variant leading-relaxed">
                  {SHORT}
                </p>
              </div>
            </FadeUp>

            {/* One paragraph */}
            <FadeUp delay={0.1}>
              <div className="bg-surface-container-low rounded-xl border border-outline-variant/20 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/20">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-headline">
                    One paragraph
                  </span>
                  <CopyButton text={MEDIUM} />
                </div>
                <p className="px-6 py-5 text-sm text-on-surface-variant leading-relaxed">
                  {MEDIUM}
                </p>
              </div>
            </FadeUp>

            {/* Full */}
            <FadeUp delay={0.15}>
              <div className="bg-surface-container-low rounded-xl border border-outline-variant/20 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/20">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-headline">
                    Full (3 paragraphs)
                  </span>
                  <CopyButton text={FULL} />
                </div>
                <div className="px-6 py-5 flex flex-col gap-4">
                  {FULL.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-on-surface-variant leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── Brand assets ── */}
      <section className="py-20 px-6 md:px-10 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp className="mb-10">
            <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-2">
              Brand assets
            </span>
            <h2 className="text-2xl font-headline font-bold text-white">
              Logo downloads
            </h2>
            <p className="text-sm text-on-surface-variant mt-2 max-w-xl">
              Do not recolour, stretch, or apply effects. Maintain clear space equal to the
              height of the &ldquo;W&rdquo; glyph on all sides.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {logos.map((logo, i) => (
              <FadeUp key={logo.label} delay={i * 0.1}>
                <div className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 flex flex-col">
                  {/* Preview */}
                  <div
                    className="flex items-center justify-center p-10 min-h-[160px]"
                    style={{ background: logo.bg }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.label}
                      width={logo.width}
                      height={logo.height}
                      className="object-contain max-h-24 w-auto"
                    />
                  </div>
                  {/* Info + download */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div>
                      <p className="text-sm font-bold text-white font-headline">
                        {logo.label}
                      </p>
                      <p className="text-xs text-on-surface-variant mt-1">
                        {logo.description}
                      </p>
                    </div>
                    <a
                      href={logo.src}
                      download={logo.file}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-fixed transition-colors font-headline mt-auto"
                    >
                      <Download size={12} /> Download PNG
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Usage rules */}
          <FadeUp delay={0.2} className="mt-8">
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-primary font-headline mb-3">
                Usage guidelines
              </p>
              <ul className="flex flex-col gap-2 text-sm text-on-surface-variant">
                {[
                  "Use the transparent logo on dark backgrounds only.",
                  "Do not recolour, rotate, stretch, or add effects to any logo.",
                  "Maintain a minimum clear space equal to the height of the 'W' on all sides.",
                  "Do not use the logo in a way that implies endorsement without prior agreement.",
                  "For co-branded or campaign use, contact us first.",
                ].map((rule) => (
                  <li key={rule} className="flex gap-3">
                    <span className="text-primary mt-0.5 shrink-0">—</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Colour palette ── */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp className="mb-10">
            <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-2">
              Brand colours
            </span>
            <h2 className="text-2xl font-headline font-bold text-white">
              Colour palette
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {palette.map((colour, i) => (
              <FadeUp key={colour.hex} delay={i * 0.07}>
                <div className="flex flex-col gap-3">
                  <div
                    className="rounded-xl h-20 w-full border border-white/5"
                    style={{ background: colour.hex }}
                  />
                  <div>
                    <p className="text-sm font-bold text-white font-headline">
                      {colour.name}
                    </p>
                    <p className="text-xs text-on-surface-variant font-mono mt-0.5">
                      {colour.hex}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold mt-1">
                      {colour.usage}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typography ── */}
      <section className="py-20 px-6 md:px-10 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp className="mb-10">
            <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-2">
              Brand typography
            </span>
            <h2 className="text-2xl font-headline font-bold text-white">
              Typefaces
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <FadeUp delay={0}>
              <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/20">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary font-headline mb-4">
                  Headlines
                </p>
                <p className="text-5xl font-headline font-bold text-white leading-tight mb-4">
                  Aa
                </p>
                <p className="text-base font-headline font-bold text-white">
                  Space Grotesk
                </p>
                <p className="text-xs text-on-surface-variant mt-1">
                  Used for all headings, labels, badges, and navigation.
                  Google Fonts — free to use.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/20">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary font-headline mb-4">
                  Body
                </p>
                <p className="text-5xl font-bold text-white leading-tight mb-4">
                  Aa
                </p>
                <p className="text-base font-bold text-white">
                  Inter
                </p>
                <p className="text-xs text-on-surface-variant mt-1">
                  Used for all body copy and long-form text.
                  Google Fonts — free to use.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Portfolio overview ── */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp className="mb-10">
            <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-2">
              Portfolio
            </span>
            <h2 className="text-2xl font-headline font-bold text-white">
              Market positions
            </h2>
          </FadeUp>

          <div className="max-w-3xl flex flex-col gap-3">
            {portfolioSites.map((site, i) => (
              <FadeUp key={site.domain} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest shrink-0 font-headline ${
                        site.status === "live"
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-on-surface-variant/10 text-on-surface-variant border border-outline-variant/30"
                      }`}
                    >
                      {site.status === "live" ? "Live" : "Planned"}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white font-headline">
                        {site.name}
                      </p>
                      <p className="text-xs text-on-surface-variant">{site.domain}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-headline shrink-0">
                    {site.category}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-6 max-w-3xl">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-fixed transition-colors font-headline"
            >
              Full portfolio details <ExternalLink size={11} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Press contact ── */}
      <section className="py-20 px-6 md:px-10 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp>
            <div className="bg-surface-container rounded-2xl p-12 md:p-16 border border-outline-variant/20 max-w-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Mail size={20} className="text-primary" />
                </div>
                <h2 className="text-2xl font-headline font-bold text-white mb-3">
                  Press enquiries
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  For interview requests, fact-checking, or anything not covered
                  in this kit — reach out directly. We respond to press
                  enquiries within one business day.
                </p>
                <a
                  href="mailto:hello@watchthiscapital.com"
                  className="text-sm font-bold text-primary hover:text-primary-fixed transition-colors font-headline uppercase tracking-widest"
                >
                  hello@watchthiscapital.com
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
