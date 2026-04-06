"use client";

import Link from "next/link";
import { ExternalLink, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { PortfolioSite } from "@/types";

interface PortfolioCardProps {
  site: PortfolioSite;
}

const statusConfig = {
  live: {
    label: "Live",
    className: "bg-primary/10 text-primary border border-primary/20",
    icon: <Zap size={10} className="inline mr-1" />,
  },
  development: {
    label: "In Development",
    className: "bg-tertiary/10 text-tertiary border border-tertiary/20",
    icon: <Clock size={10} className="inline mr-1" />,
  },
  planned: {
    label: "Market identified",
    className:
      "bg-on-surface-variant/10 text-on-surface-variant border border-outline-variant/30",
    icon: <Clock size={10} className="inline mr-1" />,
  },
};

export default function PortfolioCard({ site }: PortfolioCardProps) {
  const status = statusConfig[site.status];

  return (
    <motion.div
      className="group bg-surface-container-low rounded-xl p-8 flex flex-col gap-5 border border-white/5"
      whileHover={{
        y: -6,
        boxShadow: "0 0 32px rgba(38, 198, 218, 0.08), 0 16px 40px rgba(0,0,0,0.3)",
        borderColor: "rgba(38, 198, 218, 0.15)",
        transition: { duration: 0.28, ease: "easeOut" },
      }}
      initial={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-headline font-bold text-white text-lg">
            {site.name}
          </h3>
          <p className="text-xs text-on-surface-variant mt-1">{site.domain}</p>
        </div>
        <span
          className={`text-[10px] font-bold px-2.5 py-1 rounded-sm whitespace-nowrap uppercase tracking-widest ${status.className}`}
        >
          {status.icon}
          {status.label}
        </span>
      </div>

      <p className="text-sm text-on-surface-variant leading-relaxed flex-1">
        {site.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          {site.category}
        </span>
        {site.status === "live" && (
          <Link
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary-fixed font-bold uppercase tracking-widest transition-colors"
          >
            Visit site <ExternalLink size={11} />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
