import { BANNER_CONTENT } from "@/constants/about";

export default function Banner() {
  return (
    <section className="relative top-0 h-[calc(100vh-64px)] w-full">
      <div className="container mx-auto max-w-7xl">
        {/* Vignette overlay */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-transparent" />

        {/* Hero content */}
        <div className="relative top-[80px] z-[2] max-w-[680px] px-0">
          <h1 className="animate-up mb-[26px] text-[clamp(32px,5.2vw,32px)] lg:text-[clamp(40px,5.2vw,54px)] font-extrabold leading-[1.06] tracking-[-0.025em] text-neutral-25 opacity-0 [transform:translateY(22px)]">
            {BANNER_CONTENT.heading}
          </h1>
        </div>
        {/* Scroll hint */}
        <div className="animate-fade-in left-0 lg:left-auto absolute bottom-[54px] z-[2] max-w-full lg:max-w-[630px] px-4 pt-6 text-base lg:text-lg text-neutral-25 opacity-0">
          <p>{BANNER_CONTENT.subheading}</p>
        </div>
      </div>
    </section>
  );
}
