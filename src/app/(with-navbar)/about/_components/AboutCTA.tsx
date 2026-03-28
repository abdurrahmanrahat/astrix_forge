import Container from "@/components/shared/Ui/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <div className="gradient-border rounded-[22px] text-center">
          <div className="px-6 py-10 md:px-10 md:py-14 rounded-[22px] bg-muted">
            <div className="mx-auto max-w-3xl ">
              <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-heading font-bold text-foreground leading-[1.1] tracking-tight">
                Ready to Work With
                <br />
                <span className="bg-linear-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  Our Team?
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base 2xl:text-lg">
                One strategy call is all it takes to map out exactly what we’d
                build for your business.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full shadow-topUpShadow transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Book a Strategy Call
                  </Button>
                </Link>

                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full hover:-translate-y-0.5"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
