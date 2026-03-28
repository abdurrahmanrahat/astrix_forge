import Container from "@/components/shared/Ui/Container";
import PageBanner from "@/components/shared/Ui/PageBanner";
import ProjectLists from "./_components/ProjectLists";

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
        <ProjectLists />
      </Container>
    </div>
  );
};

export default ProjectsPage;
