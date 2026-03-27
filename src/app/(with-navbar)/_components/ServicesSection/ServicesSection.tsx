import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* Title */}
        <div className="mb-10 md:mb-14 max-w-2xl mx-auto text-center">
          <SectionTitle
            subTitle="What We Do"
            title="Three Capabilities,"
            highlight="One Integrated Agency"
            className="flex flex-col justify-center items-center"
          />

          <p className="mt-4 text-sm md:text-base 2xl:text-lg text-muted-foreground leading-6">
            We combine AI automation, intelligent agent systems, and full stack
            development to build solutions that actually move your business
            forward.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
