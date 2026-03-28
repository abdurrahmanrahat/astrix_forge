import ProjectCard from "@/app/(with-navbar)/_components/ProjectsSection/ProjectCard";
import EmptyState from "@/components/shared/Ui/Data/EmptyState";
import { getProjectsByCategory } from "@/data/projects";
import { FolderSearch } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const RelatedProjects = ({
  category,
  excludeSlug,
}: {
  category: string;
  excludeSlug: string;
}) => {
  const projects = getProjectsByCategory(category, excludeSlug);

  return (
    <div className="mt-8">
      <SectionHeading title="Related Projects" className="mb-4" />

      {projects.length === 0 ? (
        <EmptyState
          icon={FolderSearch}
          title="Projects Not Found"
          description="There are currently no projects associated with this category. Please explore other categories."
        />
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProjects;
