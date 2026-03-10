import ParallaxWhoSection from "./ParallaxWhoSection";

export default function Experience() {
  const experiences = [
    "12+ Years combined senior experience",
    "Estonian, Nordic & global clients",
    "Every project ship-ready",
  ];

  return (
    <>
      <div className="w-full bg-neutral-900 pt-16">
        <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="bg-secondary-600 mb-8 flex items-center justify-center gap-0">
            {experiences.map((exp, i) => (
              <p
                key={i}
                className="flex-1 border-r border-neutral-900 px-14 py-10 text-center text-3xl font-bold text-neutral-900 last:border-0"
              >
                {exp}
              </p>
            ))}
          </div>
          <div className="pt-20">
            <h2 className="text-secondary-600 text-2xl font-semibold leading-10">
              How it feels to work with us
            </h2>
            <p className="leading-14 text-4xl font-bold text-neutral-400">
              Clear scope. Calm communication. Decisions made once, not daily. You
              get a senior engineer who asks the right questions before writing a
              single line of code.
            </p>
            <div className="bg-secondary-600 mt-16 w-fit p-4 text-4xl font-bold">
              No chaos. No theatre.
            </div>
          </div>
        </div>
      </div>
      <ParallaxWhoSection />
    </>
  );
}
