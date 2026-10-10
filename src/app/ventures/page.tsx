import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { ventures } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "The independent information sites operated by Watch This Capital Ltd, separate from its AI agent service.",
};

export default function VenturesPage() {
  return (
    <main id="main">
      <PageHero
        label="Ventures"
        title="The information sites we operate."
        intro="Alongside the agent service, Watch This Capital Ltd runs a small group of independent information sites. They are separate from the service and are listed here for transparency."
      />

      <section className="section">
        <div className="shell py-16 md:py-24">
          <ul className="border-t border-line">
            {ventures.map((v, i) => (
              <li key={v.domain} className="border-b border-line">
                <FadeUp delay={i * 0.05}>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-7 md:py-9"
                  >
                    <span className="label label-accent md:col-span-3 md:pt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="md:col-span-4">
                      <span className="heading block text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {v.name}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[13px] text-on-surface-variant group-hover:text-primary transition-colors">
                        {v.domain} <ArrowUpRight size={13} />
                      </span>
                    </span>
                    <span className="text-on-surface-variant leading-relaxed md:col-span-5">
                      {v.description}
                    </span>
                  </a>
                </FadeUp>
              </li>
            ))}
          </ul>

          <FadeUp className="mt-12 md:grid md:grid-cols-12 md:gap-x-8">
            <p className="md:col-start-4 md:col-span-9 max-w-2xl text-sm text-on-surface-variant leading-relaxed">
              These sites are funded by affiliate commission: if a reader
              follows a link and buys a product, we may be paid by the
              provider. How that works, and how we keep it away from editorial
              decisions, is set out in our{" "}
              <Link href="/affiliate-disclosure" className="link">
                affiliate disclosure
              </Link>
              . The sites publish general information only and are not part of
              the agent service.
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
