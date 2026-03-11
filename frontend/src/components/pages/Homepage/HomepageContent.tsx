import Contact from "@/components/pages/Homepage/Contact";
import Conversation from "@/components/pages/Homepage/Conversation";
import Experience from "@/components/pages/Homepage/Experience";
import ParallaxWhoSection from "@/components/pages/Homepage/ParallaxWhoSection";
import CustomerSlider from "@/components/pages/Homepage/CustomerSlider";
import HomepageScrollRevealText from "@/components/pages/Homepage/RevealText";

export default function HomepageContent() {
  return (
    <div className="w-full bg-neutral-900">
      <HomepageScrollRevealText />
      <CustomerSlider />
      <Experience />
      <ParallaxWhoSection />
      <Conversation />
      <Contact />
    </div>
  );
}
