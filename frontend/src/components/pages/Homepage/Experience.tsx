import ScrollRevealText from "@/components/shared/ScrollRevealText";
import GlobeCanvas from "@/components/shared/GlobeCanvas";
import { useIsMobile } from "@/hooks/useIsMobile";
import { EXPERIENCE } from "@/constants/homepage";

export default function Experience() {
  const isMobile = useIsMobile()
  const { EXPERIENCE_ITEMS, EXPERIENCE_SEGMENTS } = EXPERIENCE;


  return (
    <>
      <div className="w-full bg-transparent">
        <div className="container relative mx-auto max-w-7xl px-0 py-6 sm:px-6 lg:px-8">
          <div className="relative z-10 mb-8 flex flex-col lg:flex-row items-center justify-center gap-0 bg-secondary-600">
            {EXPERIENCE_ITEMS.map((exp: string, i: number) => (
              <p
                key={i}
                className="flex-1 border-b border-r-0 lg:border-r lg:border-b-0 border-neutral-900 px-14 py-10 text-center text-3xl font-bold text-neutral-900 last:border-0"
              >
                {exp}
              </p>
            ))}
          </div>
          <div className="relative z-10 py-20 px-4 lg:px-0">
            <h2 className="text-base mb-4 lg:mb-8 lg:text-2xl font-semibold leading-10 text-secondary-600">
              {EXPERIENCE.sectionHeading}
            </h2>
            <ScrollRevealText
              content={EXPERIENCE_SEGMENTS}
              pointStartChange={isMobile ? 450 : 150}
              endPointChange={isMobile ? 100 :250}
              className="text-left text-2xl lg:text-5xl font-bold leading-7 lg:leading-[64px]"
            />
            <div className="text-neutral-25 lg:text-neutral-900 mt-16 w-fit cursor-pointer bg-neutral-960 lg:bg-secondary-600 p-4 text-2xl lg:text-4xl font-bold opacity-100 lg:opacity-50 lg:transition-opacity lg:hover:opacity-100">
              {EXPERIENCE.tagline}
            </div>
          </div>
          <div className="hidden lg:block lg:absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 translate-x-[26%] translate-y-[36%] p-4">
              <GlobeCanvas disableLightning cameraStartSize={3} cameraEndSize={3} position={0} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
