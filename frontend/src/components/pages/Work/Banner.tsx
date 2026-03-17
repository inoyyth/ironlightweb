import CustomerSlider from "../Homepage/CustomerSlider";

export default function Banner() {
  return (
    <section className="relative top-0 h-[calc(50vh-64px)] lg:h-[calc(100vh-64px)] w-full">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-start">
        {/* Vignette overlay */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-transparent" />

        {/* Hero content */}
        <div className="relative z-[2] max-w-full lg:max-w-[680px] px-0 text-left">
          <h1 className="animate-up text-[clamp(32px,5.2vw,32px)] lg:text-[clamp(40px,5.2vw,64px)] font-bold leading-[44px] lg:leading-[64px] tracking-[-0.025em] text-neutral-25 opacity-0 [transform:translateY(22px)]">
            Real systems
          </h1>
          <p className="w-fit border-b border-secondary-600 animate-up animation-delay-100 mb-[26px] text-[clamp(32px,5.2vw,32px)] lg:text-[clamp(40px,5.2vw,64px)] font-bold leading-[44px] lg:leading-[64px] tracking-[-0.025em] text-neutral-25 opacity-0 [transform:translateY(22px)]">
            Proven outcomes.
          </p>
          <div className="animate-up animation-delay-200 opacity-0 [transform:translateY(22px)] py-6">
            <CustomerSlider desktopScale={1} mobileGap={6} mobileScale={0.002} desktopGap={10} />
          </div>
        </div>
      </div>
    </section>
  );
}
