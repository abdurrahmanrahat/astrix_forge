import PageBanner from "@/components/shared/Ui/PageBanner";
import OurStory from "./_components/OurStory";

const AboutPage = () => {
  return (
    <div>
      <PageBanner
        subTitle="Who We Are"
        title="An Agency Built Around"
        highlight="Outcomes, Not Deliverables"
        description="Astrix Forge was founded on a simple belief: your business should run like a system, not depend on a person being available."
      />
      <OurStory />
    </div>
  );
};

export default AboutPage;
