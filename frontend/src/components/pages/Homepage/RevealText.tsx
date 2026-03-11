"use client";

import { useEffect, useRef, useState } from "react";
import ScrollRevealText from "@/components/shared/ScrollRevealText";
import GlobeCanvas from "@/components/shared/GlobeCanvas";
import { useIsMobile } from "@/hooks/useIsMobile";

const SEGMENTS = [
  "We design and build systems that didn't exist. ",
  "We rebuild systems that matter. ",
  "We integrate things that were never meant to fit. We take over live systems and make them stable",
];

export default function HomepageScrollRevealText() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  console.log(isMobile)

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 pb-0 pt-20 lg:pb-20">
        <ScrollRevealText
          content={SEGMENTS}
          pointStartChange={isMobile ? 800 : 150}
          endPointChange={isMobile ? 800 : 250}
          className="text-center text-2xl lg:text-5xl font-bold leading-9 lg:first-letter:leading-[64px]"
        />
      </div>
      {visible && (
        <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 p-4">
            <GlobeCanvas cameraStartSize={3} cameraEndSize={3} position={0} />
          </div>
        </div>
      )}
    </div>
  );
}
