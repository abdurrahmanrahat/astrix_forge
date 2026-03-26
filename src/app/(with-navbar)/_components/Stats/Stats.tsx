import Container from "@/components/shared/Ui/Container";

const stats = [
  { value: "40+", label: "Projects Completed" },
  { value: "30+", label: "Workflow Automations" },
  { value: "15+", label: "Web Apps Launched" },
  { value: "10+", label: "AI Agents Deployed" },
  { value: "98%", label: "Client Retention Rate" },
];

export default function Stats() {
  return (
    <section className="bg-background py-12 md:py-14">
      <Container>
        <div className="flex flex-wrap items-center justify-center xl:justify-between gap-6 xl:gap-10">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl 2xl:text-5xl font-black tracking-tight bg-linear-to-br from-primary to-secondary bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="text-muted-foreground mt-1 text-xs md:text-sm 2xl:text-base">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
