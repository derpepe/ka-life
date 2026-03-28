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
        borderRadius: 10,
        aspectRatio: wide ? "16/9" : "1/1",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 22,
        cursor: "pointer",
        width: "100%",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -40,
          left: -40,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />

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
        <KaLifeLogo size={28} showText={false} color="white" />
        <span
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.7)",
            fontWeight: 400,
            letterSpacing: "0.04em",
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
            fontWeight: 500,
            fontSize: "clamp(48px, 10vw, 80px)",
            color: "white",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {socialCard.keyNumber}
        </div>
        <div
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.75)",
            fontWeight: 400,
            letterSpacing: "0.03em",
          }}
        >
          {socialCard.keyLabel}
        </div>
      </div>

      {/* Bottom: headline and week info */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: 14,
          }}
        >
          <h3
            data-testid="social-card-headline"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(14px, 3vw, 18px)",
              color: "white",
              margin: "0 0 6px",
              lineHeight: 1.25,
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
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 11,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.06em",
            }}
          >
            {socialCard.subline}
          </div>
        </div>
      </div>
    </div>
  );
}
