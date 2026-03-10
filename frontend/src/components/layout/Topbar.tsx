import Image from "next/image";
import Svg from "../ui/Svg";

export default function Topbar() {
  return (
    <header className="flex h-16 shrink-0 items-center bg-neutral-900">
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
          <span className="text-neutral-25 px-9 py-3 text-base">Work</span>
          <span className="text-neutral-25 px-9 py-3 text-base">Services</span>
          <span className="text-neutral-25 px-9 py-3 text-base">About</span>
        </nav>
        <div>
          <div className="inline-flex items-center justify-end gap-2">
            <div className="flex h-11 items-center justify-center rounded">
              <div className="border-neutral-25 inline-flex flex-col items-center justify-center gap-2.5 self-stretch border-r bg-gradient-to-l from-white/20 to-white/0 px-5">
                <div className="text-neutral-25 justify-start font-['Inter'] text-sm font-semibold leading-5">
                  EN
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-2.5 self-stretch px-5">
                <div className="text-neutral-25 justify-start font-['Inter'] text-sm font-semibold leading-5">
                  ET
                </div>
              </div>
            </div>
            <div className="outline-neutral-25 flex h-11 items-center justify-center gap-2 rounded bg-neutral-900 px-4 outline outline-1 outline-offset-[-1px]">
              <div className="relative h-6 w-6 overflow-hidden">
                <Svg name="arrow" />
              </div>
              <div className="text-neutral-25 justify-start font-['Inter'] text-sm font-semibold leading-5">
                Let’s Work Together
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
