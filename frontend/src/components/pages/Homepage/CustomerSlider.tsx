"use client";

import Svg from "@/components/ui/Svg";
import { IconName } from "@/lib/icons";
import { useState } from "react";

const clients: IconName[] = [
  "customers/airbnb",
  "customers/airwallex",
  "customers/amplitude",
  "customers/atlassian",
];

function SliderItem({
  name,
  onMouseEnter,
  onMouseLeave,
}: {
  name: IconName;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="flex shrink-0 items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="hover:text-neutral-25 px-10 text-sm font-semibold tracking-wide text-neutral-500 transition-colors duration-200">
        <Svg name={name} />
      </span>
    </div>
  );
}

export default function CustomerSlider() {
  const [paused, setPaused] = useState(false);

  // Triplicate to ensure seamless loop at any screen width
  const items = [...clients, ...clients, ...clients];

  return (
    <div className="w-full overflow-hidden bg-neutral-900 pt-16">
      <div
        className="flex w-max"
        style={{
          animation: "marquee 30s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((name, i) => (
          <SliderItem
            key={i}
            name={name}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
