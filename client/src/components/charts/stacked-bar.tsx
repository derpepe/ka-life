import React, { useState } from "react";
import { InfographicSection } from "@/lib/infographic-data";

interface StackedBarProps {
  section: InfographicSection;
}

interface StackDef {
  label: string;
  color: string;
}

export default function StackedBar({ section }: StackedBarProps) {
  const { categories, stacks, values } = section.data as {
    categories: string[];
    stacks: StackDef[];
    values: number[][];
  };

  const [hoveredStack, setHoveredStack] = useState<number | null>(null);

  const maxTotal = Math.max(...values.map((row) => row.reduce((a, b) => a + b, 0)));

  return (
    <div data-testid="stacked-bar-section">
      {/* Legend */}
      <div style={{ display: "flex", gap: 20, marginBottom: 20, flexWrap: "wrap" }}>
        {stacks.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              cursor: "pointer",
              opacity: hoveredStack !== null && hoveredStack !== i ? 0.4 : 1,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={() => setHoveredStack(i)}
            onMouseLeave={() => setHoveredStack(null)}
          >
            <div style={{ width: 14, height: 14, borderRadius: 3, background: s.color, flexShrink: 0 }} />
            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: "#374151", fontWeight: 600 }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {categories.map((cat, rowIdx) => {
          const rowValues = values[rowIdx] || [];
          const total = rowValues.reduce((a, b) => a + b, 0);
          return (
            <div key={rowIdx} data-testid={`stacked-bar-row-${rowIdx}`} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Year label */}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#6b7280",
                  width: 36,
                  flexShrink: 0,
                  textAlign: "right",
                }}
              >
                {cat}
              </div>
              {/* Bar container */}
              <div
                style={{
                  flex: 1,
                  height: 36,
                  display: "flex",
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "#f3f4f6",
                }}
              >
                {rowValues.map((val, stackIdx) => {
                  const widthPct = (val / maxTotal) * 100;
                  const isHovered = hoveredStack === stackIdx;
                  const isDimmed = hoveredStack !== null && !isHovered;
                  return (
                    <div
                      key={stackIdx}
                      data-testid={`stacked-bar-segment-${rowIdx}-${stackIdx}`}
                      style={{
                        width: `${widthPct}%`,
                        background: stacks[stackIdx]?.color || "#ccc",
                        opacity: isDimmed ? 0.35 : 1,
                        transition: "opacity 0.2s, width 0.4s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setHoveredStack(stackIdx)}
                      onMouseLeave={() => setHoveredStack(null)}
                      title={`${stacks[stackIdx]?.label}: ${val.toLocaleString("de-DE")}`}
                    >
                      {widthPct > 8 && (
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 11,
                            color: "white",
                            fontWeight: 500,
                            whiteSpace: "nowrap",
                            padding: "0 4px",
                          }}
                        >
                          {val >= 1000 ? `${(val / 1000).toFixed(1)}T` : val}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              {/* Total */}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: "#9ca3af",
                  width: 50,
                  flexShrink: 0,
                }}
              >
                {(total / 1000).toFixed(1)}T
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
