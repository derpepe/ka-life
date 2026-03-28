import React, { useRef, useState, useEffect } from "react";
import { InfographicSection } from "@/lib/infographic-data";

interface WaffleChartProps {
  section: InfographicSection;
}

export default function WaffleChart({ section }: WaffleChartProps) {
  const { total, filled, filledColor, emptyColor, annotation, secondaryFilled, secondaryColor } = section.data as {
    total: number;
    filled: number;
    filledColor: string;
    emptyColor: string;
    annotation: string;
    secondaryFilled: number;
    secondaryColor: string;
  };

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cols = 10;
  const rows = Math.ceil(total / cols);
  const cellSize = 20;
  const gap = 3;
  const gridWidth = cols * (cellSize + gap) - gap;

  const squares = Array.from({ length: total }, (_, idx) => {
    let color = emptyColor;
    if (idx < secondaryFilled) {
      color = secondaryColor;
    } else if (idx < filled) {
      color = filledColor;
    }
    return color;
  });

  return (
    <div data-testid="waffle-chart" ref={ref}>
      <div
        style={{
          display: "flex",
          gap: 28,
          alignItems: "flex-start",
          flexWrap: "wrap" as const,
        }}
      >
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
            gap: gap,
          }}
        >
          {squares.map((color, i) => (
            <div
              key={i}
              data-testid={`waffle-square-${i}`}
              style={{
                width: cellSize,
                height: cellSize,
                borderRadius: 3,
                background: color,
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.6)",
                transition: `opacity 0.3s ease ${i * 6}ms, transform 0.3s ease ${i * 6}ms`,
              }}
            />
          ))}
        </div>

        {/* Legend and annotation */}
        <div style={{ flex: 1, minWidth: 160 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: filledColor, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#374151", fontWeight: 600 }}>
                Verbrenner ({filled - secondaryFilled} von 100)
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: secondaryColor, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#374151", fontWeight: 600 }}>
                Elektro ({secondaryFilled} von 100)
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: emptyColor, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#374151", fontWeight: 600 }}>
                Sonstige ({total - filled} von 100)
              </span>
            </div>
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "#6b7280",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {annotation}
          </p>
        </div>
      </div>
    </div>
  );
}
