import PageBanner from "@/components/shared/Ui/PageBanner";
import { services } from "@/data/services";
import ServicePageCard from "./_components/ServicePageCard";

const ServicesPage = () => {
  return (
    <div>
      <PageBanner
        subTitle="Our Services"
        title="Solutions Built to"
        highlight="Scale Your Business"
        description="From AI automation systems to custom-built applications, we design and deploy solutions that eliminate manual work, improve efficiency, and drive real business growth."
      />

      <div className="w-full md:w-[560px] mx-auto xl:w-full">
        <div className="">
          {services.map((service, index) => (
            <ServicePageCard
              key={service.slug}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
