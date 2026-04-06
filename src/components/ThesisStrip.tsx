"use client";

import { motion, useInView } from "framer-motion";
import { Globe, Shield, TrendingUp } from "lucide-react";
import { useRef } from "react";

const cards = [
  {
    icon: <Globe size={32} className="text-primary" />,
    heading: "We identify",
    sub: "High-value markets where no leader yet exists",
    variant: "default" as const,
  },
  {
    icon: <Shield size={32} className="text-white" />,
    heading: "We build",
    sub: "The authoritative resource that resolves it",
    variant: "accent" as const,
  },
  {
    icon: <TrendingUp size={32} className="text-primary" />,
    heading: "We own",
    sub: "The position — and compound it from there",
    variant: "default" as const,
  },
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function ThesisStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 px-6 md:px-10 bg-surface-container-low" ref={ref}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.heading}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{
              duration: 0.65,
              delay: i * 0.14,
              ease: EASE,
            }}
            whileHover={{
              y: -8,
              boxShadow: card.variant === "accent"
                ? "0 0 48px rgba(0,151,167,0.45), 0 20px 48px rgba(0,0,0,0.4)"
                : "0 0 40px rgba(38,198,218,0.14), 0 16px 40px rgba(0,0,0,0.35)",
              transition: { duration: 0.25 },
            }}
            className={`p-10 rounded-2xl flex flex-col justify-between cursor-default ${
              card.variant === "accent"
                ? "bg-primary-container text-white"
                : "bg-surface-container"
            }`}
          >
            <div className="mb-10">{card.icon}</div>
            <div>
              <h4 className="text-4xl font-headline font-black mb-2 text-white">
                {card.heading}
              </h4>
              <p
                className={`uppercase tracking-widest text-xs font-bold ${
                  card.variant === "accent" ? "text-teal-100" : "text-on-surface-variant"
                }`}
              >
                {card.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
