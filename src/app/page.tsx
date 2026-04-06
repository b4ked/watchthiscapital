import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Shield, TrendingUp } from "lucide-react";
import PortfolioCard from "@/components/PortfolioCard";
import HeroSection from "@/components/HeroSection";
import FadeUp from "@/components/FadeUp";
import { portfolioSites } from "@/lib/portfolio";
import ThesisStrip from "@/components/ThesisStrip";
import PillarsGrid from "@/components/PillarsGrid";

export const metadata: Metadata = {
  title: "Watch This Capital — Deep Tech, AI & Digital Infrastructure",
  description:
    "Watch This Capital architects, scales, and sustains high-impact ventures at the intersection of intelligence and infrastructure — from AI and SaaS to strategic media.",
};

const pillars = [
  {
    icon: <Shield size={20} className="text-primary" />,
    title: "Trust first",
    description:
      "We would rather lose a commercial arrangement than back something we cannot stand behind. Every relationship is disclosed. Our judgement is not for sale.",
  },
  {
    icon: <Globe size={20} className="text-primary" />,
    title: "Clarity over cleverness",
    description:
      "The markets we operate in are complex by nature. Our job is to make them navigable — whether that is a sole trader choosing compliance software or a founder evaluating a sector. Fifteen minutes and something important to decide. We build for that person.",
  },
  {
    icon: <TrendingUp size={20} className="text-primary" />,
    title: "Built to last",
    description:
      "We build for depth, not volume. One well-researched, accurately maintained position will compound for years. That is what earns category authority — and holds it.",
  },
];

export default function HomePage() {
  const liveSites = portfolioSites.filter((s) => s.status === "live");
  const pipelineSites = portfolioSites.filter((s) => s.status !== "live");

  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <HeroSection liveSitesCount={liveSites.length} />

      {/* ── Thesis strip ── */}
      <ThesisStrip />

      {/* ── Mission ── */}
      <section className="py-28 px-6 md:px-10 overflow-hidden">
        <FadeUp className="max-w-3xl mx-auto text-center relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[140px] font-black text-white/[0.03] select-none font-headline leading-none pointer-events-none">
            THESIS
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold leading-tight mb-8 relative z-10 text-white">
            We look for the same pattern every time.
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-base text-on-surface-variant leading-relaxed max-w-xl mx-auto">
            A sector under structural pressure. Audiences making high-stakes
            decisions. No category leader yet built. When we find that pattern —
            at the intersection of intelligence, infrastructure, or information
            — we move.
          </p>
        </FadeUp>
      </section>

      {/* ── Live portfolio ── */}
      {liveSites.length > 0 && (
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-screen-xl mx-auto">
            <FadeUp className="flex justify-between items-end mb-12">
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
            </FadeUp>

            <div className="flex flex-col gap-6">
              {liveSites.map((site, i) =>
                site.domain === "soletraderguide.co.uk" ? (
                  /* ── Featured card: SoleTraderGuide ── */
                  <FadeUp key={site.domain} delay={i * 0.08}>
                    <div className="bg-surface-container-low rounded-2xl border border-[#0d6e6e]/30 hover:border-[#0d6e6e]/60 transition-all duration-300 overflow-hidden hover:shadow-[0_0_48px_rgba(13,110,110,0.12)] group">
                      <div className="flex flex-col lg:flex-row">
                        {/* Brand panel */}
                        <div className="bg-[#0d6e6e]/10 border-b lg:border-b-0 lg:border-r border-[#0d6e6e]/20 p-8 lg:p-10 flex flex-col justify-between gap-8 lg:w-72 shrink-0">
                          <div className="flex flex-col gap-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 232 44"
                              width="180"
                              height="34"
                              aria-label="SoleTraderGuide"
                            >
                              <rect x="0" y="2" width="40" height="40" rx="9" fill="#0d6e6e" />
                              <polygon points="20,7 23,18 20,15.5 17,18" fill="white" />
                              <polygon points="20,35 23,24 20,26.5 17,24" fill="white" opacity="0.3" />
                              <circle cx="20" cy="21" r="3" fill="#0d6e6e" stroke="white" strokeWidth="1.5" />
                              <text
                                x="52"
                                y="28"
                                fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, sans-serif"
                                fontSize="22"
                                fontWeight="700"
                                letterSpacing="-0.6"
                              >
                                <tspan fill="white">SoleTrader</tspan>
                                <tspan fill="#26c6da">Guide</tspan>
                              </text>
                            </svg>
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest bg-[#0d6e6e]/20 text-[#26c6da] border border-[#0d6e6e]/30 w-fit">
                              <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4"/></svg>
                              Live
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                              {site.category}
                            </span>
                            <span className="text-xs text-on-surface-variant/60">{site.domain}</span>
                          </div>
                        </div>

                        {/* Content panel */}
                        <div className="flex-1 p-8 lg:p-10 flex flex-col gap-6">
                          <p className="text-sm text-on-surface-variant leading-relaxed">
                            {site.description}
                          </p>
                          <div className="grid grid-cols-3 gap-4 p-5 bg-surface-container rounded-xl">
                            {[
                              { value: "4.2M", label: "UK sole traders" },
                              { value: "2026", label: "MTD deadline" },
                              { value: "UK", label: "Market" },
                            ].map((s) => (
                              <div key={s.label} className="text-center">
                                <div className="text-xl font-headline font-black text-white mb-0.5">
                                  {s.value}
                                </div>
                                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                                  {s.label}
                                </div>
                              </div>
                            ))}
                          </div>
                          <Link
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#26c6da] hover:text-primary transition-colors w-fit"
                          >
                            Visit site <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                ) : (
                  <FadeUp key={site.domain} delay={i * 0.08}>
                    <PortfolioCard site={site} />
                  </FadeUp>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Pipeline ── */}
      {pipelineSites.length > 0 && (
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-screen-xl mx-auto">
            <FadeUp className="mb-12">
              <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-3">
                In development
              </span>
              <h2 className="text-4xl font-headline font-bold text-white">
                Markets we are moving into
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pipelineSites.map((site, i) => (
                <FadeUp key={site.domain} delay={i * 0.1}>
                  <PortfolioCard site={site} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── How we operate ── */}
      <section className="py-20 px-6 md:px-10 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp className="mb-12">
            <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-3">
              How we operate
            </span>
            <h2 className="text-4xl font-headline font-bold text-white">
              The standards every position is held to
            </h2>
          </FadeUp>
          <PillarsGrid pillars={pillars} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp>
            <div className="bg-surface-container-low rounded-3xl p-12 md:p-20 overflow-hidden relative border border-white/5 hover:border-primary/10 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl font-headline font-bold mb-6 text-white">
                  Partner with us.
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-4">
                  We take positions where structural change creates demand for a
                  category-defining resource. If you are building something at
                  the intersection of Deep Tech, AI, SaaS, or strategic media —
                  and want a partner who operates, not just allocates capital —
                  we want to hear from you.
                </p>
                <p className="text-sm text-on-surface-variant/70 leading-relaxed mb-10">
                  We partner selectively. We operate with conviction. That is the
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
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
