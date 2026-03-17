'use client'

import { WHO_SECTION } from "@/constants/homepage";

export default function ParallaxWhoSection() {
  return (
    <div
      className="bg-neutral-25 relative w-full bg-cover bg-fixed bg-center pb-0 pt-0 lg:pt-10 "
      style={{ backgroundImage: "url('/images/bg_parallax.png')" }}
    >
      <div className="container mx-auto max-w-7xl px-0 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10 bg-neutral-900 px-0 py-0 lg:px-12 lg:py-10">
          {/* Left — For */}
          <div className="px-4 lg:px-0 flex flex-1 flex-col border-b border-neutral-25 pb-10 lg:border-b-0 lg:pb-0">
            <p className="text-secondary-600 mb-4 lg:mb-8 text-base lg:text-2xl font-semibold uppercase tracking-widest">
              {WHO_SECTION.forHeading}
            </p>
            <p className="text-neutral-25 text-2xl lg:text-3xl font-bold leading-7 lg:leading-[44px]">
              {WHO_SECTION.forBody}
            </p>
          </div>
          {/* Right — Not for */}
          <div className="flex flex-1 flex-col">
            <p className="px-4 lg:px-0 text-neutral-25 mb-8 text-base lg:text-2xl font-semibold uppercase tracking-widest">
              {WHO_SECTION.notForHeading}
            </p>
            <div className="bg-neutral-25 p-5 lg:p-10">
              <ul className="space-y-4">
                {WHO_SECTION.notForItems.map((item) => (
                  <li key={item} className="lg:text-3xl text-2xl text-neutral-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
