import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";

const toolCategories = [
  {
    title: "AI & Automation",
    tools: [
      "n8n",
      "LangChain",
      "GoHighLevel",
      "Make",
      "OpenAI API",
      "Pinecone",
    ],
  },
  {
    title: "Web Development",
    tools: [
      "Next.js",
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Integrations & Tools",
    tools: [
      "NextAuth",
      "VPS",
      "Cpanel",
      "Vercel",
      "Webhooks",
      //   "bKash API",
      //   "Slack API",
    ],
  },
];

export default function OurTools() {
  return (
    <section className=" py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <SectionTitle
            subTitle="Tech Stack"
            title="Tools We"
            highlight="Build With"
          />

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base 2xl:text-lg">
            Production-tested platforms and frameworks — not sandbox
            experiments.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {toolCategories.map((category) => (
            <div
              key={category.title}
              className="gradient-border rounded-2xl p-5 md:p-6"
            >
              <h5 className="mb-4 text-[12px] font-semibold uppercase tracking-widest text-muted-foreground md:text-sm 2xl:text-base">
                {category.title}
              </h5>

              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-muted bg-muted px-2.5 py-1 xl:px-3 xl:py-2 text-[12px] md:text-[13px] 2xl:text-sm font-medium text-foreground transition-all duration-300 hover:border-secondary/40 hover:text-secondary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
