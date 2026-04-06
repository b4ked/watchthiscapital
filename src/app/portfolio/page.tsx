import type { Metadata } from "next";
import PortfolioCard from "@/components/PortfolioCard";
import STGFeaturedCard from "@/components/STGFeaturedCard";
import FadeUp from "@/components/FadeUp";
import { portfolioSites } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Watch This Capital's market positions — ventures at the intersection of Deep Tech, AI, SaaS, and strategic media where we architect, scale, and sustain category leaders.",
};

export default function PortfolioPage() {
  const liveSites = portfolioSites.filter((s) => s.status === "live");
  const devSites = portfolioSites.filter((s) => s.status === "development");
  const plannedSites = portfolioSites.filter((s) => s.status === "planned");

  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="relative px-6 md:px-10 py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <FadeUp className="lg:col-span-8">
            <span className="inline-block py-1 px-3 mb-6 border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase rounded-sm">
              Market positions
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[0.9] tracking-tighter text-white mb-8">
              These are our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                positions.
              </span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Each represents a deliberate bet at the intersection of
              intelligence, infrastructure, or information. We identified the
              opportunity, built the authoritative position, and own it.
            </p>
          </FadeUp>

          <FadeUp delay={0.15} className="lg:col-span-4 flex lg:justify-end">
            <div className="p-8 bg-surface-container-low rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-5xl font-headline font-bold text-white mb-1">
                  {portfolioSites.length}
                </div>
                <div className="text-xs uppercase tracking-widest text-primary font-bold font-headline">
                  Active market positions
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-5">
                <span className="text-[8rem] font-black text-white leading-none font-headline">
                  W
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Portfolio sections ── */}
      <div className="pb-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-20">

          {liveSites.length > 0 && (
            <section>
              <FadeUp className="mb-8">
                <span className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4 font-headline">
                  Live
                </span>
                <h2 className="text-2xl font-headline font-bold text-white">
                  Active positions
                </h2>
              </FadeUp>
              <div className="flex flex-col gap-6">
                {liveSites.map((site, i) =>
                  site.domain === "soletraderguide.co.uk" ? (
                    <FadeUp key={site.domain} delay={i * 0.08}>
                      <STGFeaturedCard site={site} />
                    </FadeUp>
                  ) : (
                    <FadeUp key={site.domain} delay={i * 0.1}>
                      <PortfolioCard site={site} />
                    </FadeUp>
                  )
                )}
              </div>
            </section>
          )}

          {devSites.length > 0 && (
            <section>
              <FadeUp className="mb-8">
                <span className="inline-block px-3 py-1 border border-tertiary/20 bg-tertiary/5 text-tertiary text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4 font-headline">
                  In Development
                </span>
                <h2 className="text-2xl font-headline font-bold text-white">
                  Building now
                </h2>
              </FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {devSites.map((site, i) => (
                  <FadeUp key={site.domain} delay={i * 0.1}>
                    <PortfolioCard site={site} />
                  </FadeUp>
                ))}
              </div>
            </section>
          )}

          {plannedSites.length > 0 && (
            <section>
              <FadeUp className="mb-8">
                <span className="inline-block px-3 py-1 border border-outline-variant/30 bg-on-surface-variant/5 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4 font-headline">
                  Market identified
                </span>
                <h2 className="text-2xl font-headline font-bold text-white">
                  Markets we are moving into
                </h2>
                <p className="text-on-surface-variant text-sm mt-2">
                  Market thesis validated. Domain registered. Build sequenced.
                </p>
              </FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plannedSites.map((site, i) => (
                  <FadeUp key={site.domain} delay={i * 0.1}>
                    <PortfolioCard site={site} />
                  </FadeUp>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </main>
  );
}
