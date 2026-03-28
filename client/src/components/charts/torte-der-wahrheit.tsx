import React, { useState } from "react";
import { InfographicSection, PieSlice } from "@/lib/infographic-data";

interface TorteDerWahrheitProps {
  section: InfographicSection;
}

interface PieData {
  title: string;
  slices: PieSlice[];
}

function PieChart({ pie }: { pie: PieData }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const size = 220;
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.42;

  const total = pie.slices.reduce((s, sl) => s + sl.value, 0);

  let currentAngle = -90; // start from top

  const sectors = pie.slices.map((slice, i) => {
    const pct = slice.value / total;
    const angle = pct * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const start = polarToXY(cx, cy, r, startAngle);
    const end = polarToXY(cx, cy, r, endAngle);
    const largeArc = angle > 180 ? 1 : 0;

    // Label position (middle of arc)
    const midAngle = startAngle + angle / 2;
    const labelR = r * 0.65;
    const labelPos = polarToXY(cx, cy, labelR, midAngle);

    const isHovered = hoveredIndex === i;
    const isDimmed = hoveredIndex !== null && !isHovered;

    return (
      <g key={i} data-testid={`pie-sector-${i}`}>
        <path
          d={`M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y} Z`}
          fill={slice.color}
          opacity={isDimmed ? 0.35 : isHovered ? 1 : 0.88}
          stroke="white"
          strokeWidth={1.5}
          style={{ cursor: "pointer", transition: "opacity 0.2s" }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
        {pct >= 0.15 && (
          <text
            x={labelPos.x}
            y={labelPos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={size * 0.07}
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="600"
            fill="white"
            opacity={isDimmed ? 0.35 : 1}
            style={{ pointerEvents: "none" }}
          >
            {slice.value}%
          </text>
        )}
      </g>
    );
  });

  return (
    <div data-testid="pie-chart" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: 13,
          textAlign: "center",
          color: "#111827",
          maxWidth: size,
          margin: 0,
          lineHeight: 1.35,
        }}
      >
        {pie.title}
      </p>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label={pie.title}>
        {sectors}
      </svg>
      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 12px", maxWidth: size, justifyContent: "center" }}>
        {pie.slices.map((slice, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              cursor: "pointer",
              opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.4 : 1,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: slice.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                color: "#6b7280",
                lineHeight: 1.2,
              }}
            >
              {slice.label} ({slice.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function polarToXY(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function TorteDerWahrheit({ section }: TorteDerWahrheitProps) {
  const pies: PieData[] = section.data.pies || [];

  return (
    <div data-testid="torte-der-wahrheit-section">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 40,
          justifyItems: "center",
          paddingTop: 8,
        }}
      >
        {pies.map((pie, i) => (
          <PieChart key={i} pie={pie} />
        ))}
      </div>
    </div>
  );
}
