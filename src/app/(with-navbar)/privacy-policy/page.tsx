import Container from "@/components/shared/Ui/Container";
import PageBanner from "@/components/shared/Ui/PageBanner";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you contact Astrix Forge, book a strategy call, submit a form, or communicate with us directly, we may collect information such as your name, email address, phone number, company details, project requirements, and any other information you choose to share.",
      "We may also collect limited technical information such as browser type, device information, pages visited, and general usage data to improve website performance, security, and user experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information you provide to respond to inquiries, prepare proposals, deliver services, improve our systems, provide support, and communicate with you about relevant project-related matters.",
      "We may also use aggregated or non-identifiable data to understand how visitors use our website and to improve our marketing, service delivery, and internal operations.",
    ],
  },
  {
    title: "How We Protect Your Data",
    content: [
      "We take reasonable technical and organizational measures to protect your information against unauthorized access, misuse, disclosure, or loss. These measures may include secure hosting, access controls, limited internal access, and secure third-party tools.",
      "While we work to protect your information, no online platform or transmission method is completely risk-free. For that reason, we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Sharing of Information",
    content: [
      "We do not sell your personal information. We may share limited information with trusted service providers or tools that help us operate our business, such as hosting providers, analytics platforms, communication tools, CRM platforms, or automation infrastructure, only where necessary to deliver our services or operate our website.",
      "We may also disclose information if required to do so by law, regulation, legal request, or to protect our rights, clients, systems, or operations.",
    ],
  },
  {
    title: "Cookies and Analytics",
    content: [
      "Our website may use cookies, analytics tools, and similar technologies to understand traffic patterns, improve performance, and enhance user experience. These tools may collect non-sensitive usage information such as session behavior, referral sources, and general interaction patterns.",
      "You can usually control cookies through your browser settings, although disabling them may affect certain site functionality.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain personal information only for as long as it is reasonably necessary for business, legal, operational, or contractual purposes. Inquiry and project-related records may be kept for follow-up, support, compliance, and internal reference.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Depending on your location, you may have the right to request access to your personal information, request corrections, ask for deletion, object to certain processing, or request a copy of your data.",
      "To make a request, you can contact us directly using the contact information provided on our website.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites, tools, or services. We are not responsible for the privacy practices, security, or content of those third-party properties.",
    ],
  },
  {
    title: "Policy Updates",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or business operations. Any updates will be posted on this page with the revised effective date.",
    ],
  },
  {
    title: "Contact",
    content: [
      "If you have questions about this Privacy Policy or how your information is handled, please contact Astrix Forge through our contact page or official business email.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        subTitle="Privacy Policy"
        title="How We Handle"
        highlight="Your Information"
        description="Your trust matters to us. This page explains what information Astrix Forge collects, how we use it, and how we protect it while delivering our services."
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="">
              <div className="mb-8 border-b border-muted pb-6">
                <p className="text-sm md:text-base 2xl:text-lg leading-7 text-muted-foreground">
                  Effective date: {new Date().getFullYear()}
                </p>
              </div>

              <div className="space-y-8 md:space-y-10">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="mb-3 text-xl md:text-2xl 2xl:text-3xl font-heading font-semibold text-foreground">
                      {section.title}
                    </h2>

                    <div className="space-y-3">
                      {section.content.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-[13px] md:text-sm xl:text-[15px] 2xl:text-[17px] leading-[26px] text-muted-foreground"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
