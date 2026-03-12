import Svg from "@/components/shared/Svg";

export default function Banner() {
  return (
    <section className="relative top-0 h-[calc(100vh-64px)] w-full">
      <div className="container mx-auto max-w-7xl">
        {/* Vignette overlay */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-transparent" />

        {/* Hero content */}
        <div className="relative top-[54px] z-[2] max-w-[680px] px-0 lg:px-[52px]">
          <h1 className="animate-up mb-[26px] text-[clamp(40px,5.2vw,32px)] lg:text-[clamp(40px,5.2vw,54px)] font-extrabold leading-[1.06] tracking-[-0.025em] text-neutral-25 opacity-0 [transform:translateY(22px)]">
            We fix the systems your business runs on.
          </h1>
        </div>
        {/* Scroll hint */}
        <div className="animate-fade-in left-0 lg:left-auto absolute bottom-[54px] z-[2] max-w-full lg:max-w-[630px] px-4 lg:px-[52px] pt-6 text-base lg:text-lg text-neutral-25 opacity-0">
          Web systems, commerce platforms, and enterprise integrations 
          <p className="w-fit border-b border-b-secondary-500"> 
            — built right and kept stable.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 pt-6">
            <div className="group flex flex-row-reverse hover:flex-row h-11 cursor-pointer items-center justify-center gap-2 rounded bg-neutral-25 px-4 outline outline-1 outline-offset-[-1px] outline-neutral-25">
              <div className="cursor-pointer justify-start text-sm font-semibold leading-5 text-neutral-900">
                Let’s Work Together
              </div>
              <div className="relative h-6 w-6 overflow-hidden">
                <Svg
                  use="arrow"
                  className="h-6 w-6 text-neutral-900 "
                />
              </div>
            </div>
            <div className="group flex h-11 cursor-pointer items-center justify-center gap-2 rounded bg-neutral-960 px-4 outline outline-1 outline-offset-[-1px] outline-neutral-960">
              <div className="cursor-pointer justify-start text-sm font-semibold leading-5 text-neutral-25">
                View Our Works
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
