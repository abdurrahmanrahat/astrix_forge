import Container from "@/components/shared/Ui/Container";
import PageBanner from "@/components/shared/Ui/PageBanner";
import { projects } from "@/data/projects";
import ProjectCard from "../_components/ProjectsSection/ProjectCard";

const ProjectsPage = () => {
  return (
    <div>
      <PageBanner
        subTitle="Our Work"
        title="Work That"
        highlight="Speaks for Itself"
        description="Automation systems, AI agents, and web applications - each built around a real business problem and a measurable outcome."
      />

      <Container>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
          <div className="py-14 md:py-20 space-y-14 2xl:space-y-20">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsPage;
