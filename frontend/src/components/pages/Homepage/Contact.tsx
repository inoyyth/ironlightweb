import Svg from "@/components/shared/Svg";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative inline-flex w-full flex-col items-start justify-start gap-20 self-stretch bg-neutral-25 p-0 lg:p-20">
      <div className="relative container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 w-full lg:flex-row items-end justify-between self-stretch">
          <div className="inline-flex flex-col items-start justify-start gap-4">
            <Image
              alt="ironlight"
              src="/images/logo_ironlight_1.png"
              width={158}
              height={52}
            />
            <div className="justify-start text-base font-semibold leading-6 text-neutral-900">
              We build and stabilise the systems businesses run on.
            </div>
            <div className="inline-flex items-start justify-start gap-1">
              <div className="flex justify-start gap-1 text-base font-normal leading-6 text-neutral-900">
                <Svg use="email" className="h-6 w-6" />
                hello@ironlight.ee
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-6">
            <div className="w-full lg:w-[519px] justify-start text-base font-normal leading-6 text-neutral-900">
              A senior-led team. Clearly scoped engagements. Practical decisions
              over meetings. We build systems that stay built.
            </div>
            <div className="inline-flex items-start justify-start gap-8">
              <Svg use="linkedin" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
