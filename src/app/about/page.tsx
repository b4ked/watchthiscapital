import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Watch This Capital is a diversified portfolio holdings company architecting high-impact ventures at the intersection of Deep Tech, AI, SaaS, and strategic media.",
};

const principles = [
  {
    title: "Trust first, returns second",
    body: "We would rather lose a commercial arrangement than back something we cannot stand behind. Every relationship is disclosed. Our judgement is not for sale — in any of our portfolio companies.",
  },
  {
    title: "Clarity over cleverness",
    body: "The markets we operate in are complex by nature. Our job is to make them navigable. Every resource we build, every venture we back, must reduce complexity for the people it serves — not add to it.",
  },
  {
    title: "Structured and practical",
    body: "Every position we take should be useful to someone trying to make a decision. We do not build to fill gaps or hit targets. We build when there is a genuine, underserved need and a clear path to category leadership.",
  },
  {
    title: "Long-term authority",
    body: "We invest in depth over volume. A single well-researched, accurately maintained position will compound for years. That is what earns category authority — and holds it against well-funded competitors.",
  },
  {
    title: "Honest about what we are",
    body: "We are a holdings company and operator. We build and back ventures across Deep Tech, SaaS, media, and information services. We make money through portfolio returns and commercial partnerships. We are transparent about all of it.",
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
              Watch This Capital is a diversified portfolio holdings company.
              We architect, scale, and sustain high-impact ventures at the
              intersection of intelligence and infrastructure.
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
              We don&apos;t just invest — we architect, scale, and sustain. Our
              approach is rooted in one belief: the next decade of value
              creation belongs to companies that master the synergy between Deep
              Tech and applied intelligence. We provide the strategic capital
              and operational expertise to turn early-stage breakthroughs into
              industry benchmarks.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Our core ecosystem spans Intelligence &amp; Automation, Software
              as a Service, Digital Growth &amp; Visibility, and Strategic
              Media. In each, we look for the same signal: a sector under
              structural pressure, an audience making high-stakes decisions, and
              no category leader yet built. That is where we move.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              We are commercial, and we are transparent about it. Our portfolio
              companies span software, media, and information services. Some
              generate returns through affiliate and commercial arrangements —
              always disclosed, never editorial. We think that is a reasonable
              model, and we are open about it.
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
              We look for the same pattern every time: a market under structural
              pressure, an audience making consequential decisions, and no
              independent category leader. When we find it — across Deep Tech,
              AI, SaaS, or information services — we build.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Our current positions span UK digital compliance and information
              services, with active development across self-employed finance,
              equity release, and the trades sector. Each is a deliberate bet on
              a specific version of the pattern — not coverage of a topic. The
              pipeline extends into AI-native tooling and B2B SaaS verticals
              where the same structural dynamics apply.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-10">
              Each venture is independently operated with its own brand identity
              and market focus — but all share the same principles and the same
              commitment to depth over volume.
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
