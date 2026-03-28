import PageBanner from "@/components/shared/Ui/PageBanner";
import { ContactSection } from "../_components/ContactSection/ContactSection";
import Schedule from "./_components/Schedule";

const ContactPage = () => {
  return (
    <div>
      <PageBanner
        subTitle="Contact Us"
        title="Let's Talk About"
        highlight="What You Need"
        description="Tell us your challenge. We'll respond within 24 hours with honest insight and a clear path forward - no sales pitch."
      />
      <Schedule />
      <ContactSection />
    </div>
  );
};

export default ContactPage;
