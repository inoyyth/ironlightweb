'use client'

import Banner from "@/components/pages/Work/Banner";
import Contact from "@/components/pages/Work/Contact";
import Conversation from "@/components/pages/Work/Conversation";
import WorkContent from "@/components/pages/Work/Workcontent";
import GlobeCanvas from "@/components/shared/GlobeCanvas";
import { useTopbar } from "@/context/TopbarContext";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";

export default function WorkPage() {
 const isMobileDetected = useIsMobile();
   // Default to mobile (true) until detected — prevents big desktop globe flash on mobile
   const isMobile = isMobileDetected ?? true;
   const [globeVisible, setGlobeVisible] = useState(false);

   const { setActive} = useTopbar();
 
   useEffect(() => {
     const t = setTimeout(() => setGlobeVisible(true), 500);
     setActive("/work/");
     return () => clearTimeout(t);
   }, []);
 
   return (
     <>
       {/* Sticky globe section — persists until Experience */}
       <div className="relative h-auto lg:h-[calc(100vh-64px)] bg-neutral-900">
         {/* Globe: full width centered on mobile, right panel on desktop */}
         <div
           className="absolute right-0 top-0 h-full w-full overflow-hidden lg:w-[65%] transition-opacity duration-700"
           style={{ opacity: globeVisible ? 1 : 0 }}
         >
           <GlobeCanvas
             disableLightning
             cameraStartSize={isMobile ? 2.5 : 2.5}
             cameraEndSize={isMobile ? 2.5 : 2.5}
             position={isMobile ? 20 : 0}
             xOffset={isMobile ? 0.9 : 0.9}
             yOffset={0}
             cameraTransitionSpeed={0.4}
           />
         </div>
         <Banner />
       </div>
      <div className="w-full">
      {/* Globe naturally unsticks from here */}
        <WorkContent />
        <Conversation />
        <Contact />
      </div>
     </>
   );
}
