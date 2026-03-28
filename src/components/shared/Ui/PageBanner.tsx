import Container from "@/components/shared/Ui/Container";
import SectionTitle from "./SectionTitle";

type TPageBannerProps = {
  subTitle: string;
  title: string;
  highlight: string;
  description: string;
};

export default function PageBanner({
  subTitle,
  title,
  highlight,
  description,
}: TPageBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-muted bg-background py-20 md:py-24 2xl:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 right-1/2 md:right-[5%] h-[300px] w-[300px] xl:h-[350px] xl:w-[350px] 2xl:h-[420px] 2xl:w-[420px] -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 50% 50%, color-mix(in srgb, var(--color-secondary) 10%, transparent), transparent)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-[640px]">
          <SectionTitle
            subTitle={subTitle}
            title={title}
            highlight={highlight}
            className="space-y-2"
          />

          <p className="mt-5  text-sm leading-[26px] text-muted-foreground md:text-base 2xl:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
