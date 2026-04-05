import Link from "next/link";
import { ExternalLink, Clock, Zap } from "lucide-react";
import type { PortfolioSite } from "@/types";

interface PortfolioCardProps {
  site: PortfolioSite;
}

const statusConfig = {
  live: {
    label: "Live",
    className: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    icon: <Zap size={11} className="inline mr-1" />,
  },
  development: {
    label: "In Development",
    className: "bg-amber-50 text-amber-700 border border-amber-200",
    icon: <Clock size={11} className="inline mr-1" />,
  },
  planned: {
    label: "Planned",
    className: "bg-slate-100 text-slate-600 border border-slate-200",
    icon: <Clock size={11} className="inline mr-1" />,
  },
};

export default function PortfolioCard({ site }: PortfolioCardProps) {
  const status = statusConfig[site.status];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 card-lift flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-900 text-base">{site.name}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{site.domain}</p>
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${status.className}`}>
          {status.icon}{status.label}
        </span>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed flex-1">{site.description}</p>

      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <span className="text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full font-medium">
          {site.category}
        </span>
        {site.status === "live" && (
          <Link
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#1e3a5f] hover:text-[#0f2340] font-medium flex items-center gap-1 transition-colors"
          >
            Visit site <ExternalLink size={11} />
          </Link>
        )}
      </div>
    </div>
  );
}
