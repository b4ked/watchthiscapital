import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Watch This Capital identifies regulated markets where trust is structurally absent and builds the authoritative independent resource that fills the gap.",
};

const principles = [
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
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="relative px-6 md:px-10 py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 mb-6 border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase rounded-sm">
              About
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[0.9] tracking-tighter text-white mb-8">
              Why we build what we build.
            </h1>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl">
              Watch This Capital is a regulated information company. We exist to
              fill a specific gap: the space between government guidance that is
              difficult to read and vendor marketing that cannot be trusted.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 px-6 md:px-10 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-6">
              Our mission
            </span>
            <p className="text-on-surface-variant leading-relaxed mb-6 text-lg">
              Millions of UK consumers, sole traders, freelancers, and small
              business owners navigate complicated, often mandatory requirements
              every year. They face tax changes they do not understand,
              compliance deadlines that carry penalties, and a software market
              full of competing products with no independent guide to compare
              them.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Watch This Capital builds the independent resources these audiences
              deserve. Sites that explain what is actually required, why it
              matters, and which tools are genuinely the best fit — without a
              hidden agenda, without filler, and without unnecessary complexity.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              We are commercial, and we are transparent about it. Some of our
              content earns affiliate commission when readers purchase or sign up
              to products we recommend. We disclose this clearly and it does not
              influence our editorial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-6">
              Our principles
            </span>
            <h2 className="text-3xl font-headline font-bold text-white mb-12">
              The standards every position is held to.
            </h2>
            <div className="flex flex-col gap-8">
              {principles.map((principle) => (
                <div key={principle.title} className="flex gap-6">
                  <div className="w-1 rounded-full bg-primary/40 flex-shrink-0 self-stretch" />
                  <div>
                    <h3 className="font-headline font-bold text-white mb-2 text-lg">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {principle.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Where we focus ── */}
      <section className="py-20 px-6 md:px-10 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-primary font-headline uppercase tracking-[0.2em] font-bold text-xs block mb-6">
              Where we focus
            </span>
            <h2 className="text-3xl font-headline font-bold text-white mb-8">
              Deliberate bets. Not subject matter coverage.
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              We look for the same pattern every time: a market under regulatory
              pressure, an audience making high-stakes decisions, and no
              independent resource they can actually trust. When we find that
              pattern, we build.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Currently that is UK small business compliance, self-employment
              finance, and the trades sector — all converging under MTD, IR35,
              and digital-first mandates from HMRC. Each site we build is a
              deliberate bet on a specific version of that pattern, not coverage
              of a topic.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-10">
              Each site is independently operated with its own brand identity
              and audience focus — but all share the same principles and the
              same commitment to accuracy.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-headline font-bold text-sm uppercase tracking-widest"
            >
              See our positions <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
