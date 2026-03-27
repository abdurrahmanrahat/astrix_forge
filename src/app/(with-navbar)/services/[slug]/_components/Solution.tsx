import Container from "@/components/shared/Ui/Container";
import { TService } from "@/types/service.type";
import HeadingTitle from "./HeadingTitle";

const Solution = ({ service }: { service: TService }) => {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <HeadingTitle
            subTitle="The Solution"
            title="How We Deliver"
            highlight="Results"
            className="flex flex-col justify-center items-center"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {service.solutionBreakdown.map((item, i) => (
            <div
              key={i}
              className="gradient-border group relative h-full rounded-lg p-4 md:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-topUpShadow"
            >
              <div className="mb-1 text-2xl md:text-[28px] 2xl:text-[32px] font-heading font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                {String(i + 1).padStart(2, "0")}
              </div>

              <p className="text-[13px] md:text-sm 2xl:text-[15px] leading-6 text-muted-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Solution;
