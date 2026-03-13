'use client'

import { Banner, GlobeCanvas } from "@/components/pages/Homepage/Banner";
import HomepageContent from "@/components/pages/Homepage/HomepageContent";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";

export default function Home() {
  const isMobileDetected = useIsMobile();
  // Default to mobile (true) until detected — prevents big desktop globe flash on mobile
  const isMobile = isMobileDetected ?? true;
  const [globeVisible, setGlobeVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGlobeVisible(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Sticky globe section — persists until Experience */}
      <div className="relative h-[calc(100vh-64px)] bg-neutral-900">
        {/* Globe: full width centered on mobile, right panel on desktop */}
        <div
          className="absolute right-0 top-0 h-full w-full overflow-hidden lg:w-[65%] transition-opacity duration-700"
          style={{ opacity: globeVisible ? 1 : 0 }}
        >
          <GlobeCanvas
            disableLightning
            cameraStartSize={isMobile ? 4.5 : 2.5}
            cameraEndSize={isMobile ? 4.5 : 1000}
            position={0}
            xOffset={0.9}
            yOffset={isMobile ? 0.5 : 0}
            cameraTransitionSpeed={0.4}
          />
        </div>
        <Banner />
      </div>

      {/* Globe naturally unsticks from here */}
      <HomepageContent />
    </>
  );
}
