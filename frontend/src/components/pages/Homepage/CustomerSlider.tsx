"use client";

import { CustomerSliderProps, customersSlider } from "@/constants/homepage";
import { useRef } from "react";

export type SliderProps = {
  mobileScale?: number;
  desktopScale?: number;
  mobileGap?: number
  desktopGap?: number
};

function SliderItem({
  name,
  onMouseEnter,
  onMouseLeave,
  mobileScale,
  desktopScale,
  mobileGap,
  desktopGap
}: {
  name: CustomerSliderProps;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  mobileScale: number;
  desktopScale: number;
  mobileGap: number;
  desktopGap: number;
}) {
  return (
    <div
      className="flex shrink-0 items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={`group px-${mobileGap} text-sm font-semibold tracking-wide text-neutral-500 transition-colors duration-200 hover:text-neutral-25 lg:px-${desktopGap}`}>
        <span className={`block origin-center scale-[${mobileScale}] group-hover:hidden lg:scale-[${desktopScale}]`}>
          {name.default}
        </span>
        <span className={`hidden origin-center scale-[${mobileScale}] group-hover:block lg:scale-[${desktopScale}]`}>
          {name.active}
        </span>
      </span>
    </div>
  );
}

export default function CustomerSlider({ mobileScale = 0.8, desktopScale = 1, mobileGap = 2, desktopGap = 10 }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Triplicate to ensure seamless loop at any screen width
  const items = [...customersSlider, ...customersSlider, ...customersSlider];

  const changeSpeed = (newDuration: number) => {
    const el = containerRef.current;
    if (!el) return;
    const matrix = new DOMMatrix(window.getComputedStyle(el).transform);
    const currentX = matrix.m41;
    const totalDistance = el.offsetWidth / 3;
    const progress = totalDistance > 0 ? Math.abs(currentX) / totalDistance : 0;
    el.style.animation = "none";
    void el.offsetHeight; // force reflow
    el.style.animation = `marquee ${newDuration}s linear infinite`;
    el.style.animationDelay = `${-(progress * newDuration)}s`;
  };

  return (
    <div className="w-full overflow-hidden bg-transparent">
      <div ref={containerRef} className="flex w-max animate-marquee">
        {items.map((name: CustomerSliderProps, i) => (
          <SliderItem
            key={i}
            name={name}
            onMouseEnter={() => changeSpeed(90)}
            onMouseLeave={() => changeSpeed(30)}
            mobileScale={mobileScale}
            desktopScale={desktopScale}
            mobileGap={mobileGap}
            desktopGap={desktopGap}
          />
        ))}
      </div>
    </div>
  );
}
