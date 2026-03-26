import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { Mail, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/home/contact-bg.jpg')",
        }}
      />

      {/* overlays */}
      <div className="absolute inset-0 bg-deep-dark/60" />
      <div className="absolute inset-0 bg-linear-to-br from-deep-dark via-deep-dark/60 to-primary/10" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] xl:gap-16 ">
          {/* Left Content */}
          <div className="max-w-xl pt-2">
            <SectionTitle
              subTitle="Let’s Build"
              title="Start Your Next"
              highlight="Intelligent System"
              className="space-y-2"
            />

            <p className="mt-6 max-w-[550px] text-sm leading-6 text-muted-foreground md:text-base 2xl:text-lg">
              Whether you need AI automation, custom agents, or a modern web
              platform, we design systems that remove bottlenecks, improve
              response times, and help your business scale with less manual
              work.
            </p>

            <div className="mt-10 space-y-5">
              {[
                // {
                //   icon: MapPin,
                //   title: "Location",
                //   value: "Serving clients globally with remote-first delivery",
                // },
                {
                  icon: Phone,
                  title: "Call",
                  value: "+8801778119298",
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "astrixforge7@gmail.com",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-topUpShadow">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-foreground md:text-lg 2xl:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground 2xl:text-[17px]">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
