import React from "react";
import { WeeklyInfographic } from "@/lib/infographic-data";
import KaLifeLogo from "@/components/brand/ka-life-logo";

interface SocialCardProps {
  infographic: WeeklyInfographic;
  wide?: boolean;
}

export default function SocialCard({ infographic, wide = false }: SocialCardProps) {
  const { socialCard, weekNumber, year } = infographic;

  const lines = socialCard.headline.split("\n");

  return (
    <div
      data-testid="social-card"
      style={{
        background: socialCard.gradient,
        borderRadius: 12,
        aspectRatio: wide ? "16/9" : "1/1",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 24,
        cursor: "pointer",
        width: "100%",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <KaLifeLogo size={24} showText={false} color="white" />
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.6)",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          ka-life.de
        </span>
      </div>

      {/* Center: key number */}
      <div
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <div
          data-testid="social-card-key-number"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            fontSize: "clamp(48px, 10vw, 76px)",
            color: "white",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          {socialCard.keyNumber}
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.65)",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          {socialCard.keyLabel}
        </div>
      </div>

      {/* Bottom: headline and week info */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 14,
          }}
        >
          <h3
            data-testid="social-card-headline"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(14px, 3vw, 17px)",
              color: "white",
              margin: "0 0 6px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            {lines.map((line, i) => (
              <span key={i}>
                {line}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h3>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.03em",
              fontWeight: 400,
            }}
          >
            {socialCard.subline}
          </div>
        </div>
      </div>
    </div>
  );
}
