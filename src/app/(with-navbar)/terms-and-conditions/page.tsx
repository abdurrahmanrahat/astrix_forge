import Container from "@/components/shared/Ui/Container";
import PageBanner from "@/components/shared/Ui/PageBanner";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing this website or engaging Astrix Forge for services, you agree to these Terms & Conditions. If you do not agree with these terms, you should not use our website or services.",
    ],
  },
  {
    title: "Our Services",
    content: [
      "Astrix Forge provides services such as AI automation systems, AI agents, website development, system integrations, and related digital consulting. The exact scope of any engagement will be defined separately in a proposal, agreement, statement of work, invoice, or written communication.",
    ],
  },
  {
    title: "Client Responsibilities",
    content: [
      "To deliver services effectively, clients may need to provide timely access to systems, accounts, project requirements, feedback, assets, credentials, or approvals. Delays in these may affect timelines, deliverables, and performance outcomes.",
      "Clients are responsible for ensuring that materials, data, credentials, and instructions they provide can legally be used for the project.",
    ],
  },
  {
    title: "Proposals, Scope, and Revisions",
    content: [
      "Any timelines, deliverables, features, and pricing are based on the agreed scope at the time of proposal or contract. Any new requests, additions, or major changes may require revised timelines, additional fees, or a separate agreement.",
      "Unless otherwise agreed in writing, work outside the approved scope is not included in the original project terms.",
    ],
  },
  {
    title: "Payments",
    content: [
      "Project fees, deposits, milestones, and payment terms will be defined in the relevant proposal, invoice, or agreement. Payments are due according to the agreed schedule.",
      "Late payments may delay work, pause delivery, or affect support availability until outstanding balances are resolved.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "Unless otherwise agreed in writing, clients receive rights to the final approved deliverables once all applicable payments have been made in full.",
      "Astrix Forge retains the right to use general knowledge, non-confidential know-how, methods, frameworks, internal tooling, and reusable processes developed or used during the project.",
    ],
  },
  {
    title: "Third-Party Platforms and Tools",
    content: [
      "Many projects rely on third-party platforms, APIs, cloud services, payment providers, hosting providers, automation tools, and software libraries. While we aim to build reliable systems, we are not responsible for outages, policy changes, pricing changes, limitations, or failures caused by third-party services.",
    ],
  },
  {
    title: "Results and Performance",
    content: [
      "We build systems intended to improve efficiency, reduce manual work, and support growth. However, we do not guarantee a specific business outcome, revenue target, conversion rate, ranking position, or operational result unless explicitly stated in writing.",
      "Performance depends on factors such as client operations, market conditions, data quality, team responsiveness, implementation decisions, and ongoing usage.",
    ],
  },
  {
    title: "Confidentiality",
    content: [
      "We treat client information, project materials, and business details as confidential and expect the same in return for any proprietary methods, systems, documentation, or materials we provide. More specific confidentiality obligations may be defined in separate agreements when required.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, Astrix Forge is not liable for indirect, incidental, special, or consequential damages, including loss of profits, loss of business, data loss, or operational interruption arising from the use of our website, services, or deliverables.",
      "Our total liability for any claim relating to a project or service shall not exceed the amount paid by the client for the specific service giving rise to the claim, unless otherwise required by law or agreed in writing.",
    ],
  },
  {
    title: "Termination",
    content: [
      "Either party may terminate a project or engagement according to the terms set out in the applicable agreement. Any completed work, outstanding fees, or non-cancellable third-party costs up to the date of termination remain payable.",
    ],
  },
  {
    title: "Website Use",
    content: [
      "You agree not to misuse our website, attempt unauthorized access, interfere with site performance, distribute malicious content, or use our content or branding in a misleading or unlawful way.",
    ],
  },
  {
    title: "Changes to These Terms",
    content: [
      "We may update these Terms & Conditions from time to time. Continued use of our website or services after updates are posted indicates acceptance of the revised terms.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For questions regarding these Terms & Conditions, please contact Astrix Forge through our official contact page or business email.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageBanner
        subTitle="Terms & Conditions"
        title="The Terms That"
        highlight="Guide Our Work"
        description="These terms outline how Astrix Forge provides services, how projects are handled, and the expectations that help both sides work clearly and confidently."
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
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
