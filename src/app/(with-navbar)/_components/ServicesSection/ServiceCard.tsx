import { TService } from "@/types/service.type";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ service }: { service: TService }) {
  const Icon = service.icon;

  return (
    <div className="gradient-border group h-full rounded-lg transition-all duration-300 hover:shadow-topUpShadow ">
      <div className="flex flex-col py-8 p-5 md:px-6 rounded-lg bg-muted">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-linear-to-br from-primary/10 to-secondary/10 transition-all duration-300 group-hover:border-primary/30 group-hover:from-primary/15 group-hover:to-secondary/15">
          <Icon className="h-5 w-5 text-primary" />
        </div>

        <h3 className="mb-2 text-lg md:text-xl 2xl:text-2xl font-heading font-semibold text-foreground">
          {service.title}
        </h3>

        <p className="mb-5 flex-1 text-[13px] md:text-sm 2xl:text-[15px] leading-6 text-muted-foreground">
          {service.shortDescription}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {service.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="rounded-lg border border-muted bg-muted px-2.5 py-1 text-[10px] xl:text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm 2xl:text-[15px] font-medium text-primary transition-all duration-300 group-hover:gap-3"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
