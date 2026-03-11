import Image from "next/image";
import Svg from "../shared/Svg";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center bg-neutral-900">
      <div className="container mx-auto flex max-w-7xl items-center justify-between bg-neutral-950 px-4 py-6 sm:px-6 lg:px-8">
        <span className="text-lg font-semibold text-gray-800">
          <Image
            src="/images/logo.png"
            alt="App Logo"
            width={145}
            height={40}
          />
        </span>
        <nav className="flex items-center">
          <span className="px-9 py-3 text-base text-neutral-25">Work</span>
          <span className="px-9 py-3 text-base text-neutral-25">Services</span>
          <span className="px-9 py-3 text-base text-neutral-25">About</span>
        </nav>
        <div>
          <div className="inline-flex items-center justify-end gap-2">
            <div className="flex h-11 items-center justify-center rounded">
              <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 self-stretch border-r border-neutral-25 bg-gradient-to-l from-white/20 to-white/0 px-5">
                <div className="justify-start font-['Inter'] text-sm font-semibold leading-5 text-neutral-25">
                  EN
                </div>
              </div>
              <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 self-stretch px-5 hover:bg-gradient-to-l hover:from-white/20 hover:to-white/0">
                <div className="justify-start font-['Inter'] text-sm font-semibold leading-5 text-neutral-25">
                  ET
                </div>
              </div>
            </div>
            <div className="group flex h-11 cursor-pointer items-center justify-center gap-2 rounded bg-neutral-900 px-4 outline outline-1 outline-offset-[-1px] outline-neutral-25 hover:bg-neutral-25">
              <div className="relative h-6 w-6 overflow-hidden">
                <Svg
                  use="arrow"
                  className="h-6 w-6 text-neutral-25 group-hover:text-neutral-900"
                />
              </div>
              <div className="cursor-pointer justify-start text-sm font-semibold leading-5 text-neutral-25 group-hover:bg-neutral-25 group-hover:text-neutral-900">
                Let’s Work Together
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
