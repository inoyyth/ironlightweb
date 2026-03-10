import GlobeCanvas from "./GlobeCanvas";

export default function Banner() {
  return (
    // <section className="w-full bg-neutral-950">tes</section>
    <section className="relative top-0 h-[calc(100vh-64px)] w-full bg-neutral-900">
      <div className="container mx-auto max-w-7xl">
        <GlobeCanvas />

        {/* Vignette overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to right, #080808 28%, transparent 62%, #080808 100%), linear-gradient(to bottom, #080808 0%, transparent 12%, transparent 88%, #080808 100%)",
          }}
        />

        {/* Hero content */}
        <div className="relative top-[54px] z-[2] max-w-[680px] px-[52px]">
          <h1 className="text-neutral-25 mb-[26px] text-[clamp(40px,5.2vw,54px)] font-extrabold leading-[1.06] tracking-[-0.025em] opacity-0 [animation:up_0.75s_ease_0.55s_forwards] [transform:translateY(22px)]">
            We fix the systems your business runs on.
          </h1>
        </div>
        {/* Scroll hint */}
        <div className="text-neutral-25 absolute bottom-[54px] z-[2] max-w-[630px] px-[52px] pt-6 text-lg opacity-0 [animation:fadeIn_0.75s_ease_1.5s_forwards]">
          Web systems, commerce platforms, and enterprise integrations — built
          right and kept stable.
        </div>
      </div>

      <style>{`
        @keyframes up { to { opacity: 1; transform: none; } }
        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes scan { 0%{left:-100%} 50%{left:100%} 100%{left:100%} }
        .scroll-line::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 100%; height: 100%;
          background: #F5A623;
          animation: scan 2s ease-in-out 1.6s infinite;
        }
      `}</style>
    </section>
  );
}
