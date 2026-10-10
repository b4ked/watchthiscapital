import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { STATUS_NOTE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Watch This Capital is a UK company building managed AI agents for business workflows. Who we are, how we work and the principles every agent is held to.",
};

const principles = [
  {
    title: "Trust first",
    body: "An agent that cannot be checked is not worth running. We would rather build something narrow that you can rely on than something broad that you have to hope is right.",
  },
  {
    title: "Show the source",
    body: "Anything an agent produces points back to where it came from. If we cannot show the source, we do not present the output as fact.",
  },
  {
    title: "Keep a person in the loop",
    body: "Agents prepare. People decide. No message goes out and no record changes without someone approving it.",
  },
  {
    title: "Measure before trusting",
    body: "Confidence should come from a score on your own work, taken before the agent goes near anything real, and taken again whenever it changes.",
  },
  {
    title: "Clarity over cleverness",
    body: "We describe what an agent does in plain language, including what it cannot do. If an explanation needs jargon to sound convincing, the explanation is the problem.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        label="About"
        title="A UK company building managed AI agents for business workflows."
        intro="We take the routine, information-heavy work that fills a team's week and build agents to carry it out, under the supervision of the people who used to do it by hand."
      />

      {/* ── 01 Company ── */}
      <section className="section">
        <div className="shell py-20 md:py-28">
          <SectionHead index="01" label="Company" title="What we do, and how." />
          <FadeUp className="md:grid md:grid-cols-12 md:gap-x-8">
            <div className="md:col-start-4 md:col-span-9 max-w-2xl space-y-5 text-lg text-on-surface-variant leading-relaxed">
              <p>
                Most businesses run on a handful of processes nobody would
                choose to do: sorting what comes in, keeping systems in step
                with each other, answering the same questions, building the
                same reports. The work matters, and it is rarely anyone&apos;s
                best use of time.
              </p>
              <p>
                Watch This Capital builds AI agents for that work and runs
                them as a managed service. We scope one workflow with the
                business, build and test an agent against real examples,
                operate it for a recurring fee and review the results together.
              </p>
              <p>
                The first word of our name is the one we take most seriously.
                Every agent is designed to be watched: its sources visible, its
                output held for approval, its accuracy measured.
              </p>
              <p className="text-base">
                {STATUS_NOTE}{" "}
                <Link href="/service" className="link">
                  Read how the service is planned to work
                </Link>
                .
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 02 Principles ── */}
      <section className="section bg-surface-container-lowest">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="02"
            label="Principles"
            title="The standards every agent is held to."
          />
          <ol className="border-t border-line">
            {principles.map((p, i) => (
              <li key={p.title} className="border-b border-line">
                <FadeUp
                  delay={i * 0.05}
                  className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-7 md:py-9"
                >
                  <span className="label label-accent md:col-span-3 md:pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="heading text-xl md:text-2xl md:col-span-3">
                    {p.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed md:col-span-6 max-w-xl">
                    {p.body}
                  </p>
                </FadeUp>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 03 Also ── */}
      <section className="section">
        <div className="shell py-20 md:py-28">
          <SectionHead index="03" label="Also" title="Our information sites." />
          <FadeUp className="md:grid md:grid-cols-12 md:gap-x-8">
            <div className="md:col-start-4 md:col-span-9 max-w-2xl space-y-5 text-on-surface-variant leading-relaxed">
              <p>
                The company also operates a small group of independent
                information sites, listed on our{" "}
                <Link href="/ventures" className="link">
                  ventures page
                </Link>
                . They are run separately from the agent service and are
                funded by affiliate commission, which is explained in our{" "}
                <Link href="/affiliate-disclosure" className="link">
                  affiliate disclosure
                </Link>
                .
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
