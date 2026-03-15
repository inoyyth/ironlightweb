import Svg from "@/components/shared/Svg"
import { WORK_ITEMS } from "@/constants/work";

export default function MainWorkContent() {
  const item = WORK_ITEMS[0];

  return (
    <section className="min-h-[calc(100vh-64px)] bg-neutral-900">
      <div className="container relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-32 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch h-[335px] lg:h-[656px] bg-zinc-300" />
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="inline-flex justify-start items-start gap-3">
                {item.tags.map((tag) => (
                  <div key={tag} className="px-4 py-2 outline outline-1 outline-offset-[-1px] outline-secondary-600 flex justify-center items-center gap-2.5">
                    <div className="justify-start text-secondary-600 text-sm lg:text-base font-semibold leading-6">{tag}</div>
                  </div>
                ))}
              </div>
              <div className="self-stretch flex lg:inline-flex gap-5 flex-col justify-start lg:flex-row lg:justify-between items-start lg:items-center">
                <div className="inline-flex flex-col justify-center items-start">
                  <div className="justify-start text-neutral-25 text-2xl lg:text-4xl font-bold leading-[48px]">{item.title}</div>
                  <div className="justify-start text-neutral-400 text-base font-semibold leading-6">{item.subtitle}</div>
                </div>
                <div className="flex flex-col">
                  <div className="opacity-90 justify-start text-neutral-25 text-base font-normal leading-6 w-full w-max-full lg:max-w-[360px]">{item.description}</div>
                </div>
              </div>
            </div>
            <div className="self-stretch outline outline-1 outline-offset-[-1px] outline-black flex flex-col lg:flex-row lg:inline-flex justify-start items-center gap-5">
              <div className="inline-flex flex-1 flex-row justify-start items-center gap-5 w-full lg:w-auto">
                <div className="justify-start text-neutral-25 text-base lg:text-lg font-normal leading-7">What we did</div>
                <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
              </div>
              <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-5 w-full lg:w-auto">
                {item.whatWeDid.map((action) => (
                  <div key={action} className="p-4 relative flex justify-start lg:justify-center items-center gap-2.5 w-full">
                    <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white"></span>
                    <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white"></span>
                    <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white"></span>
                    <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white"></span>
                    <span className="text-white text-base lg:text-xl">{action}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="self-stretch p-4 bg-secondary-600 inline-flex justify-start items-center gap-2 overflow-hidden">
              <div className="w-6 h-6 relative overflow-hidden">
                <Svg use="circleCheck" className="w-6 h-6 text-neutral-900" />
              </div>
              <div className="justify-start text-neutral-900 text-base lg:text-xl font-semibold leading-6">{item.result}</div>
            </div>
            <div className="inline-flex justify-start items-start gap-4">
              {item.stack.map((tech) => (
                <div key={tech} className="justify-start text-neutral-400 text-base font-normal leading-6">{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
