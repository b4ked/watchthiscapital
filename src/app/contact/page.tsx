import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { EMAIL_GENERAL, EMAIL_SERVICE, STATUS_NOTE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Watch This Capital about a business workflow you would like an AI agent to run, or with a general enquiry.",
};

const useful = [
  "What the workflow is, and roughly how often it happens",
  "Where the information comes from and where it needs to end up",
  "Who checks the work today",
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        label="Contact"
        title="Tell us about a workflow."
        intro="If your business has a routine, information-heavy process you would like an agent to run, this is the place to start."
      />

      <section className="section">
        <div className="shell py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-line">
            {/* Service */}
            <FadeUp className="lg:col-span-7 border-r border-b border-line p-7 md:p-12">
              <p className="label label-accent mb-8">01 Service enquiries</p>
              <h2 className="heading text-3xl md:text-4xl mb-5">
                For businesses interested in the agent service.
              </h2>
              <p className="text-on-surface-variant leading-relaxed max-w-lg mb-8">
                {STATUS_NOTE} We are glad to hear about the work you have in
                mind, and we will tell you plainly whether it is the kind of
                process an agent would suit.
              </p>
              <a
                href={`mailto:${EMAIL_SERVICE}?subject=Workflow%20enquiry`}
                className="group inline-flex items-center gap-2 font-mono text-base sm:text-lg text-primary break-all"
              >
                <span className="underline underline-offset-4 decoration-primary/40 group-hover:decoration-primary">
                  {EMAIL_SERVICE}
                </span>
                <ArrowUpRight size={18} className="shrink-0" />
              </a>

              <div className="mt-12 border-t border-line-strong pt-6">
                <h3 className="label mb-4">Useful to include</h3>
                <ul className="space-y-2.5">
                  {useful.map((u, i) => (
                    <li
                      key={u}
                      className="flex gap-4 text-sm text-on-surface-variant leading-relaxed"
                    >
                      <span className="label pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* General */}
            <FadeUp
              delay={0.08}
              className="lg:col-span-5 border-r border-b border-line p-7 md:p-12 bg-surface-container-lowest"
            >
              <p className="label mb-8">02 General enquiries</p>
              <h2 className="heading text-2xl mb-5">Everything else.</h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Questions about the company, press requests, or to report an
                inaccuracy on one of our{" "}
                <Link href="/ventures" className="link">
                  information sites
                </Link>
                .
              </p>
              <a
                href={`mailto:${EMAIL_GENERAL}`}
                className="group inline-flex items-center gap-2 font-mono text-base text-primary break-all"
              >
                <span className="underline underline-offset-4 decoration-primary/40 group-hover:decoration-primary">
                  {EMAIL_GENERAL}
                </span>
                <ArrowUpRight size={16} className="shrink-0" />
              </a>

              <p className="mt-12 border-t border-line-strong pt-6 text-sm text-on-surface-variant leading-relaxed">
                Our information sites carry affiliate links. Every commercial
                relationship on them is disclosed, and being featured does not
                buy a favourable assessment. See the{" "}
                <Link href="/affiliate-disclosure" className="link">
                  affiliate disclosure
                </Link>
                .
              </p>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
