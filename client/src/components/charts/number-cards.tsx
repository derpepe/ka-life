import React, { useEffect, useRef, useState } from "react";
import { InfographicSection, NumberCard } from "@/lib/infographic-data";

interface NumberCardsProps {
  section: InfographicSection;
}

function useCountUp(target: string, duration: number = 1200, active: boolean = false) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;

    // Check if target is a pure number
    const num = parseFloat(target);
    if (isNaN(num)) {
      setDisplay(target);
      return;
    }

    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num);
      setDisplay(String(current));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(target);
      }
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return display;
}

function NumberCardItem({ card, index }: { card: NumberCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const displayValue = useCountUp(card.value, 1000 + index * 150, active);

  return (
    <div
      ref={ref}
      data-testid={`number-card-${index}`}
      style={{
        background: "white",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid #f0f0f0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Colored top bar */}
      <div style={{ height: 3, background: card.color }} />
      <div style={{ padding: "18px 18px 22px" }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            fontSize: 44,
            lineHeight: 1,
            color: card.color,
            letterSpacing: "-0.03em",
          }}
        >
          {displayValue}
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 10,
            color: "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginTop: 4,
          }}
        >
          {card.unit}
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 13,
            color: "#4b5563",
            marginTop: 10,
            lineHeight: 1.5,
          }}
        >
          {card.label}
        </div>
      </div>
    </div>
  );
}

export default function NumberCards({ section }: NumberCardsProps) {
  const cards: NumberCard[] = section.data.cards || [];

  return (
    <div
      data-testid="number-cards-section"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 14,
      }}
    >
      {cards.map((card, i) => (
        <NumberCardItem key={i} card={card} index={i} />
      ))}
    </div>
  );
}
