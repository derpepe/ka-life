import React from "react";

interface KaLifeLogoProps {
  size?: number;
  showText?: boolean;
  color?: string;
}

export default function KaLifeLogo({ size = 40, showText = true, color }: KaLifeLogoProps) {
  const fanSize = size;
  const textSize = size * 0.38;
  const cx = fanSize / 2;
  const cy = fanSize * 0.78;
  const r = fanSize * 0.72;

  // Fan rays: 5 rays spreading upward from bottom-center
  const rays = [-72, -36, 0, 36, 72];
  const fillColor = color || "hsl(var(--primary))";
  const textFill = color || "hsl(var(--foreground))";

  function polarToXY(angleDeg: number, radius: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad),
    };
  }

  // Build pie-slice fan paths
  const sliceAngle = 14; // degrees each slice spans
  const fanPaths = rays.map((centerAngle, i) => {
    const startAngle = centerAngle - sliceAngle / 2;
    const endAngle = centerAngle + sliceAngle / 2;
    const p1 = polarToXY(startAngle, r);
    const p2 = polarToXY(endAngle, r);
    const p3 = polarToXY(endAngle, r * 0.22);
    const p4 = polarToXY(startAngle, r * 0.22);
    return (
      <path
        key={i}
        d={`M ${cx} ${cy} L ${p1.x} ${p1.y} A ${r} ${r} 0 0 1 ${p2.x} ${p2.y} Z`}
        fill={fillColor}
        opacity={0.75 + i * 0.05}
      />
    );
  });

  // Small inner arc at base
  const innerR = r * 0.18;

  return (
    <div
      data-testid="ka-life-logo"
      style={{ display: "inline-flex", alignItems: "center", gap: showText ? size * 0.2 : 0 }}
    >
      <svg
        width={fanSize}
        height={fanSize}
        viewBox={`0 0 ${fanSize} ${fanSize}`}
        fill="none"
        aria-label="KA-Life Logo"
        style={{ flexShrink: 0 }}
      >
        {/* Fan rays */}
        {fanPaths}
        {/* Inner arc to suggest city center */}
        <circle cx={cx} cy={cy} r={innerR} fill="hsl(var(--background, white))" opacity={0.9} />
        {/* Outer arc boundary - thin stroke */}
        <path
          d={`M ${polarToXY(-72 - sliceAngle / 2, r).x} ${polarToXY(-72 - sliceAngle / 2, r).y} A ${r} ${r} 0 0 1 ${polarToXY(72 + sliceAngle / 2, r).x} ${polarToXY(72 + sliceAngle / 2, r).y}`}
          stroke={fillColor}
          strokeWidth={fanSize * 0.025}
          fill="none"
          opacity={0.3}
        />
      </svg>
      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: textSize * 1.2,
              color: fillColor,
              letterSpacing: "-0.02em",
            }}
          >
            KA-Life
          </span>
          <span
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 400,
              fontSize: textSize * 0.65,
              color: textFill,
              opacity: 0.6,
              letterSpacing: "0.05em",
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
