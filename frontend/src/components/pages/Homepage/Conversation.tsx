import Svg from "@/components/shared/Svg";

export default function Conversation() {
  return (
    <div className="relative w-full bg-transparent py-[188px]">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start gap-2 self-stretch">
          <div className="justify-start self-stretch text-center text-2xl lg:text-3xl font-bold leading-10 text-neutral-25">
            Start a conversation
          </div>
          <div className="justify-start self-stretch text-center text-base font-normal leading-6 text-neutral-25">
            No forms. No sales calls. Just a direct message to Henri.
          </div>
          <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-10">
            <div className="group flex cursor-pointer items-center justify-center gap-2.5 border-b px-6 py-5 hover:border-b-2 hover:border-secondary-500">
              <div className="flex items-center justify-start gap-3 text-center text-[20px] lg:text-3xl font-bold leading-10 text-neutral-25">
                <span>hello@ironlight.ee</span>
                <Svg
                  use="arrow"
                  className="h-8 w-8 hidden transition-opacity group-hover:block"
                />
              </div>
            </div>
            <div className="justify-start text-center text-base font-normal leading-6 text-neutral-25">
              OR
            </div>
            <div className="group flex cursor-pointer items-center justify-center gap-2.5 border-b px-6 py-5 hover:border-b-2 hover:border-secondary-500">
              <div className="flex items-center justify-start gap-3 text-center text-[20px] lg:text-3xl font-bold leading-10 text-neutral-25">
                <span>book a 30-min call</span>
                <Svg
                  use="arrow"
                  className="h-8 w-8 hidden transition-opacity group-hover:block"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 translate-x-[0%] translate-y-[0%] p-4">
            <GlobeCanvas cameraStartSize={3} cameraEndSize={3} position={0} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
