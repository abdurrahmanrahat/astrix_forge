import Container from "@/components/shared/Ui/Container";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroBanner() {
  const stats = [
    { value: "40+", label: "Projects Delivered" },
    { value: "30+", label: "Automations Built" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const metrics = [
    {
      label: "Leads Handled",
      value: "4.2K",
      tag: "↑ 41% MoM",
      tagClass: "text-emerald-400",
    },
    {
      label: "Hours Saved",
      value: "860h",
      tag: "Automated",
      tagClass: "text-secondary",
    },
    {
      label: "Support Rate",
      value: "82%",
      tag: "AI resolved",
      tagClass: "text-emerald-400",
    },
    {
      label: "Cost Reduction",
      value: "-61%",
      tag: "Ops overhead",
      tagClass: "text-primary",
    },
  ];

  const coverageBars = [
    { label: "Automation Coverage", value: 88 },
    { label: "Response Accuracy", value: 94 },
  ];

  const workflow = ["Trigger", "AI Agent", "n8n", "CRM"];

  return (
    <section className="relative overflow-hidden bg-background py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-[10%] -right-[5%] h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-secondary) 12%, transparent), transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-[10%] left-[5%] h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-primary) 12%, transparent), transparent 70%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          }}
        />
      </div>

      <Container>
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:gap-20">
          <div className="max-w-2xl ">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-muted bg-background mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                Your AI + Automation Partner
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold text-foreground leading-[1.1] mb-5">
              Build AI Systems That{" "}
              <span className="text-gradient">Automate</span> Your Business
            </h1>

            <p className="text-muted-foreground mb-8 max-w-xl text-base leading-7 sm:text-[17px] 2xl:text-lg">
              Astrix Forge is an AI automation agency that replaces manual
              workflows with intelligent systems — so your business scales
              without scaling your team.
            </p>

            <div className="mb-9 flex flex-wrap gap-3">
              <Link href="/projects">
                <Button
                  className="rounded-full shadow-topUpShadow transition-all duration-300 hover:-translate-y-0.5"
                  variant="default"
                  size="lg"
                >
                  View Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full hover:-translate-y-0.5"
                >
                  Book a Call
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-8 border-t border-muted pt-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-black tracking-tight text-white">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="rounded-[22px] border border-muted bg-background/80 p-6 shadow-cardLightShadow backdrop-blur-xl dark:shadow-cardDarkShadow">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
                  ● Systems Live
                </span>
              </div>

              <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-muted bg-muted p-4"
                  >
                    <div className="text-muted-foreground mb-0.5 text-[11px] 2xl:text-[13px]">
                      {item.label}
                    </div>
                    <div className="text-2xl 2xl:text-[28px] font-black tracking-tight text-white">
                      {item.value}
                    </div>
                    <div
                      className={`text-[11px] xl:text-[13px] ${item.tagClass}`}
                    >
                      {item.tag}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-4 space-y-3">
                {coverageBars.map((bar, index) => (
                  <div key={bar.label}>
                    <div className="text-muted-foreground mb-1.5 flex items-center justify-between text-[11px] xl:text-[13px]">
                      <span>{bar.label}</span>
                      <span>{bar.value}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-primary to-secondary transition-all duration-1000"
                        style={{
                          width: `${bar.value}%`,
                          transitionDelay: `${index * 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {workflow.map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-2 rounded-lg border border-muted bg-muted px-3 py-1.5 text-[11px] xl:text-[13px] font-semibold text-gray-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      {step}
                    </div>
                    {index < workflow.length - 1 && (
                      <span className="text-xs 2xl:text-sm text-gray-500">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-3 -top-4 rounded-2xl border border-muted bg-background px-4 py-3 shadow-topUpShadow backdrop-[4px]">
              <div className="text-muted-foreground mb-1 text-[10px] 2xl:text-[12px] tracking-[0.3px]">
                Daily Automations
              </div>
              <div className="text-lg 2xl:text-[20px] font-black text-white">
                1.8K
              </div>
              <div className="mt-0.5 text-[11px] 2xl:text-[13px] text-emerald-400">
                ↑ Running 24/7
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 rounded-2xl border border-muted bg-background px-4 py-3 shadow-topUpShadow backdrop-[4px]">
              <div className="text-muted-foreground mb-1 text-[10px] 2xl:text-[12px] tracking-[0.3px]">
                Avg. Response Time
              </div>
              <div className="text-lg 2xl:text-[20px] font-black text-white">
                &lt; 90s
              </div>
              <div className="mt-0.5 text-[11px] 2xl:text-[13px] text-secondary">
                ↑ vs 6h manual
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
