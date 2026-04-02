const techStack = [
  "n8n",
  "GoHighLevel",
  "LangChain",
  "Automated Workflows",
  "Zapier",
  "Retell Ai",
  "ElevenLabs",
  "LLM Workflows",
  "AI Agent Development",
  "Website Development",
  "MERN Stack",
  "Next.js",
];

export default function TeachMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <section className="relative overflow-hidden border-y border-muted bg-muted py-5">
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          {items.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="flex items-center gap-2 px-6 text-[13px] xl:text-sm 2xl:text-base font-semibold text-muted-foreground whitespace-nowrap"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-primary opacity-90" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
