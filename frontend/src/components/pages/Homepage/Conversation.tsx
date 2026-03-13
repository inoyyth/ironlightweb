import Svg from "@/components/shared/Svg";
import GlobeCanvas from "@/components/shared/GlobeCanvas";
import { CONVERSATION } from "@/constants/homepage";

export default function Conversation() {
  return (
    <div className="relative w-full bg-transparent lg:pb-[188px] pb-10 pt-10 overflow-hidden">
      <div className="hidden lg:block relative z-0 top-0 left-0 w-full h-[280px] overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[560px] -translate-y-1/2">
            <GlobeCanvas
              cameraStartSize={4}
              cameraEndSize={4}
              position={0}
              disableScrollEffect
              disableMouseControl
              disableLightning
            />
          </div>
        </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-start gap-2 self-stretch">
          <div className="justify-start self-stretch text-center text-2xl lg:text-3xl font-bold leading-10 text-neutral-25">
            {CONVERSATION.heading}
          </div>
          <div className="justify-start self-stretch text-center text-base font-normal leading-6 text-neutral-25">
            {CONVERSATION.subheading}
          </div>
          <div className="flex mt-6 flex-col lg:flex-row w-full items-center justify-center gap-10">
            <div className="group flex cursor-pointer items-center justify-center gap-2.5 border-b px-6 py-5 hover:border-b-2 hover:border-secondary-500">
              <div className="flex items-center justify-start gap-3 text-center text-[20px] lg:text-3xl font-bold leading-10 text-neutral-25">
                <span>{CONVERSATION.email}</span>
                <Svg
                  use="arrow"
                  className="h-8 w-8 hidden transition-opacity group-hover:block"
                />
              </div>
            </div>
            <div className="justify-start text-center text-base font-normal leading-6 text-neutral-25">
              {CONVERSATION.divider}
            </div>
            <div className="group flex cursor-pointer items-center justify-center gap-2.5 border-b px-6 py-5 hover:border-b-2 hover:border-secondary-500">
              <div className="flex items-center justify-start gap-3 text-center text-[20px] lg:text-3xl font-bold leading-10 text-neutral-25">
                <span>{CONVERSATION.bookCall}</span>
                <Svg
                  use="arrow"
                  className="h-8 w-8 hidden transition-opacity group-hover:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
