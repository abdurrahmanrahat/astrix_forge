import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* Title */}
        <div className="mb-10 md:mb-14 max-w-2xl mx-auto text-center">
          <SectionTitle
            subTitle="Selected Work"
            title="Projects That"
            highlight="Speak for Themselves"
            className="flex flex-col justify-center items-center"
          />

          <p className="mt-4 text-sm md:text-base 2xl:text-lg text-muted-foreground leading-6">
            A curated selection of automation systems and web applications we've
            built — each solving a real business challenge.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
