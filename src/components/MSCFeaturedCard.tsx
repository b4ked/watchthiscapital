"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { PortfolioSite } from "@/types";

/* All colours are hardcoded to MySoftwareCompare amber/orange hex values.
   No theme/CSS variables are used so the WTC palette cannot override them. */

export default function MSCFeaturedCard({ site }: { site: PortfolioSite }) {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#1c1b1b",
        border: "1px solid rgba(217,119,6,0.3)",
      }}
      whileHover={{
        boxShadow:
          "0 0 64px rgba(217,119,6,0.25), 0 0 24px rgba(251,191,36,0.1)",
        borderColor: "rgba(217,119,6,0.75)",
        transition: { duration: 0.25 },
      }}
    >
      <div className="flex flex-col lg:flex-row">

        {/* ── Brand panel ── */}
        <div
          className="p-8 lg:p-10 flex flex-col justify-between gap-8 lg:w-72 shrink-0"
          style={{
            background: "rgba(217,119,6,0.08)",
            borderBottom: "1px solid rgba(217,119,6,0.15)",
          }}
        >
          <div className="flex flex-col gap-4">
            {/* Logo — comparison icon + wordmark */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "9px",
                  background: "rgba(217,119,6,0.2)",
                  border: "1px solid rgba(217,119,6,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {/* Bar chart / compare icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M9 8h6" />
                  <path d="M7 12h10" />
                  <path d="M10 16h4" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                my<span style={{ color: "#d97706" }}>software</span>compare
              </span>
            </div>

            {/* Live badge */}
            <span
              className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest w-fit font-headline"
              style={{
                background: "rgba(217,119,6,0.15)",
                color: "#fbbf24",
                border: "1px solid rgba(217,119,6,0.35)",
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
              { value: "$500B+", label: "Market size" },
              { value: "100+", label: "Tools reviewed" },
              { value: "Global", label: "Market" },
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
                border: "1px solid rgba(217,119,6,0.5)",
                background: "rgba(217,119,6,0.12)",
                color: "#fbbf24",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(217,119,6,0.25)";
                e.currentTarget.style.borderColor = "#fbbf24";
                e.currentTarget.style.boxShadow = "0 0 22px rgba(217,119,6,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(217,119,6,0.12)";
                e.currentTarget.style.borderColor = "rgba(217,119,6,0.5)";
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
