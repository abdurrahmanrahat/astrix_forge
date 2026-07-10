import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    value: "40+",
    label: "Projects Delivered",
  },
  {
    value: "30+",
    label: "Automation Systems",
  },
  {
    value: "3+",
    label: "Years Building",
  },
];

export default function FounderSection() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <SectionTitle
            subTitle="Behind Astrix Forge"
            title="Meet the"
            highlight="Founder"
          />

          <p className="mt-4 max-w-2xl 2xl:max-w-[750px] text-sm leading-7 text-muted-foreground md:text-base 2xl:text-lg">
            Every solution at Astrix Forge is personally designed and engineered
            by me, combining AI automation with modern development to build
            systems that drive business growth.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[430px_1fr]">
          {/* Image */}
          <div className="gradient-border rounded-xl p-[1px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
              <Image
                src="/images/about/team/rahman.jpg"
                alt="Rahat - Founder of Astrix Forge"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              Full-Stack Developer • AI Automation Engineer
            </span>

            <h3 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
              Hi, I'm <span className="text-primary">Abdur Rahman.</span>
            </h3>

            <div className="mt-6 space-y-3 text-muted-foreground leading-7">
              <p>
                I founded <span className="text-white">Astrix Forge</span> with
                simple belief:
                <span className="text-white">
                  {" "}
                  businesses should run on systems, not manual work.
                </span>
              </p>

              <p>
                My expertise combines modern full-stack development with AI
                automation, helping businesses replace repetitive tasks,
                streamline operations, and build scalable digital products that
                continue creating value long after launch.
              </p>

              <p>
                Whether it's an AI customer support agent, CRM automation,
                workflow integrations, or a production-grade web platform, I
                personally oversee every project from strategy to deployment.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-muted/20 p-5"
                >
                  <h4 className="text-3xl font-bold text-primary">
                    {item.value}
                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-10 border-l-2 border-primary pl-5 italic text-lg text-white">
              "Technology should remove complexity, not create more of it."
            </blockquote>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-white transition-all hover:opacity-90"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/abdurrahmanrahat47/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-white transition hover:border-primary"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Link>

              <Link
                href="https://github.com/abdurrahmanrahat"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-white transition hover:border-primary"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
