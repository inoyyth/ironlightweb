export default function WhereWeWork() {
  const people = Array.from({ length: 8 });

  return (
    <div className="relative w-full bg-neutral-900 bg-cover bg-fixed bg-center pb-0 pt-0 lg:pt-10">
      <div className="container mx-auto max-w-7xl px-0 lg:px-8">
        <div className="flex items-center justify-between self-stretch overflow-hidden py-16">
          <div className="inline-flex flex-auto flex-col items-start justify-start gap-5">
            <div className="justify-start text-4xl font-bold leading-[48px] text-neutral-25">
              Where we work
            </div>
            <div className="justify-start text-lg font-normal leading-7 text-neutral-25 underline">
              hello@ironlight.ee
            </div>
          </div>
          <div className="flex-2 justify-start">
            <p className="text-lg font-normal leading-7 text-neutral-25">
              Registered in Estonia.
            </p>
            <p className="text-lg font-normal leading-7 text-neutral-25">
              Operating internationally.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-neutral-950 to-amber-500 px-16 py-20">
        <div className="mx-auto max-w-7xl flex flex-col gap-10">
          <div className="text-center text-4xl font-bold leading-[48px] text-neutral-25">
            Not just people, but your{" "}
            <span className="underline">Partners</span>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {people.map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="aspect-square w-full bg-zinc-300" />
                <div className="flex flex-col gap-1">
                  <div className="text-2xl font-semibold leading-7 text-neutral-25">
                    Name
                  </div>
                  <div className="text-lg font-normal leading-7 text-neutral-25">
                    Title
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a href="#" className="inline-flex items-center gap-2 text-lg font-normal leading-7 text-neutral-25">
              → View our work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
