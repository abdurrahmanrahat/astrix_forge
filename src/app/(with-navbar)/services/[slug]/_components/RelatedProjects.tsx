import ProjectCard from "@/app/(with-navbar)/_components/ProjectsSection/ProjectCard";
import Container from "@/components/shared/Ui/Container";
import EmptyState from "@/components/shared/Ui/Data/EmptyState";
import { getProjectsBySlugs } from "@/data/projects";
import { FolderSearch } from "lucide-react";
import HeadingTitle from "./HeadingTitle";

const RelatedProjects = ({
  relatedProjects,
}: {
  relatedProjects: string[];
}) => {
  const projects = getProjectsBySlugs(relatedProjects);
  return (
    <div className="py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <HeadingTitle
            subTitle="Related Projects"
            title="Projects Using"
            highlight="The Service"
            className="flex flex-col justify-center items-center"
          />
        </div>

        {/* data */}
        <div className="mt-8">
          {projects.length === 0 ? (
            <EmptyState
              icon={FolderSearch}
              title="Related Projects Not Found"
              description="There are currently no projects associated with this service. Please explore other services or check back later."
            />
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
              {projects.slice(0, 6).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default RelatedProjects;
