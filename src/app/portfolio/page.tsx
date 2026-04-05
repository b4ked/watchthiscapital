import type { Metadata } from "next";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioSites } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Watch This Capital's portfolio of trusted content and comparison websites for UK regulated markets. Live sites and upcoming launches.",
};

export default function PortfolioPage() {
  const liveSites = portfolioSites.filter((s) => s.status === "live");
  const devSites = portfolioSites.filter((s) => s.status === "development");
  const plannedSites = portfolioSites.filter((s) => s.status === "planned");

  return (
    <main>
      {/* Hero */}
      <section className="wtc-hero-gradient text-white py-16 md:py-20">
        <div className="page-container">
          <div className="max-w-2xl">
            <p className="text-[#d97706] text-xs font-semibold uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our sites
            </h1>
            <p className="text-white/70 leading-relaxed">
              Each site in the Watch This Capital portfolio focuses on a specific market, audience,
              and set of decisions. Every one is built to the same standards of accuracy, transparency,
              and editorial independence.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="page-container flex flex-col gap-16">
          {/* Live */}
          {liveSites.length > 0 && (
            <section>
              <div className="mb-8">
                <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Live
                </span>
                <h2 className="text-xl font-bold text-slate-900">Published sites</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveSites.map((site) => (
                  <PortfolioCard key={site.domain} site={site} />
                ))}
              </div>
            </section>
          )}

          {/* In development */}
          {devSites.length > 0 && (
            <section>
              <div className="mb-8">
                <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  In Development
                </span>
                <h2 className="text-xl font-bold text-slate-900">Sites in development</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {devSites.map((site) => (
                  <PortfolioCard key={site.domain} site={site} />
                ))}
              </div>
            </section>
          )}

          {/* Planned */}
          {plannedSites.length > 0 && (
            <section>
              <div className="mb-8">
                <span className="inline-block bg-slate-100 text-slate-600 border border-slate-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Planned
                </span>
                <h2 className="text-xl font-bold text-slate-900">Sites in the pipeline</h2>
                <p className="text-slate-500 text-sm mt-1">
                  Research and planning is underway. Domain registration and timelines confirmed.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plannedSites.map((site) => (
                  <PortfolioCard key={site.domain} site={site} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
