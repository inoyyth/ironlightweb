'use client'

import ScrollRevealText from "@/components/shared/ScrollRevealText";
import { useIsMobile } from "@/hooks/useIsMobile";

const notForItems = [
  "Unclear scope",
  "Chaotic communication",
  "Constant decision-making",
];

const SEGMENTS = [
  "Founders and technical leads who've been burned by vague deliverables, scope creep, or developers who disappear mid-project. You know what you need. You need someone who can execute it cleanly",
];

export default function ParallaxWhoSection() {
  const isMobile = useIsMobile()
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
              Who this is for?
            </p>
            <ScrollRevealText
              content={SEGMENTS}
              pointStartChange={isMobile ? 300 : 150}
              endPointChange={isMobile ? 350 :250}
              className="text-neutral-25 first-line:text-center text-2xl lg:text-3xl font-bold leading-9 lg:first-letter:leading-[64px]"
            />
          </div>
          {/* Right — Not for */}
          <div className="flex flex-1 flex-col">
            <p className="px-4 lg:px-0 text-neutral-25 mb-8 text-base lg:text-2xl font-semibold uppercase tracking-widest">
              Not for!
            </p>
            <div className="bg-neutral-25 p-5 lg:p-10">
              <ul className="space-y-4">
                {notForItems.map((item) => (
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
