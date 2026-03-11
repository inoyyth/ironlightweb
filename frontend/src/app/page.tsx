import { Banner, GlobeCanvas } from "@/components/pages/Homepage/Banner";

import HomepageContent from "@/components/pages/Homepage/HomepageContent";

export default function Home() {
  return (
    <>
      {/* Sticky globe section — persists until Experience */}
      <div className="relative h-[calc(100vh-64px)] bg-neutral-900">
        {/* Globe: full width centered on mobile, right panel on desktop */}
        <div className="absolute right-0 top-0 h-full w-full lg:-right-10 lg:w-[65%]">
          <GlobeCanvas cameraStartSize={3.8} cameraEndSize={3.8} position={0} />
        </div>
        <Banner />
      </div>

      {/* Globe naturally unsticks from here */}
      <HomepageContent />
    </>
  );
}
