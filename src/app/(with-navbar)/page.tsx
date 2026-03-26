import HeroBanner from "./_components/HeroBanner/HeroBanner";
import Stats from "./_components/Stats/Stats";
import TeachMarquee from "./_components/TeachMarquee/TeachMarquee";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      <TeachMarquee />
      <Stats />
    </div>
  );
}
