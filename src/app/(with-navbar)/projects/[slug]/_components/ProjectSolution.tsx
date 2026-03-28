import { SectionHeading } from "./SectionHeading";

const ProjectSolution = ({ solution }: { solution: string }) => {
  return (
    <div className="mb-6">
      <SectionHeading title="Our Solution" className="mb-2" />
      <p className="text-[14px] md:text-[15px] 2xl:text-[17px] leading-6 text-muted-foreground">
        {solution}
      </p>
    </div>
  );
};

export default ProjectSolution;
