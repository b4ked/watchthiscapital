"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { PortfolioSite } from "@/types";

/* All colours are hardcoded to AI Voice Review blue hex values.
   No theme/CSS variables are used so the WTC palette cannot override them. */

export default function AIVRFeaturedCard({ site }: { site: PortfolioSite }) {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#1c1b1b",
        border: "1px solid rgba(59,130,246,0.3)",
      }}
      whileHover={{
        boxShadow:
          "0 0 64px rgba(59,130,246,0.25), 0 0 24px rgba(96,165,250,0.1)",
        borderColor: "rgba(59,130,246,0.75)",
        transition: { duration: 0.25 },
      }}
    >
      <div className="flex flex-col lg:flex-row">

        {/* ── Brand panel ── */}
        <div
          className="p-8 lg:p-10 flex flex-col justify-between gap-8 lg:w-72 shrink-0"
          style={{
            background: "rgba(59,130,246,0.08)",
            borderBottom: "1px solid rgba(59,130,246,0.15)",
          }}
        >
          <div className="flex flex-col gap-4">
            {/* Logo — microphone icon + wordmark */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "9px",
                  background: "rgba(59,130,246,0.2)",
                  border: "1px solid rgba(59,130,246,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, sans-serif",
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                AI Voice{" "}
                <span style={{ color: "#3b82f6" }}>Review</span>
              </span>
            </div>

            {/* Live badge */}
            <span
              className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest w-fit font-headline"
              style={{
                background: "rgba(59,130,246,0.15)",
                color: "#60a5fa",
                border: "1px solid rgba(59,130,246,0.35)",
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
              { value: "$5B+", label: "Market size" },
              { value: "6", label: "Tools reviewed" },
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
                border: "1px solid rgba(59,130,246,0.5)",
                background: "rgba(59,130,246,0.12)",
                color: "#60a5fa",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(59,130,246,0.25)";
                e.currentTarget.style.borderColor = "#60a5fa";
                e.currentTarget.style.boxShadow = "0 0 22px rgba(59,130,246,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(59,130,246,0.12)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
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
