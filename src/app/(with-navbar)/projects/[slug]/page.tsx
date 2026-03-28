import Container from "@/components/shared/Ui/Container";
import { DataNotFound } from "@/components/shared/Ui/Data/DataNotFound";
import DetailsPageBanner from "@/components/shared/Ui/DetailsPageBanner";
import { getProjectBySlug } from "@/data/projects";
import ProjectChallenge from "./_components/ProjectChallenge";
import ProjectCover from "./_components/ProjectCover";
import ProjectFeatures from "./_components/ProjectFeatures";
import ProjectImpact from "./_components/ProjectImpact";
import ProjectSidebar from "./_components/ProjectSidebar";
import ProjectSolution from "./_components/ProjectSolution";
import ProjectVideoDemo from "./_components/ProjectVideoDemo";

const ProjectDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;
  const slug = params?.slug;

  const project = getProjectBySlug(slug);

  return (
    <div>
      {project ? (
        <div>
          <DetailsPageBanner
            title={project.title}
            // highlight=""
            description={project.summary}
            backPage="Projects"
            backPageUrl="/projects"
          />

          <section className="py-14 md:py-20">
            <Container>
              {/* Cover */}
              <ProjectCover
                thumbnail={project.thumbnail}
                title={project.title}
              />

              {/* Body */}
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] xl:gap-14 mt-10 xl:mt-14">
                {/* Main */}
                <div>
                  {/* Demo */}
                  {project?.videoUrl && (
                    <ProjectVideoDemo videoUrl={project?.videoUrl} />
                  )}

                  {/* Challenge */}
                  <ProjectChallenge challenge={project.challenge} />

                  {/* Solution */}
                  <ProjectSolution solution={project.solution} />

                  {/* Features */}
                  <ProjectFeatures features={project.features} />

                  {/* Result */}
                  <ProjectImpact result={project.result} />
                </div>

                {/* Sidebar */}
                <div>
                  <ProjectSidebar project={project} />
                </div>
              </div>
            </Container>
          </section>
        </div>
      ) : (
        <DataNotFound
          title="Project Not Found"
          description={`The project you are looking for with the slug ${slug} may have been removed or does not exist.`}
          buttonText="Browse All projects"
          buttonLink="/projects"
        />
      )}
    </div>
  );
};

export default ProjectDetailsPage;
