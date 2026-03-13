"use client";

import { useRef } from "react";
import ScrollRevealText from "@/components/shared/ScrollRevealText";
import GlobeCanvas from "@/components/shared/GlobeCanvas";
import { useIsMobile } from "@/hooks/useIsMobile";
import { REVEAL_TEXT_SEGMENTS } from "@/constants/homepage";

export default function HomepageScrollRevealText() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <div
      ref={sectionRef}
      className="container relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 pb-0 pt-20 lg:pt-[118px] lg:pb-20">
        <ScrollRevealText
          content={REVEAL_TEXT_SEGMENTS}
          pointStartChange={isMobile ? 450 : 150}
          endPointChange={isMobile ? 100 : 250}
          className="text-center text-2xl lg:text-5xl font-bold leading-9 lg:leading-[64px]"
        />
      </div>

        <div className="hidden lg:block absolute inset-0 z-0 top-10 overflow-hidden">
          <div className="absolute inset-0 p-4">
            <GlobeCanvas disableLightning cameraStartSize={2000} cameraEndSize={3} position={0} cameraTransitionSpeed={0.4} elementScroll />
          </div>
        </div>
      
    </div>
  );
}
