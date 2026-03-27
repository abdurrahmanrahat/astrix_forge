import Container from "@/components/shared/Ui/Container";
import { TService } from "@/types/service.type";
import { Check } from "lucide-react";
import HeadingTitle from "./HeadingTitle";

const ServiceFit = ({ service }: { service: TService }) => {
  return (
    <section className="bg-muted py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-10">
          {/* Who It's For */}
          <div className="">
            <HeadingTitle
              subTitle="Ideal For"
              title="Who This Service"
              highlight="Is For"
            />

            <div className="mt-5 space-y-2.5">
              {service.whoItsFor.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 2xl:h-6 2xl:w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5 2xl:h-4.5 2xl:w-4.5" />
                  </span>
                  <span className="text-[13px] md:text-sm xl:text-[15px] 2xl:text-[17px]leading-6 text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Problems Solved */}
          <div className="">
            <HeadingTitle
              subTitle="Problems Solved"
              title="What This"
              highlight="Solves"
            />

            <div className="mt-5 space-y-2.5">
              {service.problemsSolved.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 2xl:h-6 2xl:w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <Check className="h-3.5 w-3.5 2xl:h-4.5 2xl:w-4.5" />
                  </span>
                  <span className="text-[13px] md:text-sm xl:text-[15px] 2xl:text-[17px] leading-6 text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceFit;
