import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AgentRun from "@/components/AgentRun";
import CtaBand from "@/components/CtaBand";
import FadeUp from "@/components/FadeUp";
import SectionHead from "@/components/SectionHead";
import { STATUS, STATUS_NOTE, controls, steps, workflows } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Watch This Capital — Managed AI agents for business workflows" },
  description:
    "AI agents that run your routine workflows, built and operated for you. For businesses with repetitive, information-heavy processes. Every output is sourced, approved by a person and scored.",
};

const readout = [
  { label: "What", value: "Managed AI agents" },
  { label: "For", value: "Routine business workflows" },
  { label: "Based", value: "United Kingdom" },
  { label: "Status", value: STATUS },
];

export default function HomePage() {
  return (
    <main id="main">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="grid-field absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="shell relative pt-28 pb-14 md:pt-40 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-14 items-center">
            <div className="lg:col-span-7">
              <p className="label label-accent mb-6">
                Managed AI agents for business workflows
              </p>
              <h1 className="display text-[2.6rem] sm:text-6xl lg:text-[4.5rem] mb-7">
                AI agents that run your routine workflows, built and operated
                for you.
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl mb-9">
                For businesses with repetitive, information-heavy processes. We
                build the agent, run it and answer for its accuracy. Your team
                approves the work.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Discuss a workflow <ArrowRight size={14} />
                </Link>
                <Link href="/service" className="btn-secondary">
                  How the service works
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <AgentRun />
            </div>
          </div>
        </div>

        {/* Readout strip */}
        <div className="section relative">
          <dl className="shell grid grid-cols-2 md:grid-cols-4">
            {readout.map((r, i) => (
              <div
                key={r.label}
                className={`py-5 md:py-6 ${
                  i % 2 === 1 ? "pl-5 border-l border-line" : ""
                } ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${
                  i === 2 ? "md:pl-5 md:border-l" : ""
                }`}
              >
                <dt className="label mb-1.5">{r.label}</dt>
                <dd
                  className={`font-headline text-[15px] md:text-base ${
                    r.label === "Status" ? "text-primary" : "text-white"
                  }`}
                >
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 01 Workflows ── */}
      <section className="section">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="01"
            label="Workflows"
            title="Four kinds of work, found in almost every business."
            intro="We are starting with processes that are frequent, rule-bound and built on information the business already holds."
          />
          <ol className="border-t border-line">
            {workflows.map((w, i) => (
              <li key={w.id} className="border-b border-line">
                <FadeUp
                  delay={i * 0.05}
                  className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-7 md:py-9"
                >
                  <span className="label label-accent md:col-span-3 md:pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="heading text-xl md:text-2xl md:col-span-3">
                    {w.name}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed md:col-span-6 max-w-xl">
                    {w.summary}
                  </p>
                </FadeUp>
              </li>
            ))}
          </ol>
          <FadeUp className="mt-8 md:grid md:grid-cols-12 md:gap-x-8">
            <Link
              href="/service#workflows"
              className="link text-sm md:col-start-4 md:col-span-9"
            >
              What each agent does, and what stays with your team
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── 02 Controls ── */}
      <section className="section bg-surface-container-lowest">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="02"
            label="Controls"
            title="Agents do the work. People keep watch."
            intro="An agent is only useful if you can check it quickly and stop it easily. Three controls are designed into every agent."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-line">
            {controls.map((c, i) => (
              <FadeUp
                key={c.id}
                delay={i * 0.08}
                className="border-r border-b border-line p-7 md:p-9 flex flex-col"
              >
                <p className="label mb-10">
                  <span className="label-accent">
                    {String.fromCharCode(65 + i)}
                  </span>
                </p>
                <h3 className="heading text-2xl mb-3">{c.name}</h3>
                <p className="text-white leading-snug mb-4">{c.summary}</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {c.detail}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Engagement ── */}
      <section className="section">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="03"
            label="Engagement"
            title="One workflow at a time."
            intro="An engagement starts small and stays measurable. Each step has a clear output before the next begins."
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {steps.map((s, i) => (
              <li key={s.name}>
                <FadeUp delay={i * 0.08}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="label label-accent">
                      Step {i + 1}
                    </span>
                    <span className="h-px flex-1 bg-line-strong" />
                  </div>
                  <h3 className="heading text-xl mb-3">{s.name}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {s.detail}
                  </p>
                </FadeUp>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 04 Status ── */}
      <section className="section">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="04"
            label="Status"
            title="Where we are."
            intro={STATUS_NOTE}
          />
          <FadeUp className="md:grid md:grid-cols-12 md:gap-x-8">
            <div className="md:col-start-4 md:col-span-9 max-w-2xl space-y-5 text-on-surface-variant leading-relaxed">
              <p>
                What this site describes is what we are building and how we
                intend to run it. We will not publish results, customer names
                or accuracy figures until there are real ones to publish.
              </p>
              <p>
                The agents will be built on Claude, using the Claude Agent SDK
                and MCP servers.{" "}
                <Link href="/service" className="link">
                  Read the full description of the service
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
