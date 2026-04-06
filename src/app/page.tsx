import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Shield, TrendingUp } from "lucide-react";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioSites } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Watch This Capital — Regulated Information Markets",
  description:
    "Watch This Capital identifies regulated markets where trust is structurally absent, builds the authoritative independent resource, and owns the gap.",
};

const pillars = [
  {
    icon: <Shield size={20} className="text-primary" />,
    title: "Trust first",
    description:
      "We would rather lose a commercial arrangement than publish something we cannot stand behind. Affiliate relationships are disclosed. Editorial decisions are not for sale.",
  },
  {
    icon: <Globe size={20} className="text-primary" />,
    title: "Clarity over cleverness",
    description:
      "Our readers face mandatory, consequential requirements. They need clear answers, not clever writing. We write for the person with fifteen minutes and something important to understand.",
  },
  {
    icon: <TrendingUp size={20} className="text-primary" />,
    title: "Built to last",
    description:
      "One well-researched, accurately maintained resource will serve readers for years. We build for depth, not volume. That is what earns authority — and holds it.",
  },
];

export default function HomePage() {
  const liveSites = portfolioSites.filter((s) => s.status === "live");
  const pipelineSites = portfolioSites.filter((s) => s.status !== "live");

  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="relative min-h-[860px] flex items-center px-6 md:px-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary-container/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-7 z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 font-headline">
              Watch This Capital
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[0.95] tracking-tighter mb-8 text-white">
              Every regulation creates a question. We build the{" "}
              <span className="hero-gradient-text">answer.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-10">
              We exist to fill a specific gap: the space between government
              guidance that is difficult to read and vendor marketing that cannot
              be trusted. Independent, authoritative resources for people making
              high-stakes decisions in UK regulated markets.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/portfolio"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-headline"
              >
                Our positions <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-headline"
              >
                Our thesis
              </Link>
            </div>
          </div>

          {/* Right — info card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-surface-container-low p-8 rounded-2xl relative z-10 border border-white/5 lg:rotate-1">
              <div className="space-y-6">
                <div className="flex justify-center pb-2">
                  <Image
                    src="/logo-transparent.png"
                    alt="Watch This Capital"
                    width={340}
                    height={200}
                    className="w-full max-w-[280px] h-auto object-contain"
                    priority
                  />
                </div>
                <div>
                  <div className="h-0.5 w-12 bg-primary-container mb-6" />
                  <p className="text-xs font-headline font-bold uppercase tracking-[0.2em] text-primary mb-2">
                    The thesis
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Regulated markets where trust is structurally absent. We
                    identify them, build the authoritative resource, and own the
                    gap.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/20">
                  {[
                    { value: `${liveSites.length}`, label: "Live now" },
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
                    Active position
                  </p>
                  <p className="text-base font-headline font-bold text-white">
                    SoleTraderGuide
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    4.2M sole traders. MTD mandatory from 2026. The independent
                    guide — built before the rush.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Thesis strip ── */}
      <section className="py-20 px-6 md:px-10 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-surface-container rounded-2xl flex flex-col justify-between">
            <Globe size={32} className="text-primary mb-10" />
            <div>
              <h4 className="text-4xl font-headline font-black mb-2 text-white">
                We identify
              </h4>
              <p className="text-on-surface-variant uppercase tracking-widest text-xs font-bold">
                Regulated markets where trust is absent
              </p>
            </div>
          </div>
          <div className="p-10 bg-primary-container text-white rounded-2xl flex flex-col justify-between">
            <Shield size={32} className="text-white mb-10" />
            <div>
              <h4 className="text-4xl font-headline font-black mb-2">
                We build
              </h4>
              <p className="text-blue-100 uppercase tracking-widest text-xs font-bold">
                The authoritative resource that resolves it
              </p>
            </div>
          </div>
          <div className="p-10 bg-surface-container rounded-2xl flex flex-col justify-between">
            <TrendingUp size={32} className="text-primary mb-10" />
            <div>
              <h4 className="text-4xl font-headline font-black mb-2 text-white">
                We own
              </h4>
              <p className="text-on-surface-variant uppercase tracking-widest text-xs font-bold">
                The gap — with disclosed commercial relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-28 px-6 md:px-10 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[140px] font-black text-white/[0.03] select-none font-headline leading-none pointer-events-none">
            THESIS
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold leading-tight mb-8 relative z-10 text-white">
            We look for the same pattern every time.
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-base text-on-surface-variant leading-relaxed max-w-xl mx-auto">
            A market under regulatory pressure. An audience making consequential
            decisions. No independent resource they can actually trust. When we
            find that pattern, we build — and we build to last.
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
                  Active positions
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 text-sm font-headline uppercase tracking-widest font-bold"
              >
                All positions <ArrowRight size={14} />
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
              The standards every position is held to
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
                In development
              </span>
              <h2 className="text-4xl font-headline font-bold text-white">
                Markets we are moving into
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
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-headline font-bold mb-6 text-white">
                Partner with us.
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-4">
                We take positions in regulated markets where trust is
                structurally broken. If you make a product that genuinely
                belongs in one of our markets — and can stand independent
                editorial scrutiny — we want to hear from you.
              </p>
              <p className="text-sm text-on-surface-variant/70 leading-relaxed mb-10">
                Every commercial relationship on our sites is disclosed. Being
                listed does not guarantee a positive assessment. That is the
                point.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-headline"
              >
                Get in touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
