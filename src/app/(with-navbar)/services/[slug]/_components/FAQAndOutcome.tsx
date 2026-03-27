import Container from "@/components/shared/Ui/Container";
import { TService } from "@/types/service.type";
import { Check } from "lucide-react";
import FAQs from "./FAQs";
import HeadingTitle from "./HeadingTitle";

const FAQAndOutcome = ({ service }: { service: TService }) => {
  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
          {/* faq */}
          <div>
            <HeadingTitle
              subTitle="FAQs"
              title="Frequently Asked"
              highlight="Questions"
            />

            <FAQs faqs={service.faq} />
          </div>

          {/* outcome */}
          <div className="">
            <HeadingTitle
              subTitle="Results"
              title="Expected"
              highlight="Outcomes"
            />

            <div className="mt-5 space-y-2.5">
              {service.outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 2xl:h-6 2xl:w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5 2xl:h-4.5 2xl:w-4.5" />
                  </span>
                  <span className="text-[13px] md:text-sm xl:text-[15px] 2xl:text-[17px] leading-5 text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQAndOutcome;
