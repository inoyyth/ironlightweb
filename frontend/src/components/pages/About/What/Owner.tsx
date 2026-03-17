import Image from "next/image";

export default function Owner() {
  return (
    <div className="relative w-full bg-neutral-900 bg-cover bg-fixed bg-center pb-0 pt-0 lg:pt-10">
      <div className="container mx-auto max-w-7xl px-0 lg:px-8">
        <div className="relative inline-flex items-center justify-center self-stretch overflow-hidden px-16 py-20">
          <div className="flex flex-1 items-center justify-center gap-2.5">
            <Image
              className="h-[512px] w-96"
              src="https://placehold.co/420x512"
              alt="Owner"
              width={420}
              height={512}
            />
          </div>
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-10">
            <div className="justify-start space-y-4 self-stretch text-xl font-semibold leading-6 text-neutral-25">
              <p>
                Henri has been building web systems professionally for over a
                decade. He has an engineering background from KU Leuven and deep
                expertise in e-commerce infrastructure, payment integrations,
                and legacy system modernisation.
              </p>
              <p>
                Over the years he has worked with companies across Estonia, the
                Nordic region, and internationally — from early-stage startups
                to established industrial firms.
              </p>
              <p>
                He founded Ironlight to do serious technical work under a
                structure designed for clarity, accountability, and long-term
                reliability.
              </p>
            </div>
            <div className="justify-start self-stretch text-lg font-normal leading-7 text-neutral-25">
              Henri Parkja — Founder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
