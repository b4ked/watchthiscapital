"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Check, Link2 } from "lucide-react";

/* An illustration of one planned agent run. Not a live product. */

const stages = [
  {
    name: "Received",
    line: "Email with one attachment arrives in the shared inbox",
  },
  {
    name: "Read",
    line: "Identified as a delivery query",
  },
  {
    name: "Extracted",
    line: "Three details found, each linked to where it was read",
  },
  {
    name: "Prepared",
    line: "Route to Operations and draft an acknowledgement",
  },
  {
    name: "Waiting",
    line: "Nothing is sent until a person approves",
  },
];

const fields = [
  { key: "Type", value: "Delivery query", source: "email, line 1" },
  { key: "Reference", value: "PO-4417", source: "attachment, p. 1" },
  { key: "Owner", value: "Operations", source: "routing rules" },
];

const LAST = stages.length - 1;

export default function AgentRun() {
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setTick((t) => t + 1), 1500);
    return () => clearInterval(id);
  }, [reduce]);

  /* Step through the stages, hold on the last one, then start again. */
  const current = reduce ? LAST : Math.min(tick % (stages.length + 3), LAST);

  return (
    <figure>
      <div className="panel">
        {/* Title bar */}
        <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-line">
          <span className="label">Run / inbound triage</span>
          <span className="label border border-line-strong px-2 py-0.5 rounded-[2px]">
            Illustration
          </span>
        </div>

        {/* Stages */}
        <ol className="px-4 py-2">
          {stages.map((stage, i) => {
            const done = i < current;
            const active = i === current;
            return (
              <li
                key={stage.name}
                className={`flex gap-3.5 py-3 border-b border-line last:border-b-0 transition-opacity duration-500 ${
                  i > current ? "opacity-30" : "opacity-100"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border rounded-[2px] transition-colors duration-500 ${
                    done
                      ? "border-primary-container bg-primary-container text-surface-container-lowest"
                      : active
                        ? "border-primary"
                        : "border-line-strong"
                  }`}
                >
                  {done && <Check size={11} strokeWidth={3} />}
                  {active && <span className="h-1.5 w-1.5 bg-primary" />}
                </span>
                <div className="min-w-0">
                  <p className={`label ${active ? "label-accent" : ""}`}>
                    {String(i + 1).padStart(2, "0")} {stage.name}
                  </p>
                  <p className="mt-1 text-sm text-on-surface leading-snug">
                    {stage.line}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Extracted details, each with its source */}
        <dl
          className={`border-t border-line transition-opacity duration-500 ${
            current >= 2 ? "opacity-100" : "opacity-30"
          }`}
        >
          {fields.map((f) => (
            <div
              key={f.key}
              className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[5.5rem_1fr_auto] items-baseline gap-x-3 px-4 py-2.5 border-b border-line last:border-b-0"
            >
              <dt className="label">{f.key}</dt>
              <dd className="font-mono text-[13px] text-white">{f.value}</dd>
              <dd className="col-start-2 sm:col-start-3 label !normal-case !tracking-normal flex items-center gap-1.5 text-primary">
                <Link2 size={11} /> {f.source}
              </dd>
            </div>
          ))}
        </dl>

        {/* Approval */}
        <div className="flex items-center justify-between gap-4 px-4 py-3.5 border-t border-line">
          <span className="label">
            {current === LAST ? "Awaiting your approval" : "Working"}
          </span>
          <div className="flex gap-2" aria-hidden="true">
            <span className="label border border-line-strong px-3 py-1.5 rounded-[2px]">
              Edit
            </span>
            <span
              className={`label px-3 py-1.5 rounded-[2px] border transition-colors duration-500 ${
                current === LAST
                  ? "border-primary bg-primary !text-on-primary font-semibold"
                  : "border-line-strong"
              }`}
            >
              Approve
            </span>
          </div>
        </div>
      </div>
      <figcaption className="label mt-3 !normal-case !tracking-normal">
        Fig. 01 — How a run is planned to look. The service is in development.
      </figcaption>
    </figure>
  );
}
