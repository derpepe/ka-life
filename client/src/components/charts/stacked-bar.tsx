import React, { useState } from "react";
import { InfographicSection } from "@/lib/infographic-data";

interface StackedBarProps {
  section: InfographicSection;
}

interface StackDef {
  label: string;
  color: string;
}

function formatValue(val: number, unit?: string): string {
  // If a unit is provided, use locale formatting + unit
  if (unit) {
    return `${val.toLocaleString("de-DE")} ${unit}`;
  }
  // Default: just locale-formatted number
  return val.toLocaleString("de-DE");
}

function formatCompact(val: number, unit?: string): string {
  // Short format for inside bars
  if (unit) {
    return `${val.toLocaleString("de-DE")}`;
  }
  return val.toLocaleString("de-DE");
}

export default function StackedBar({ section }: StackedBarProps) {
  const { categories, stacks, values, unit } = section.data as {
    categories: string[];
    stacks: StackDef[];
    values: number[][];
    unit?: string;
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
            <div style={{ width: 12, height: 12, borderRadius: 3, background: s.color, flexShrink: 0 }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#374151", fontWeight: 600 }}>
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
          // Dynamic label width based on longest category
          const labelWidth = Math.max(60, ...categories.map(c => c.length * 8));
          return (
            <div key={rowIdx} data-testid={`stacked-bar-row-${rowIdx}`} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Category label */}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#9ca3af",
                  width: labelWidth,
                  flexShrink: 0,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                }}
              >
                {cat}
              </div>
              {/* Bar container */}
              <div
                style={{
                  flex: 1,
                  height: 32,
                  display: "flex",
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "#f5f5f5",
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
                      title={`${stacks[stackIdx]?.label}: ${formatValue(val, unit)}`}
                    >
                      {widthPct > 8 && (
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10,
                            color: "white",
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            padding: "0 4px",
                          }}
                        >
                          {formatCompact(val, unit)}
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
                  fontSize: 11,
                  color: "#9ca3af",
                  minWidth: 60,
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {formatValue(total, unit)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
