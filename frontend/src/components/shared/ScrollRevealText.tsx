"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealTextProps {
  content: string[];
  colorStart?: string;
  colorChange?: string;
  pointStartChange?: number;
  endPointChange?: number;
  className?: string;
}

type Token = { char: string } | { br: true };

export default function ScrollRevealText({
  content,
  colorStart = "#525252",
  colorChange = "#FAFAFA",
  pointStartChange = 30,
  endPointChange = 0,
  className,
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  const tokens: Token[] = [];
  content.forEach((seg, i) => {
    for (const char of seg) tokens.push({ char });
    if (i < content.length - 1) tokens.push({ br: true });
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("span"));

    // Animation completes when element top reaches endPointChange px from viewport top
    const pxPerLetter =
      (window.innerHeight - pointStartChange - endPointChange) / spans.length;

    const onScroll = () => {
      const scrolledPast =
        window.innerHeight - el.getBoundingClientRect().top - pointStartChange;
      const litCount = Math.max(
        0,
        Math.min(spans.length, Math.floor(scrolledPast / pxPerLetter))
      );
      for (let i = 0; i < spans.length; i++) {
        spans[i].style.color = i < litCount ? colorChange : colorStart;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [colorStart, colorChange, pointStartChange, endPointChange]);

  return (
    <div ref={ref} className={className}>
      {tokens.map((token, i) => {
        if ("br" in token) return <br key={i} />;
        return (
          <span key={i} style={{ color: colorStart }}>
            {token.char}
          </span>
        );
      })}
    </div>
  );
}
