/* The node graph from the logo, redrawn as the checks around an agent. */

const nodes = [
  { label: "Scope", x: 200, y: 44, anchor: "middle" as const, dy: -16 },
  { label: "Sources", x: 348, y: 152, anchor: "start" as const, dy: 4 },
  { label: "Approval", x: 292, y: 326, anchor: "start" as const, dy: 26 },
  { label: "Score", x: 108, y: 326, anchor: "end" as const, dy: 26 },
  { label: "Review", x: 52, y: 152, anchor: "end" as const, dy: 4 },
];

export default function ControlLoop() {
  const ring = nodes.map((n) => `${n.x},${n.y}`).join(" ");

  return (
    <figure>
      <div className="panel p-6 sm:p-10">
        <svg
          viewBox="-70 0 540 380"
          role="img"
          aria-label="Diagram: an agent in the centre, surrounded by five checks: scope, sources, approval, score and review."
          className="w-full h-auto"
        >
          <polygon points={ring} fill="none" stroke="#0097a7" strokeWidth="1" />
          {nodes.map((n) => (
            <line
              key={`spoke-${n.label}`}
              x1="200"
              y1="200"
              x2={n.x}
              y2={n.y}
              stroke="rgba(229,226,225,0.2)"
              strokeWidth="1"
              strokeDasharray="3 5"
            />
          ))}
          {nodes.map((n) => (
            <g key={n.label}>
              <rect
                x={n.x - 5}
                y={n.y - 5}
                width="10"
                height="10"
                fill="#0e0e0e"
                stroke="#26c6da"
                strokeWidth="1.5"
              />
              <text
                x={n.anchor === "middle" ? n.x : n.anchor === "start" ? n.x + 16 : n.x - 16}
                y={n.y + n.dy}
                textAnchor={n.anchor}
                fill="#b0bec5"
                fontSize="12"
                letterSpacing="1.6"
                style={{ fontFamily: "var(--font-mono), monospace", textTransform: "uppercase" }}
              >
                {n.label}
              </text>
            </g>
          ))}
          <rect x="158" y="180" width="84" height="40" fill="#26c6da" />
          <text
            x="200"
            y="205"
            textAnchor="middle"
            fill="#003f47"
            fontSize="13"
            fontWeight="600"
            letterSpacing="1.6"
            style={{ fontFamily: "var(--font-mono), monospace", textTransform: "uppercase" }}
          >
            Agent
          </text>
        </svg>
      </div>
      <figcaption className="label mt-3 !normal-case !tracking-normal">
        Fig. 02 — The checks that surround every agent.
      </figcaption>
    </figure>
  );
}
