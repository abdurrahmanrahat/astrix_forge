import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Clock, Target, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const outcomes = [
  {
    icon: Clock,
    title: "Recover 20–40 Hours Per Week",
    description:
      "Automation handles what takes your team hours. Those hours go back to growth, strategy, and creative work.",
  },
  {
    icon: Target,
    title: "Never Miss a Lead Again",
    description:
      "Our AI systems respond to inbound leads in under 90 seconds - qualifying, tagging, and booking calls while your team sleeps.",
  },
  {
    icon: TrendingUp,
    title: "Scale Support Without Scaling Headcount",
    description:
      "Intelligent agents handle 80%+ of routine support queries, escalating to humans only when it truly matters.",
  },
  {
    icon: Zap,
    title: "Ship Digital Products That Perform",
    description:
      "From idea to production-grade web application - built for scale, speed, and real business use from day one.",
  },
];

const metrics = [
  {
    name: "Manual work hours eliminated per week",
    value: "↓ 70%",
  },
  {
    name: "Lead response time (was 4–12h)",
    value: "Under 90 seconds",
  },
  {
    name: "Support queries resolved without human input",
    value: "↑ 82%",
  },
  {
    name: "Operational overhead reduction",
    value: "↓ 40–65%",
  },
  {
    name: "Web app delivery from kickoff to production",
    value: "2–6 weeks",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-muted py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 xl:gap-14">
          <div className="max-w-xl">
            <SectionTitle
              subTitle="Why Clients Choose Us"
              title="Your Business Runs,"
              highlight="You Move Forward"
            />

            <p className="mt-5 mb-8 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
              The right systems don't just cut costs - they compound results,
              close bottlenecks, and free your people for what machines
              genuinely can't do.
            </p>

            <Link href="/services">
              <Button
                size="lg"
                className="rounded-full shadow-topUpShadow transition-all duration-300 hover:-translate-y-0.5"
              >
                See All Services
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {outcomes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative flex items-start gap-3.5 rounded-xl gradient-border bg-background p-4 md:p-5 transition-all duration-300 hover:shadow-topUpShadow"
                >
                  {/* subtle gradient glow layer */}
                  {/* <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-r from-primary/5 via-transparent to-secondary/5" /> */}

                  {/* icon */}
                  <div className="relative z-10 flex h-11 w-11 min-w-11 items-center justify-center rounded-xl border border-primary/10 bg-primary/10 text-lg transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* content */}
                  <div className="relative z-10">
                    <h4 className="mb-0.5 text-sm md:text-[15px] 2xl:text-[17px] font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-[13px] md:text-sm 2xl:text-[15px] leading-[22px] text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="gradient-border mt-12 md:mt-14 rounded-xl bg-background p-6  md:p-8">
            <div className="mb-5 text-sm 2xl:text-base font-bold uppercase tracking-[0.18em] text-foreground">
              Average Results Across Client Engagements
            </div>

            <div className="space-y-0">
              {metrics.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex flex-col gap-2 py-3 md:flex-row md:items-center md:justify-between ${
                    index !== metrics.length - 1 ? "border-b border-muted" : ""
                  }`}
                >
                  <span className="text-sm 2xl:text-base text-muted-foreground">
                    {item.name}
                  </span>
                  <span className="text-sm 2xl:text-base font-extrabold text-primary">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
