export default function WorkContent() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-neutral-900 border-t border-neutral-0">
      <div className="container mx-auto max-w-7xl py-[64px]">
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-32 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch h-[656px] bg-zinc-300" />
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="inline-flex justify-start items-start gap-3">
                <div className="px-4 py-2 outline outline-1 outline-offset-[-1px] outline-secondary-600 flex justify-center items-center gap-2.5">
                  <div className="justify-start text-secondary-600 text-base font-semibold leading-6">E-commerce</div>
                </div>
                <div className="px-4 py-2 outline outline-1 outline-offset-[-1px] outline-secondary-600 flex justify-center items-center gap-2.5">
                  <div className="justify-start text-secondary-600 text-base font-semibold leading-6">Estonia</div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="inline-flex flex-col justify-center items-start">
                  <div className="justify-start text-neutral-25 text-4xl font-bold leading-[48px]">WooCommerce</div>
                  <div className="justify-start text-neutral-400 text-base font-semibold leading-6">Laravel migration</div>
                </div>
                <div className="opacity-90 justify-start text-neutral-25 text-base font-normal  leading-6">Legacy WooCommerce store with 3,000+ SKUs,         broken inventory sync, and no B2B pricing logic.</div>
              </div>
            </div>
            <div className="self-stretch outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-center gap-5">
              <div className="justify-start text-neutral-25 text-lg font-normal  leading-7">What we did</div>
              <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
              <div className="flex justify-start items-center gap-5">
                <div className="p-4 relative flex justify-center items-center gap-2.5">
                  <div className="justify-start text-neutral-25 text-xl font-semibold  leading-6">Rebuilt platform on Laravel</div>
                  <div className="w-0 h-3 left-0 top-[44px] absolute origin-top-left -rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                  <div className="w-3 h-3 left-0 top-0 absolute outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                  <div className="w-0 h-3 left-[287px] top-0 absolute origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                  <div className="w-3 h-3 left-[287px] top-[56px] absolute origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                </div>
                <div className="p-4 relative flex justify-center items-center gap-2.5">
                  <div className="justify-start text-neutral-25 text-xl font-semibold  leading-6">Implemented new inventory system</div>
                  <div className="w-0 h-3 left-0 top-[44px] absolute origin-top-left -rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                  <div className="w-3 h-3 left-0 top-0 absolute outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                  <div className="w-0 h-3 left-[369px] top-0 absolute origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                  <div className="w-3 h-3 left-[369px] top-[56px] absolute origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                </div>
                <div className="p-4 relative flex justify-center items-center gap-2.5">
                  <div className="justify-start text-neutral-25 text-xl font-semibold  leading-6">Built API integration layer</div>
                  <div className="w-0 h-3 left-0 top-[44px] absolute origin-top-left -rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                  <div className="w-3 h-3 left-0 top-0 absolute outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                  <div className="w-0 h-3 left-[272px] top-0 absolute origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                  <div className="w-3 h-3 left-[272px] top-[56px] absolute origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-neutral-25" />
                </div>
              </div>
            </div>
            <div className="self-stretch p-4 bg-secondary-600 inline-flex justify-start items-center gap-2 overflow-hidden">
              <div className="w-6 h-6 relative overflow-hidden">
                <div className="w-6 h-6 left-0 top-0 absolute bg-neutral-900" />
                <div className="w-5 h-5 left-[1.25px] top-[1.25px] absolute bg-neutral-900" />
                <div className="w-2.5 h-2 left-[7px] top-[8.41px] absolute bg-neutral-900" />
              </div>
              <div className="justify-start text-neutral-900 text-xl font-semibold  leading-6">Order processing time reduced by 60%.</div>
            </div>
            <div className="inline-flex justify-start items-start gap-4">
              <div className="justify-start text-neutral-400 text-base font-normal  leading-6">Laravel</div>
              <div className="justify-start text-neutral-400 text-base font-normal  leading-6">WooCommerce</div>
              <div className="justify-start text-neutral-400 text-base font-normal  leading-6">REST API</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
