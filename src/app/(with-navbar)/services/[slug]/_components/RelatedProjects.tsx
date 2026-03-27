import EmptyState from "@/components/shared/Ui/Data/EmptyState";
import { FolderSearch } from "lucide-react";
import HeadingTitle from "./HeadingTitle";

const RelatedProjects = ({
  relatedProjects,
}: {
  relatedProjects: string[];
}) => {
  return (
    <div className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <HeadingTitle
          subTitle="Related Projects"
          title="Projects Using"
          highlight="The Service"
          className="flex flex-col justify-center items-center"
        />
      </div>

      {/* data */}
      <EmptyState
        icon={FolderSearch}
        title="Related Projects Not Found"
        description="There are currently no projects associated with this service. Please explore other services or check back later."
      />
    </div>
  );
};

export default RelatedProjects;
