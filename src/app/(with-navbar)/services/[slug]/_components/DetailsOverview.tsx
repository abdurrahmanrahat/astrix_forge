import Container from "@/components/shared/Ui/Container";
import { Button } from "@/components/ui/button";
import { TService } from "@/types/service.type";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const DetailsOverview = ({ service }: { service: TService }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.30fr_0.70fr] xl:gap-14 py-14 md:py-20">
        {/* Main content */}
        <div className="">
          <div>
            {/* icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-primary/20 bg-linear-to-br from-primary/10 to-secondary/10">
              <service.icon className="h-7 w-7 text-primary" />
            </div>

            {/* description */}
            <p className="mb-8 max-w-3xl text-base leading-[30px] text-muted-foreground md:text-lg 2xl:text-[20px]">
              {service.description}
            </p>

            {/* included */}
            <div className="gradient-border rounded-lg p-6 md:p-8">
              <h3 className="mb-6 text-lg font-heading font-semibold text-foreground md:text-xl 2xl:text-2xl">
                What’s Included
              </h3>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 leading-5 text-muted-foreground text-[13px] md:text-sm xl:text-[15px] 2xl:text-[17px]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 2xl:h-6 2xl:w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5 2xl:h-4.5 2xl:w-4.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="gradient-border rounded-lg p-6 md:p-7">
            <h4 className="mb-4 text-sm font-semibold text-foreground md:text-base 2xl:text-lg">
              Technologies
            </h4>

            <div className="mb-6 flex flex-wrap gap-2">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-muted bg-muted px-2.5 py-1 text-[10px] xl:text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>

            <Link href="/contact" className="group">
              <Button
                className="w-full rounded-full shadow-topUpShadow transition-all duration-300 hover:-translate-y-0.5"
                variant="default"
                size="lg"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailsOverview;
