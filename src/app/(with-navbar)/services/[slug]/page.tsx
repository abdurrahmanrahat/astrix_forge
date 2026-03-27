import { DataNotFound } from "@/components/shared/Ui/Data/DataNotFound";
import DetailsPageBanner from "@/components/shared/Ui/DetailsPageBanner";
import { getServiceBySlug } from "@/data/services";

const ServiceDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;
  const slug = params?.slug;

  const service = getServiceBySlug(slug);

  return (
    <div>
      {service ? (
        <div>
          <DetailsPageBanner
            title={service.title}
            // highlight=""
            description={service.shortDescription}
          />
        </div>
      ) : (
        <DataNotFound
          title="Service Not Found"
          description={`The service you are looking for with the slug ${slug} may have been removed or does not exist.`}
          buttonText="Browse All services"
          buttonLink="/services"
        />
      )}
    </div>
  );
};

export default ServiceDetailsPage;
