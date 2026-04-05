import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioSites } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Watch This Capital — Trusted Resources for UK Regulated Markets",
  description:
    "Watch This Capital builds trusted content and comparison websites that help UK consumers and small businesses navigate regulated markets with clarity and confidence.",
};

const pillars = [
  {
    icon: <Shield size={22} className="text-[#d97706]" />,
    title: "Trust first",
    description:
      "Every site we build prioritises accuracy, balance, and transparency. We disclose commercial relationships clearly and never let affiliate income distort editorial judgement.",
  },
  {
    icon: <Globe size={22} className="text-[#d97706]" />,
    title: "Clarity over cleverness",
    description:
      "Our readers are navigating complex, often mandatory requirements. We write in plain English that respects their intelligence without assuming specialist knowledge.",
  },
  {
    icon: <TrendingUp size={22} className="text-[#d97706]" />,
    title: "Built for the long term",
    description:
      "We invest in depth and accuracy rather than content volume. Each site is designed to earn trust and authority over years, not to chase short-term traffic.",
  },
];

export default function HomePage() {
  const liveSites = portfolioSites.filter((s) => s.status === "live");
  const pipelineSites = portfolioSites.filter((s) => s.status !== "live");

  return (
    <main>
      {/* Hero */}
      <section className="wtc-hero-gradient text-white py-20 md:py-28">
        <div className="page-container">
          <div className="max-w-2xl">
            <p className="text-[#d97706] text-sm font-semibold uppercase tracking-widest mb-4">
              Watch This Capital
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Trusted resources for people navigating regulated markets
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8">
              We build independent content and comparison websites that help UK consumers and small
              businesses understand their obligations, evaluate their options, and make confident decisions
              — without the jargon, without the bias.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                View our portfolio <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
              >
                About the company
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live portfolio */}
      {liveSites.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="page-container">
            <div className="mb-10">
              <p className="text-[#d97706] text-xs font-semibold uppercase tracking-widest mb-2">Live now</p>
              <h2 className="text-2xl font-bold text-slate-900">Our current sites</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveSites.map((site) => (
                <PortfolioCard key={site.domain} site={site} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pillars */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="page-container">
          <div className="mb-10 max-w-xl">
            <p className="text-[#d97706] text-xs font-semibold uppercase tracking-widest mb-2">How we operate</p>
            <h2 className="text-2xl font-bold text-slate-900">What makes a Watch This Capital site</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 bg-[#0f2340]/5 rounded-lg flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      {pipelineSites.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="page-container">
            <div className="mb-10">
              <p className="text-[#d97706] text-xs font-semibold uppercase tracking-widest mb-2">Coming soon</p>
              <h2 className="text-2xl font-bold text-slate-900">Sites in the pipeline</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pipelineSites.map((site) => (
                <PortfolioCard key={site.domain} site={site} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#0f2340] text-white">
        <div className="page-container">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Work with us</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              We partner with software vendors, financial services providers, and specialist businesses
              who want to reach informed, high-intent UK audiences.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
