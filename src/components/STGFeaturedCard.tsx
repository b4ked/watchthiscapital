"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { PortfolioSite } from "@/types";

/* All colours are hardcoded to STG green hex values.
   No theme/CSS variables are used so the WTC palette cannot override them. */

export default function STGFeaturedCard({ site }: { site: PortfolioSite }) {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#1c1b1b",
        border: "1px solid rgba(13,110,110,0.35)",
      }}
      whileHover={{
        boxShadow:
          "0 0 64px rgba(13,110,110,0.32), 0 0 24px rgba(46,204,113,0.12)",
        borderColor: "rgba(13,110,110,0.85)",
        transition: { duration: 0.25 },
      }}
    >
      <div className="flex flex-col lg:flex-row">

        {/* ── Brand panel ── */}
        <div
          className="p-8 lg:p-10 flex flex-col justify-between gap-8 lg:w-72 shrink-0"
          style={{
            background: "rgba(13,110,110,0.1)",
            borderBottom: "1px solid rgba(13,110,110,0.2)",
          }}
        >
          <div className="flex flex-col gap-4">
            {/* Inline SVG logo — all fill colours hardcoded */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 232 44"
              width="180"
              height="34"
              aria-label="SoleTraderGuide"
            >
              <rect x="0" y="2" width="40" height="40" rx="9" fill="#0d6e6e" />
              <polygon points="20,7 23,18 20,15.5 17,18" fill="white" />
              <polygon
                points="20,35 23,24 20,26.5 17,24"
                fill="white"
                opacity="0.3"
              />
              <circle
                cx="20"
                cy="21"
                r="3"
                fill="#0d6e6e"
                stroke="white"
                strokeWidth="1.5"
              />
              <text
                x="52"
                y="28"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, sans-serif"
                fontSize="22"
                fontWeight="700"
                letterSpacing="-0.6"
              >
                <tspan fill="white">SoleTrader</tspan>
                <tspan fill="#2ecc71">Guide</tspan>
              </text>
            </svg>

            {/* Live badge */}
            <span
              className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest w-fit font-headline"
              style={{
                background: "rgba(13,110,110,0.2)",
                color: "#4ade80",
                border: "1px solid rgba(13,110,110,0.4)",
              }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                <circle cx="4" cy="4" r="4" />
              </svg>
              Live
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span
              className="text-[10px] font-bold uppercase tracking-widest font-headline"
              style={{ color: "#b0bec5" }}
            >
              {site.category}
            </span>
            <span style={{ color: "rgba(176,190,197,0.5)", fontSize: "0.75rem" }}>
              {site.domain}
            </span>
          </div>
        </div>

        {/* ── Content panel ── */}
        <div className="flex-1 p-8 lg:p-10 flex flex-col gap-6">
          <p className="text-sm leading-relaxed" style={{ color: "#b0bec5" }}>
            {site.description}
          </p>

          <div
            className="grid grid-cols-3 gap-4 p-5 rounded-xl"
            style={{ background: "#201f1f" }}
          >
            {[
              { value: "4.2M", label: "UK sole traders" },
              { value: "2026", label: "MTD deadline" },
              { value: "UK", label: "Market" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-xl font-headline font-black mb-0.5"
                  style={{ color: "#ffffff" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[10px] uppercase tracking-widest font-bold font-headline"
                  style={{ color: "#b0bec5" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Visit site CTA */}
          <motion.div className="w-fit">
            <Link
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest font-headline transition-all duration-200 active:scale-95"
              style={{
                border: "1px solid #0d6e6e",
                background: "rgba(13,110,110,0.2)",
                color: "#4ade80",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(13,110,110,0.4)";
                e.currentTarget.style.borderColor = "#4ade80";
                e.currentTarget.style.boxShadow = "0 0 22px rgba(13,110,110,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(13,110,110,0.2)";
                e.currentTarget.style.borderColor = "#0d6e6e";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Visit site <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
