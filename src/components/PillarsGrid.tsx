"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Pillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function PillarsGrid({ pillars }: { pillars: Pillar[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pillars.map((pillar, i) => (
        <motion.div
          key={pillar.title}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{
            duration: 0.65,
            delay: i * 0.12,
            ease: EASE,
          }}
          whileHover={{
            y: -5,
            boxShadow: "0 0 24px rgba(38,198,218,0.07)",
            transition: { duration: 0.25 },
          }}
          className="bg-surface-container p-8 rounded-xl"
        >
          <motion.div
            className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
            whileHover={{ backgroundColor: "rgba(38,198,218,0.18)" }}
            transition={{ duration: 0.2 }}
          >
            {pillar.icon}
          </motion.div>
          <h3 className="font-headline font-bold text-white mb-3 text-lg">
            {pillar.title}
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {pillar.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
