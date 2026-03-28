import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { FlaskConical, Map, Rocket, Search, Settings } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We audit your operations, identify bottlenecks, and map the highest-ROI opportunities for automation and development.",
  },
  {
    number: "02",
    icon: Map,
    title: "Strategy & Architecture",
    description:
      "Before a single line of code, we design the full solution- workflow diagrams, system architecture and tech decisions- for your approval.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Build & Integrate",
    description:
      "We build and connect everything with real tools, data, & clean architecture. Weekly progress updates keep you in the loop.",
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Test & Harden",
    description:
      "Edge cases, failure modes, and stress testing — we make sure the system performs reliably before it touches your real operations.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Optimize",
    description:
      "Go live with documentation, monitoring, and a dedicated support window. We stay until the results confirm the system works.",
  },
];

export default function OurProcess() {
  return (
    <section className=" py-14 md:py-20">
      <Container>
        {/* Title */}
        <div className="mb-10 md:mb-14 max-w-xl mx-auto text-center">
          <SectionTitle
            subTitle="Our Process"
            title="From Discovery to"
            highlight="Deployed System"
            className="flex flex-col justify-center items-center"
          />

          <p className="mt-4 text-sm md:text-base 2xl:text-lg text-muted-foreground leading-6">
            A structured, transparent engagement model that eliminates guesswork
            and delivers outcomes on time.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-[280px] mx-auto sm:max-w-full ">
          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-5">
            {processSteps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="gradient-border group relative rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-topUpShadow"
                  style={{
                    transitionDelay: `${i * 0.07}s`,
                  }}
                >
                  <div className="p-4 md:p-4 rounded-lg bg-muted">
                    {/* background number */}
                    <div className="pointer-events-none absolute top-2 right-3 text-[40px] xl:text-[52px] 2xl:text-[64px] font-heading font-black text-white/5 leading-none">
                      {step.number}
                    </div>

                    {/* icon */}
                    <div className="relative z-10 mb-2 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* content */}
                    <div className="relative z-10">
                      <h3 className="mb-1 text-sm md:text-base 2xl:text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>

                      <p className="text-[13px] md:text-sm 2xl:text-[15px] leading-[22px] text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
