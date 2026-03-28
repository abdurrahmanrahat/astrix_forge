import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import {
  Eye,
  Layers,
  MessageSquare,
  RefreshCcw,
  ShieldCheck,
  Target,
} from "lucide-react";

export const values = [
  {
    title: "Outcome-First Thinking",
    description:
      "We don't ask what can we build. We ask what metric are we improving. Architecture follows the answer, not the other way around.",
    icon: Target,
  },
  {
    title: "Full-Stack Ownership",
    description:
      "From automation design to deployment, one team handles the entire engagement. No handoffs. No vendor blame. Just accountability.",
    icon: Layers,
  },
  {
    title: "Production-Grade Standards",
    description:
      "Everything we build is built for real scale - tested with edge cases and documented for your team to manage independently.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Process",
    description:
      "You'll always know where your project stands. Weekly updates, clear milestones, and honest timelines — not vague progress reports.",
    icon: Eye,
  },
  {
    title: "Long-Term Systems",
    description:
      "We don't build things that need constant babysitting. The goal is always a system that runs reliably long after we've handed it over.",
    icon: RefreshCcw,
  },
  {
    title: "Honest Advice",
    description:
      "If automation won't help your specific situation, we'll tell you. We'd rather lose a project than set you up for a poor return on investment.",
    icon: MessageSquare,
  },
];

export default function OurValues() {
  return (
    <section className="bg-muted py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <SectionTitle
            subTitle="Our Values"
            title="What Makes Us"
            highlight="Different"
          />

          <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base 2xl:text-lg">
            Not promises — principles we&apos;ve built every project around
            since day one.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg gradient-border bg-background p-6 transition-all duration-300  hover:shadow-topUpShadow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>

              <h4 className="mb-2 text-sm font-semibold text-foreground md:text-[15px] 2xl:text-[17px]">
                {item.title}
              </h4>

              <p className="text-[13px] leading-[26px] text-muted-foreground md:text-sm 2xl:text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
