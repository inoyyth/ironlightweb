const notForItems = [
  "Unclear scope",
  "Chaotic communication",
  "Constant decision-making",
];

export default function ParallaxWhoSection() {
  return (
    <div
      className="bg-neutral-25 relative w-full bg-cover bg-fixed bg-center pb-0 pt-0 lg:pt-10 "
      style={{ backgroundImage: "url('/images/bg_parallax.png')" }}
    >
      <div className="container mx-auto max-w-7xl px-0 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10 bg-neutral-900 px-4 py-0 lg:px-12 lg:py-10">
          {/* Left — For */}
          <div className="flex flex-1 flex-col border-b border-neutral-25 pb-10 lg:border-b-0 lg:pb-0">
            <p className="text-secondary-600 mb-8 text-2xl lg:text-base font-semibold uppercase tracking-widest">
              Who this is for?
            </p>
            <p className="text-neutral-25 text-2xl lg:text-3xl font-bold">
              Founders and technical leads who&apos;ve been burned by vague
              deliverables, scope creep, or developers who disappear
              mid-project. You know what you need. You need someone who can
              execute it cleanly
            </p>
          </div>
          {/* Right — Not for */}
          <div className="flex flex-1 flex-col">
            <p className="text-neutral-25 mb-8 text-2xl lg:text-base font-semibold uppercase tracking-widest">
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
