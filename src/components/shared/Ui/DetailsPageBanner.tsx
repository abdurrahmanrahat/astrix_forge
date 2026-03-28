import Container from "@/components/shared/Ui/Container";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type TDetailsPageBannerProps = {
  title: string;
  highlight?: string;
  description: string;
  backPage: string;
  backPageUrl: string;
};

export default function DetailsPageBanner({
  title,
  highlight,
  description,
  backPage,
  backPageUrl,
}: TDetailsPageBannerProps) {
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
        <div className="max-w-[600px] 2xl:max-w-[650px]">
          <div className={cn("space-y-2")}>
            <Link
              href={backPageUrl}
              className="inline-flex items-center gap-2 text-[11px] 2xl:text-sm font-semibold uppercase tracking-[0.15em] text-primary hover:text-primary/80 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {backPage}
            </Link>

            {/* <div className="my-2 flex h-12 xl:h-14 w-12 xl:w-14 items-center justify-center rounded-lg border border-primary/20  bg-primary/10  transition-all duration-300 group-hover:border-primary/30">
              <Icon className="h-5 w-5 xl:h-6 xl:w-6 text-primary" />
            </div> */}

            <h2 className="text-[28px] md:text-4xl xl:text-5xl 2xl:text-[54px] font-heading font-bold text-foreground leading-[1.1] tracking-tight">
              {title}{" "}
              {highlight && (
                <span className="bg-linear-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  {highlight}
                </span>
              )}
            </h2>
          </div>

          <p className="mt-5  text-sm leading-[26px] text-muted-foreground md:text-base 2xl:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
