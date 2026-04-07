"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md font-headline transition-all duration-200"
      style={{
        border: copied ? "1px solid rgba(38,198,218,0.5)" : "1px solid rgba(66,70,86,0.6)",
        background: copied ? "rgba(38,198,218,0.08)" : "rgba(255,255,255,0.03)",
        color: copied ? "#26c6da" : "#b0bec5",
      }}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "Copied" : "Copy text"}
    </button>
  );
}
