"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

interface HeroSectionProps {
  liveSitesCount: number;
}

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: EASE },
  },
};

export default function HeroSection({ liveSitesCount }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"] as const,
  });
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section
      ref={ref}
      className="relative min-h-[860px] flex items-start lg:items-center px-6 md:px-10 overflow-hidden"
    >
      {/* Parallax blobs */}
      <motion.div
        style={{ y: blob1Y }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary-container/5 blur-[80px] rounded-full pointer-events-none"
      />

      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center pt-16 lg:pt-0 pb-16">
        {/* Left — staggered text entrance */}
        <motion.div
          className="lg:col-span-7 z-10"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={item}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 font-headline"
          >
            Watch This Capital
          </motion.span>
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-headline font-bold leading-[0.95] tracking-tighter mb-8 text-white"
          >
            Architecting the future of Deep Tech, AI, and digital{" "}
            <span className="hero-gradient-text">infrastructure.</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-10"
          >
            We don&apos;t just invest — we architect, scale, and sustain
            high-impact ventures at the intersection of intelligence and
            infrastructure. From AI and SaaS to strategic media and information
            services, we turn early-stage breakthroughs into category leaders.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-5">
            <Link
              href="/portfolio"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-headline"
            >
              Our positions <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-headline"
            >
              Our thesis
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — card slides in from right */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: EASE }}
        >
          <motion.div
            className="bg-surface-container-low p-8 rounded-2xl relative z-10 border border-white/5 lg:rotate-1"
            whileHover={{ rotate: 0, transition: { duration: 0.4 } }}
          >
            <div className="space-y-6">
              <div className="flex justify-center pb-2">
                <Image
                  src="/logo-transparent.png"
                  alt="Watch This Capital"
                  width={340}
                  height={200}
                  className="w-full max-w-[280px] h-auto object-contain"
                  priority
                />
              </div>
              <div>
                <div className="h-0.5 w-12 bg-primary-container mb-6" />
                <p className="text-xs font-headline font-bold uppercase tracking-[0.2em] text-primary mb-2">
                  The thesis
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  The next decade of value creation belongs to companies that
                  master intelligence and infrastructure. We identify the
                  intersection, build the position, and own it.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/20">
                {[
                  { value: `${liveSitesCount}`, label: "Live now" },
                  { value: "UK", label: "Market focus" },
                  { value: "2025", label: "Founded" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-headline font-black text-white mb-1">
                      {s.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-surface-container rounded-xl p-5">
                <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-2">
                  Active position
                </p>
                <p className="text-base font-headline font-bold text-white">
                  SoleTraderGuide
                </p>
                <p className="text-xs text-on-surface-variant mt-1">
                  4.2M sole traders. MTD mandatory from 2026. The independent
                  guide — built before the rush.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
