import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectLists from "./ProjectLists";

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
        <ProjectLists />

        <div className="flex justify-center items-center mt-8 ">
          <Link href="/projects">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full hover:-translate-y-0.5"
            >
              View Projects
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
