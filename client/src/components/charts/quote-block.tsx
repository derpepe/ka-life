import React from "react";
import { InfographicSection } from "@/lib/infographic-data";

interface QuoteBlockProps {
  section: InfographicSection;
}

export default function QuoteBlock({ section }: QuoteBlockProps) {
  const { text, author, color } = section.data as {
    text: string;
    author: string;
    color: string;
  };

  return (
    <div
      data-testid="quote-block"
      style={{
        borderLeft: `3px solid ${color}`,
        paddingLeft: 24,
        paddingTop: 4,
        paddingBottom: 4,
        margin: "0 auto",
        maxWidth: 600,
      }}
    >
      <blockquote
        style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: "italic",
          fontSize: 18,
          lineHeight: 1.6,
          color: "#1f2937",
          margin: 0,
          fontWeight: 500,
          letterSpacing: "-0.01em",
        }}
      >
        &bdquo;{text}&ldquo;
      </blockquote>
      <cite
        style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: "normal",
          fontSize: 12,
          color: "#9ca3af",
          display: "block",
          marginTop: 12,
          fontWeight: 400,
        }}
      >
        &mdash; {author}
      </cite>
    </div>
  );
}
