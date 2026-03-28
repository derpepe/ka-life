import React, { useState } from "react";
import { InfographicSection, BarItem } from "@/lib/infographic-data";

interface ComparisonBarsProps {
  section: InfographicSection;
}

export default function ComparisonBars({ section }: ComparisonBarsProps) {
  const items: BarItem[] = section.data.items || [];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const maxValue = Math.max(...items.map((item) => item.value));

  return (
    <div data-testid="comparison-bars-section" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {items.map((item, i) => {
        const widthPct = (item.value / maxValue) * 100;
        const isHovered = hoveredIndex === i;
        const isDimmed = hoveredIndex !== null && !isHovered;

        return (
          <div
            key={i}
            data-testid={`comparison-bar-${i}`}
            style={{
              opacity: isDimmed ? 0.35 : 1,
              transition: "opacity 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Label row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 6,
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#374151",
                  lineHeight: 1.3,
                  flex: 1,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  fontWeight: 600,
                  color: item.color,
                  whiteSpace: "nowrap" as const,
                  padding: "2px 8px",
                  background: `${item.color}18`,
                  borderRadius: 4,
                }}
              >
                {item.display}
              </span>
            </div>
            {/* Bar */}
            <div
              style={{
                height: 10,
                background: "#f3f4f6",
                borderRadius: 5,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${widthPct}%`,
                  background: item.color,
                  borderRadius: 5,
                  transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
