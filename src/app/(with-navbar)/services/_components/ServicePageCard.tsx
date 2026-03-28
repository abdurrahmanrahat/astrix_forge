import Container from "@/components/shared/Ui/Container";
import { TService } from "@/types/service.type";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const ServicePageCard = ({
  service,
  index,
}: {
  service: TService;
  index: number;
}) => {
  return (
    <div className={`${index % 2 !== 0 ? "bg-muted" : ""} py-14 md:py-20`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-14 items-center">
          {/* LEFT */}
          <div>
            {/* icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
              <service.icon className="h-6 w-6 text-primary" />
            </div>

            {/* title */}
            <h2 className="mb-4 text-2xl md:text-3xl 2xl:text-4xl font-heading font-bold text-foreground">
              {service.title}
            </h2>

            {/* description */}
            <p className="mb-5 max-w-xl text-sm md:text-base 2xl:text-lg leading-7 text-muted-foreground">
              {service.description}
            </p>

            {/* short highlight */}
            <p className="mb-6 text-sm md:text-[15px] 2xl:text-[17px] font-medium text-primary">
              ✦ {service.shortDescription}
            </p>

            {/* tools */}
            <div className="mb-7 flex flex-wrap gap-2">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-muted bg-muted px-2.5 py-1 text-[10px] xl:text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/services/${service.slug}`}
              className="group inline-flex items-center gap-2 text-sm md:text-[15px] 2xl:text-[16px] font-medium text-primary transition-all duration-300 hover:gap-3"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT (Features Card) */}
          <div className="gradient-border rounded-lg ">
            <div className="bg-muted p-6 md:p-7 rounded-lg">
              <h4 className="mb-5 text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What’s Included
              </h4>

              <ul className="space-y-2 ">
                {service.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-[13px] md:text-sm 2xl:text-[15px] leading-5 text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicePageCard;
