import CustomerSlider from "./CustomerSlider";
import Experience from "./Experience";

export default function HomepageContent() {
  return (
    <div className="w-full bg-neutral-900 pt-10">
      <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-neutral-25 text-center text-5xl font-bold">
          We design and build systems that didn't exist. <br />
          We rebuild systems that matter. <br />
          We integrate things that were never meant to fit. We take over live
          systems and make them stable
        </div>
      </div>
      <CustomerSlider />
      <Experience />
    </div>
  );
}
