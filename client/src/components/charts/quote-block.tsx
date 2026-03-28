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
        borderLeft: `4px solid ${color}`,
        paddingLeft: 24,
        paddingTop: 4,
        paddingBottom: 4,
        margin: "0 auto",
        maxWidth: 680,
      }}
    >
      <blockquote
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: 22,
          lineHeight: 1.55,
          color: "#1f2937",
          margin: 0,
          fontWeight: 400,
        }}
      >
        &bdquo;{text}&ldquo;
      </blockquote>
      <cite
        style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontStyle: "normal",
          fontSize: 13,
          color: "#6b7280",
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
