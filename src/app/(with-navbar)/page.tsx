import { ContactSection } from "./_components/ContactSection/ContactSection";
import HeroBanner from "./_components/HeroBanner/HeroBanner";
import Stats from "./_components/Stats/Stats";
import TeachMarquee from "./_components/TeachMarquee/TeachMarquee";
import WhyChooseUs from "./_components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      <TeachMarquee />
      <Stats />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}
