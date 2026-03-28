import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const storyStats = [
  { value: "40+", label: "Projects Delivered" },
  { value: "30+", label: "Automations Built" },
  { value: "3+", label: "Years Building" },
  { value: "10+", label: "Industries Served" },
];

export default function OurStory() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
          {/* Left Visual */}
          <div className="gradient-border rounded-lg p-6 md:p-8">
            {/* <div className="mb-5 flex aspect-[1.5] items-center justify-center rounded-2xl border border-muted bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="flex h-[90px] w-[90px] items-center justify-center rounded-[22px] bg-linear-to-br from-primary to-primary text-4xl font-black text-white shadow-topUpShadow md:h-[100px] md:w-[100px] md:text-[42px] 2xl:h-[110px] 2xl:w-[110px] 2xl:text-[46px] font-heading">
                AF
              </div>
            </div> */}
            <div className="mb-4">
              <Image
                src="/images/about/team.jpg"
                alt="team"
                width={500}
                height={400}
                className="rounded-lg w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {storyStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-muted bg-muted p-4"
                >
                  <div className="bg-linear-to-r from-primary to-secondary bg-clip-text text-2xl font-black tracking-tight text-transparent md:text-[28px] 2xl:text-[32px] font-heading">
                    {item.value}
                  </div>
                  <div className=" text-[12px] md:text-sm 2xl:text-base text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center h-full">
            <SectionTitle
              subTitle="Our Story"
              title="We Started With"
              highlight="One Observation"
              className="space-y-2"
            />

            <div className="mt-5 space-y-3">
              <p className="text-[14px] md:text-[15px] 2xl:text-[17px] leading-6 text-muted-foreground">
                Most businesses are trapped in a loop. They hire people to do
                tasks that could run automatically. Those people spend their
                time on work that doesn&apos;t require human judgment — and the
                business can only grow as fast as it can hire.
              </p>

              <p className="text-[14px] md:text-[15px] 2xl:text-[17px] leading-6 text-muted-foreground">
                Astrix Forge was founded to break that loop. We started as a
                small team of engineers and automation specialists in Dhaka,
                Bangladesh — and grew by delivering results that our clients
                could measure in time saved, leads captured, and costs reduced.
              </p>

              <p className="text-[14px] md:text-[15px] 2xl:text-[17px] leading-6 text-muted-foreground">
                Today, we combine three disciplines that most agencies separate:
                AI automation, intelligent agent development, and full stack web
                engineering. That combination is rare — and it&apos;s why our
                clients don&apos;t need to manage multiple vendors to get a
                complete solution.
              </p>

              <p className="text-[14px] md:text-[15px] 2xl:text-[17px] leading-6 text-muted-foreground">
                Every system we build is designed with one question in mind:{" "}
                <em className="text-foreground">
                  what happens when this works for a year without anyone
                  touching it?
                </em>
              </p>
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full shadow-topUpShadow transition-all duration-300 hover:-translate-y-0.5"
                >
                  Work With Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
