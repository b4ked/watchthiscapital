import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import CopyButton from "@/components/CopyButton";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { EMAIL_GENERAL, STATUS, SUMMARY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Media Kit",
  description:
    "Press resources for Watch This Capital: approved descriptions of the company and its AI agent service, logo downloads, colours and typefaces.",
};

/* ── Boilerplate copy ── */
const SHORT =
  "Watch This Capital is a UK company building managed AI agents that run routine business workflows.";

const MEDIUM = `${SUMMARY} The service is in development.`;

const FULL = `Watch This Capital is a UK company building managed AI agents for routine business workflows. Its service is aimed at businesses with repetitive, information-heavy processes, and is in development.

The company is starting with four kinds of work: sorting inbound email and documents and routing each item to the right place; keeping records consistent across applications that are not integrated; answering staff questions from the company's own policies and manuals; and assembling regular reports from several tools. An engagement covers one workflow at a time. Watch This Capital scopes it, builds and tests an agent against real examples, runs it for a recurring fee and reviews the results with the customer.

Each agent is designed around three controls. Its output links to the source material. A person approves any outgoing message or record change. And it is scored against a test set built from the customer's own work before it is relied on. The agents will be built on Claude, using the Claude Agent SDK and MCP servers.`;

const boilerplate = [
  { label: "One sentence", text: SHORT },
  { label: "One paragraph", text: MEDIUM },
  { label: "Three paragraphs", text: FULL },
];

const facts = [
  { label: "What we do", value: "Managed AI agents for business workflows" },
  { label: "Jurisdiction", value: "England and Wales" },
  { label: "Primary market", value: "United Kingdom" },
  { label: "Service status", value: STATUS },
];

/* ── Colour palette ── */
const palette = [
  { name: "Deep Black", hex: "#131313", usage: "Background" },
  { name: "Surface", hex: "#1c1b1b", usage: "Raised surfaces" },
  { name: "Teal", hex: "#26c6da", usage: "Accent" },
  { name: "Dark Teal", hex: "#0097a7", usage: "Accent, deep" },
  { name: "Off White", hex: "#e5e2e1", usage: "Text" },
  { name: "Muted", hex: "#b0bec5", usage: "Secondary text" },
];

/* ── Logo assets ── */
const logos = [
  {
    label: "Full logo",
    description: "Transparent background, for dark surfaces",
    src: "/logo-transparent.png",
    file: "wtc-logo-transparent.png",
    bg: "#1c1b1b",
    width: 220,
    height: 110,
  },
  {
    label: "Square icon",
    description: "For avatars and compact placements",
    src: "/logo-square.png",
    file: "wtc-logo-square.png",
    bg: "#1c1b1b",
    width: 80,
    height: 80,
  },
  {
    label: "Full logo, dark background",
    description: "With its own background, for full contrast",
    src: "/logo.png",
    file: "wtc-logo.png",
    bg: "#0e0e0e",
    width: 220,
    height: 110,
  },
];

const usage = [
  "Use the transparent logo on dark backgrounds only.",
  "Do not recolour, rotate, stretch or add effects to any logo.",
  "Keep clear space around the logo equal to the height of the 'W'.",
  "Do not use the logo in a way that implies endorsement without prior agreement.",
];

const typefaces = [
  { role: "Headings", name: "Space Grotesk", className: "font-headline" },
  { role: "Body", name: "Inter", className: "font-sans" },
  { role: "Labels", name: "JetBrains Mono", className: "font-mono" },
];

export default function MediaPage() {
  return (
    <main id="main">
      <PageHero
        label="Media Kit"
        title="Everything you need to write about us."
        intro="Approved descriptions of the company, logo files, colours and typefaces. For anything not covered here, contact us directly."
      />

      {/* ── 01 Facts ── */}
      <section className="section">
        <div className="shell py-20 md:py-24">
          <SectionHead index="01" label="Facts" title="At a glance." />
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
            {facts.map((f, i) => (
              <FadeUp
                key={f.label}
                delay={i * 0.05}
                className="border-r border-b border-line p-6 md:p-7"
              >
                <dt className="label mb-3">{f.label}</dt>
                <dd className="heading text-xl">{f.value}</dd>
              </FadeUp>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 02 Boilerplate ── */}
      <section className="section bg-surface-container-lowest">
        <div className="shell py-20 md:py-24">
          <SectionHead
            index="02"
            label="Boilerplate"
            title="Ready-to-use descriptions."
            intro="Use these as written. They are kept in step with the rest of this site."
          />
          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <div className="md:col-start-4 md:col-span-9 max-w-3xl flex flex-col gap-6">
              {boilerplate.map((b, i) => (
                <FadeUp key={b.label} delay={i * 0.05}>
                  <div className="panel !bg-surface">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-line">
                      <span className="label label-accent">{b.label}</span>
                      <CopyButton text={b.text} />
                    </div>
                    <div className="px-5 py-5 flex flex-col gap-4">
                      {b.text.split("\n\n").map((para) => (
                        <p
                          key={para.slice(0, 24)}
                          className="text-sm text-on-surface-variant leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 Logo ── */}
      <section className="section">
        <div className="shell py-20 md:py-24">
          <SectionHead index="03" label="Logo" title="Logo downloads." />
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-line">
            {logos.map((logo, i) => (
              <FadeUp
                key={logo.label}
                delay={i * 0.05}
                className="border-r border-b border-line flex flex-col"
              >
                <div
                  className="flex items-center justify-center p-10 min-h-[170px] border-b border-line"
                  style={{ background: logo.bg }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.label}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain max-h-24 w-auto"
                  />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="heading text-lg">{logo.label}</h3>
                    <p className="text-sm text-on-surface-variant mt-1">
                      {logo.description}
                    </p>
                  </div>
                  <a
                    href={logo.src}
                    download={logo.file}
                    className="label label-accent inline-flex items-center gap-2 mt-auto hover:text-white transition-colors"
                  >
                    <Download size={12} /> Download PNG
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-10 md:grid md:grid-cols-12 md:gap-x-8">
            <div className="md:col-start-4 md:col-span-9 max-w-2xl">
              <h3 className="label mb-4">Usage</h3>
              <ul className="border-t border-line">
                {usage.map((rule, i) => (
                  <li
                    key={rule}
                    className="flex gap-4 py-3 border-b border-line text-sm text-on-surface-variant leading-relaxed"
                  >
                    <span className="label pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 04 Colour and type ── */}
      <section className="section bg-surface-container-lowest">
        <div className="shell py-20 md:py-24">
          <SectionHead index="04" label="Colour and type" title="The palette and typefaces." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-line">
            {palette.map((colour, i) => (
              <FadeUp
                key={colour.hex}
                delay={i * 0.04}
                className="border-r border-b border-line"
              >
                <div
                  className="h-24 border-b border-line"
                  style={{ background: colour.hex }}
                />
                <div className="p-4">
                  <p className="text-sm text-white font-headline">{colour.name}</p>
                  <p className="font-mono text-xs text-primary mt-1">{colour.hex}</p>
                  <p className="label mt-2 !normal-case !tracking-normal">
                    {colour.usage}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-l border-line">
            {typefaces.map((t, i) => (
              <FadeUp
                key={t.name}
                delay={i * 0.05}
                className="border-r border-b border-line p-6 md:p-7"
              >
                <p className="label mb-6">{t.role}</p>
                <p className={`${t.className} text-5xl text-white mb-4`}>Aa</p>
                <p className={`${t.className} text-white`}>{t.name}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Press ── */}
      <section className="section">
        <div className="shell py-20 md:py-24">
          <SectionHead
            index="05"
            label="Press"
            title="Press enquiries."
            intro="For interview requests, fact-checking or anything not covered in this kit."
          />
          <FadeUp className="md:grid md:grid-cols-12 md:gap-x-8">
            <a
              href={`mailto:${EMAIL_GENERAL}`}
              className="md:col-start-4 md:col-span-9 font-mono text-lg text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary break-all"
            >
              {EMAIL_GENERAL}
            </a>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
