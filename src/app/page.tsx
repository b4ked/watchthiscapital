import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Shield, TrendingUp } from "lucide-react";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioSites } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Watch This Capital — Trusted Resources for UK Regulated Markets",
  description:
    "Watch This Capital builds trusted content and comparison websites that help UK consumers and small businesses navigate regulated markets with clarity and confidence.",
};

const pillars = [
  {
    icon: <Shield size={20} className="text-primary" />,
    title: "Trust first",
    description:
      "Every site we build prioritises accuracy, balance, and transparency. We disclose commercial relationships clearly and never let affiliate income distort editorial judgement.",
  },
  {
    icon: <Globe size={20} className="text-primary" />,
    title: "Clarity over cleverness",
    description:
      "Our readers are navigating complex, often mandatory requirements. We write in plain English that respects their intelligence without assuming specialist knowledge.",
  },
  {
    icon: <TrendingUp size={20} className="text-primary" />,
    title: "Built for the long term",
    description:
      "We invest in depth and accuracy rather than content volume. Each site is designed to earn trust and authority over years, not to chase short-term traffic.",
  },
];

export default function HomePage() {
  const liveSites = portfolioSites.filter((s) => s.status === "live");
  const pipelineSites = portfolioSites.filter((s) => s.status !== "live");

  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="relative min-h-[860px] flex items-center px-6 md:px-10 overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary-container/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left — headline */}
          <div className="lg:col-span-7 z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 font-headline">
              Watch This Capital
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[0.95] tracking-tighter mb-8 text-white">
              Trusted resources for people navigating{" "}
              <span className="hero-gradient-text">regulated markets.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-10">
              We build independent content and comparison websites that help UK
              consumers and small businesses understand their obligations,
              evaluate their options, and make confident decisions — without the
              jargon, without the bias.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/portfolio"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-headline"
              >
                Explore portfolio <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-headline"
              >
                About us
              </Link>
            </div>
          </div>

          {/* Right — info card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-surface-container-low p-8 rounded-2xl relative z-10 border border-white/5 lg:rotate-1">
              <div className="space-y-6">
                {/* Logo */}
                <div className="flex justify-center pb-2">
                  <Image
                    src="/logo.png"
                    alt="Watch This Capital"
                    width={340}
                    height={180}
                    className="w-full max-w-[280px] h-auto object-contain"
                    priority
                  />
                </div>
                <div>
                  <div className="h-0.5 w-12 bg-primary-container mb-6" />
                  <p className="text-xs font-headline font-bold uppercase tracking-[0.2em] text-primary mb-2">
                    Our portfolio
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Independent content sites covering UK regulated sectors —
                    tax, finance, compliance, and more. Built to earn trust over
                    years.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/20">
                  {[
                    { value: `${liveSites.length}+`, label: "Live sites" },
                    { value: "UK", label: "Market focus" },
                    { value: "2025", label: "Founded" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-2xl font-headline font-black text-white mb-1">
                        {s.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-surface-container rounded-xl p-5">
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-2">
                    Latest entry
                  </p>
                  <p className="text-base font-headline font-bold text-white">
                    SoleTraderGuide
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    The UK&apos;s practical guide to Making Tax Digital for
                    Income Tax. Scaling through the 2026–2028 rollout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="py-20 px-6 md:px-10 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-surface-container rounded-2xl flex flex-col justify-between">
            <Globe size={32} className="text-primary mb-10" />
            <div>
              <h4 className="text-4xl font-headline font-black mb-2 text-white">
                UK-focused
              </h4>
              <p className="text-on-surface-variant uppercase tracking-widest text-xs font-bold">
                Market coverage
              </p>
            </div>
          </div>
          <div className="p-10 bg-primary-container text-white rounded-2xl flex flex-col justify-between">
            <Shield size={32} className="text-white mb-10" />
            <div>
              <h4 className="text-4xl font-headline font-black mb-2">
                Trust first
              </h4>
              <p className="text-blue-100 uppercase tracking-widest text-xs font-bold">
                Editorial standard
              </p>
            </div>
          </div>
          <div className="p-10 bg-surface-container rounded-2xl flex flex-col justify-between">
            <TrendingUp size={32} className="text-primary mb-10" />
            <div>
              <h4 className="text-4xl font-headline font-black mb-2 text-white">
                Long term
              </h4>
              <p className="text-on-surface-variant uppercase tracking-widest text-xs font-bold">
                Growth strategy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-28 px-6 md:px-10 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[140px] font-black text-white/[0.03] select-none font-headline leading-none pointer-events-none">
            PURPOSE
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold leading-tight mb-8 relative z-10 text-white">
            Building a trusted layer between complex UK regulations and the
            people who need to comply with them.
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-base text-on-surface-variant leading-relaxed max-w-xl mx-auto">
            UK regulation is changing fast. We believe independent, honest
            content — not vendor marketing — should help people navigate it.
            Every site we build earns its place through accuracy, not SEO volume.
          </p>
        </div>
      </section>

      {/* ── Live portfolio ── */}
      {liveSites.length > 0 && (
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-3">
                  Live now
                </span>
                <h2 className="text-4xl font-headline font-bold text-white">
                  Current sites
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 text-sm font-headline uppercase tracking-widest font-bold"
              >
                Full portfolio <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveSites.map((site) => (
                <PortfolioCard key={site.domain} site={site} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── How we operate ── */}
      <section className="py-20 px-6 md:px-10 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-12">
            <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-3">
              How we operate
            </span>
            <h2 className="text-4xl font-headline font-bold text-white">
              What makes a Watch This Capital site
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-surface-container p-8 rounded-xl"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-headline font-bold text-white mb-3 text-lg">
                  {pillar.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pipeline ── */}
      {pipelineSites.length > 0 && (
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-12">
              <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-3">
                Coming soon
              </span>
              <h2 className="text-4xl font-headline font-bold text-white">
                Sites in the pipeline
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pipelineSites.map((site) => (
                <PortfolioCard key={site.domain} site={site} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-surface-container-low rounded-3xl p-12 md:p-20 overflow-hidden relative border border-white/5">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-headline font-bold mb-6 text-white">
                  Work with us
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
                  We partner with software vendors, financial services providers,
                  and specialist businesses who want to reach informed,
                  high-intent UK audiences.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-headline"
                >
                  Get in touch <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "UK", l: "Focus" },
                  { v: "Trust", l: "First" },
                  { v: "SEO", l: "Led growth" },
                  { v: "Long", l: "Term" },
                ].map((item) => (
                  <div
                    key={item.l}
                    className="aspect-square bg-surface-container rounded-xl flex flex-col items-center justify-center text-center p-5 border border-white/5"
                  >
                    <span className="text-primary font-headline text-2xl font-bold mb-1">
                      {item.v}
                    </span>
                    <span className="text-on-surface-variant text-xs uppercase font-bold tracking-widest">
                      {item.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
