import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import ControlLoop from "@/components/ControlLoop";
import CtaBand from "@/components/CtaBand";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { STATUS_NOTE, controls, steps, workflows } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service",
  description:
    "How the Watch This Capital agent service is planned to work: what a workflow agent is, which processes suit one, what you provide, what we run and how accuracy is measured.",
};

const suits = [
  "It happens often, and mostly the same way each time.",
  "The inputs are documents, messages or records the business already holds.",
  "You can say what a correct result looks like.",
  "A person can check the result faster than they could produce it.",
  "Past examples exist to test against.",
];

const doesNotSuit = [
  "It happens rarely, or differently every time.",
  "The right answer depends on judgement nobody has written down.",
  "The decision belongs to a qualified professional. An agent can prepare the material, and the decision stays with them.",
  "A mistake could not be caught before it took effect.",
  "There is nothing to measure the agent against.",
];

const youProvide = [
  "One workflow, and someone who knows it well",
  "Past examples with the outcome you consider correct",
  "Access to the systems and documents the workflow touches",
  "A person to approve what the agent prepares",
];

const weRun = [
  "The agent itself, built around your process",
  "The test set, and the scoring against it",
  "Hosting, monitoring and maintenance",
  "Regular reviews of results, and the changes that follow",
];

export default function ServicePage() {
  return (
    <main id="main">
      <PageHero
        label="Service"
        title="A workflow agent, run for you as a managed service."
        intro="We take one routine process, build an AI agent that carries it out, and operate that agent for a recurring fee. Your team checks and approves the work instead of doing it."
      >
        <p className="label mt-8 flex items-center gap-2.5">
          <span className="inline-block w-1.5 h-1.5 bg-primary" />
          {STATUS_NOTE}
        </p>
      </PageHero>

      {/* ── 01 Definition ── */}
      <section className="section">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="01"
            label="Definition"
            title="What a workflow agent is."
          />
          <FadeUp className="md:grid md:grid-cols-12 md:gap-x-8">
            <div className="md:col-start-4 md:col-span-9 max-w-2xl space-y-5 text-lg text-on-surface-variant leading-relaxed">
              <p>
                A workflow agent is software that carries out a defined piece
                of work from start to finish: it reads what arrives, finds the
                information it needs, prepares the result and hands it to a
                person.
              </p>
              <p>
                It is different from a chatbot, which waits to be asked, and
                from a script, which breaks when the input changes shape. An
                agent can read an email written a hundred different ways and
                still work out what it is and where it belongs.
              </p>
              <p>
                It is also different from a member of staff. It does one job,
                within limits we set with you, and it does not act on its own
                authority.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 02 Workflows ── */}
      <section id="workflows" className="section scroll-mt-16">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="02"
            label="Workflows"
            title="The four we are starting with."
            intro="Each one is common across sectors, which means an agent designed for one business carries over to the next with far less work."
          />
          <div className="border-t border-line">
            {workflows.map((w, i) => (
              <FadeUp
                key={w.id}
                className="border-b border-line py-9 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6"
              >
                <div className="md:col-span-3">
                  <p className="label label-accent mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="heading text-2xl">{w.name}</h3>
                </div>
                <div className="md:col-span-9">
                  <p className="text-lg text-white leading-snug max-w-2xl mb-8">
                    {w.summary}
                  </p>
                  <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6">
                    {[
                      { k: "Starts with", v: w.input },
                      { k: "The agent", v: w.agent },
                      { k: "Your team", v: w.person },
                    ].map((row) => (
                      <div key={row.k} className="border-t border-line-strong pt-4">
                        <dt className="label mb-2">{row.k}</dt>
                        <dd className="text-sm text-on-surface-variant leading-relaxed">
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Fit ── */}
      <section className="section bg-surface-container-lowest">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="03"
            label="Fit"
            title="Which processes suit an agent, and which do not."
            intro="Most of the value of the scoping step is in saying no to the wrong workflow."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-line">
            <FadeUp className="border-r border-b border-line p-7 md:p-10">
              <h3 className="label label-accent mb-7">A good fit</h3>
              <ul className="space-y-4">
                {suits.map((s) => (
                  <li key={s} className="flex gap-3.5 text-on-surface leading-relaxed">
                    <Check size={16} className="text-primary shrink-0 mt-1" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.08} className="border-r border-b border-line p-7 md:p-10">
              <h3 className="label mb-7">Not a fit</h3>
              <ul className="space-y-4">
                {doesNotSuit.map((s) => (
                  <li key={s} className="flex gap-3.5 text-on-surface-variant leading-relaxed">
                    <Minus size={16} className="text-outline shrink-0 mt-1" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 04 Responsibilities ── */}
      <section className="section">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="04"
            label="Responsibilities"
            title="What you provide, and what we run."
            intro="The service is managed: you do not install, host or tune anything."
          />
          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <div className="md:col-start-4 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {[
                { title: "You provide", items: youProvide },
                { title: "We run", items: weRun },
              ].map((col, c) => (
                <FadeUp key={col.title} delay={c * 0.08}>
                  <h3 className="heading text-xl mb-5">{col.title}</h3>
                  <ul className="border-t border-line-strong">
                    {col.items.map((item, i) => (
                      <li
                        key={item}
                        className="flex gap-4 py-3.5 border-b border-line text-on-surface-variant leading-relaxed"
                      >
                        <span className="label pt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 Accuracy ── */}
      <section className="section bg-surface-container-lowest">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="05"
            label="Accuracy"
            title="How accuracy is measured."
            intro="We would rather show a number from your own work than ask you to take our word for it."
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 items-start">
            <FadeUp className="lg:col-span-5 lg:col-start-8 lg:order-2">
              <ControlLoop />
            </FadeUp>
            <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
              <ol className="border-t border-line">
                {[
                  {
                    t: "A test set from your own work",
                    d: "During scoping we collect past cases of the workflow along with the result your team considers correct. That collection is the test set, and it belongs to you.",
                  },
                  {
                    t: "A score before anything goes live",
                    d: "The agent is run against the test set and marked case by case. You see where it was right, where it was wrong and why, before it handles real work.",
                  },
                  {
                    t: "Corrections feed back in",
                    d: "When a person edits or rejects what the agent prepared, that case is a candidate for the test set, so the measure keeps pace with the work.",
                  },
                  {
                    t: "Re-scored when anything changes",
                    d: "A change to the agent, its instructions or the model behind it means running the test set again, so a change cannot quietly make things worse.",
                  },
                ].map((row, i) => (
                  <li key={row.t} className="border-b border-line">
                    <FadeUp delay={i * 0.05} className="flex gap-5 py-6">
                      <span className="label label-accent pt-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="heading text-lg mb-2">{row.t}</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed max-w-xl">
                          {row.d}
                        </p>
                      </div>
                    </FadeUp>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* The three controls, restated */}
          <dl className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
            {controls.map((c) => (
              <FadeUp key={c.id} className="border-t border-line-strong pt-4">
                <dt className="label label-accent mb-2">{c.name}</dt>
                <dd className="text-sm text-on-surface-variant leading-relaxed">
                  {c.summary}
                </dd>
              </FadeUp>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 06 Engagement ── */}
      <section className="section">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="06"
            label="Engagement"
            title="How an engagement runs."
          />
          <ol className="border-t border-line">
            {steps.map((s, i) => (
              <li key={s.name} className="border-b border-line">
                <FadeUp
                  delay={i * 0.05}
                  className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-7 md:py-9"
                >
                  <span className="label label-accent md:col-span-3 md:pt-1.5">
                    Step {i + 1}
                  </span>
                  <h3 className="heading text-xl md:text-2xl md:col-span-3">
                    {s.name}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed md:col-span-6 max-w-xl">
                    {s.detail}
                  </p>
                </FadeUp>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 07 Technology ── */}
      <section className="section">
        <div className="shell py-20 md:py-28">
          <SectionHead
            index="07"
            label="Technology"
            title="What the agents are built on."
          />
          <FadeUp className="md:grid md:grid-cols-12 md:gap-x-8">
            <div className="md:col-start-4 md:col-span-9 max-w-2xl space-y-5 text-on-surface-variant leading-relaxed">
              <p className="text-lg">
                The agents will be built on Claude, using the Claude Agent SDK
                and MCP servers.
              </p>
              <p>
                The Agent SDK provides the loop that lets a model plan, use
                tools and check its own work. MCP servers are the connectors
                between an agent and the systems it needs to read from or
                prepare changes for. Building on both means an agent designed
                for one business can be adapted for the next instead of being
                rebuilt.
              </p>
              <p>
                <Link href="/contact" className="link inline-flex items-center gap-2">
                  Ask us about a workflow <ArrowRight size={14} />
                </Link>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
