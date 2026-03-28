import React from "react";

interface KaLifeLogoProps {
  size?: number;
  showText?: boolean;
  color?: string;
}

export default function KaLifeLogo({ size = 40, showText = true, color }: KaLifeLogoProps) {
  const iconSize = size;
  const textSize = size * 0.4;
  const fillColor = color || "#1a5c3a";
  const textColor = color || "#111827";

  return (
    <div
      data-testid="ka-life-logo"
      style={{ display: "inline-flex", alignItems: "center", gap: showText ? size * 0.22 : 0 }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        aria-label="KA-Life Logo"
        style={{ flexShrink: 0 }}
      >
        {/* Minimal geometric fan: 5 clean lines radiating from center-bottom */}
        {[-56, -28, 0, 28, 56].map((angle, i) => {
          const rad = ((angle - 90) * Math.PI) / 180;
          const len = 17;
          const cx = 20;
          const cy = 30;
          const x2 = cx + len * Math.cos(rad);
          const y2 = cy + len * Math.sin(rad);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke={fillColor}
              strokeWidth={2.4}
              strokeLinecap="round"
            />
          );
        })}
        {/* Small dot at origin */}
        <circle cx={20} cy={30} r={2} fill={fillColor} />
      </svg>
      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, gap: 1 }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: textSize * 1.1,
              color: textColor,
              letterSpacing: "-0.03em",
            }}
          >
            KA-Life
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: textSize * 0.55,
              color: textColor,
              opacity: 0.45,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
            }}
          >
            Karlsruhe in Zahlen
          </span>
        </div>
      )}
    </div>
  );
}
