"use client";

import { CustomerSliderProps, customersSlider } from "@/constants/homepage";
import { useRef } from "react";

function SliderItem({
  name,
  onMouseEnter,
  onMouseLeave,
}: {
  name: CustomerSliderProps;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="flex shrink-0 items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="group px-2 text-sm font-semibold tracking-wide text-neutral-500 transition-colors duration-200 hover:text-neutral-25 lg:px-10">
        <span className="block origin-center scale-[0.8] group-hover:hidden lg:scale-100">
          {name.default}
        </span>
        <span className="hidden origin-center scale-[0.8] group-hover:block lg:scale-100">
          {name.active}
        </span>
      </span>
    </div>
  );
}

export default function CustomerSlider() {
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
    <div className="w-full overflow-hidden bg-transparent py-20 lg:py-[128px]">
      <div ref={containerRef} className="flex w-max animate-marquee">
        {items.map((name: CustomerSliderProps, i) => (
          <SliderItem
            key={i}
            name={name}
            onMouseEnter={() => changeSpeed(90)}
            onMouseLeave={() => changeSpeed(30)}
          />
        ))}
      </div>
    </div>
  );
}
