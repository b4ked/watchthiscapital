import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Watch This Capital builds trusted content and comparison websites for UK regulated markets. Learn about our mission, approach, and the principles behind how we build.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="wtc-hero-gradient text-white py-16 md:py-20">
        <div className="page-container">
          <div className="max-w-2xl">
            <p className="text-[#d97706] text-xs font-semibold uppercase tracking-widest mb-3">About</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why we build what we build
            </h1>
            <p className="text-white/70 leading-relaxed">
              Watch This Capital is a digital publishing company focused on regulated UK markets.
              We exist to fill a gap: the space between government guidance that is difficult to read
              and vendor marketing that cannot be trusted.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="page-container">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our mission</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Millions of UK consumers, sole traders, freelancers, and small business owners navigate
              complicated, often mandatory requirements every year. They face tax changes they do not
              understand, compliance deadlines that carry penalties, and a software market full of
              competing products with no independent guide to compare them.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Watch This Capital builds the independent resources these audiences deserve. Sites that
              explain what is actually required, why it matters, and which tools are genuinely the best fit —
              without a hidden agenda, without filler, and without unnecessary complexity.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We are commercial, and we are transparent about it. Some of our content earns affiliate
              commission when readers purchase or sign up to products we recommend. We disclose this
              clearly and it does not influence our editorial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-slate-50">
        <div className="page-container">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Our principles</h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Trust first, revenue second",
                  body: "We would rather lose a commercial arrangement than publish something we cannot stand behind. Affiliate relationships never alter what we recommend.",
                },
                {
                  title: "Clarity over cleverness",
                  body: "Our readers are navigating mandatory, consequential requirements. They do not need clever writing — they need clear answers. We write for the person who has fifteen minutes and needs to understand something important.",
                },
                {
                  title: "Structured and practical",
                  body: "Every page we publish should be useful to someone trying to make a decision. We do not publish content to fill gaps or hit targets. We publish content when it genuinely serves the reader.",
                },
                {
                  title: "Long-term authority",
                  body: "We invest in depth over volume. A single well-researched, accurately maintained resource will serve readers for years. We build to last.",
                },
                {
                  title: "Honest about what we are",
                  body: "We are a publishing and affiliate business. We make money when readers take action on our recommendations. We think that is a reasonable model, and we are open about it.",
                },
              ].map((principle) => (
                <div key={principle.title} className="flex gap-4">
                  <div className="w-1.5 rounded-full bg-[#d97706] flex-shrink-0 self-stretch" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{principle.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{principle.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-16 bg-white">
        <div className="page-container">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Where we focus</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We build in markets where regulatory change, mandatory compliance, or complex product
              decisions create significant information needs that existing resources do not serve well.
              Currently that means UK small business compliance, self-employment finance, and trades.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Each site is independently operated with its own brand identity, editorial team, and
              audience focus — but all share the same principles and the same commitment to quality.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold hover:text-[#0f2340] transition-colors text-sm"
            >
              See our portfolio <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
