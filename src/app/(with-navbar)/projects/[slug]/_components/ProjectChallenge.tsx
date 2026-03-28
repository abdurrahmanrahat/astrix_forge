import { SectionHeading } from "./SectionHeading";

const ProjectChallenge = ({ challenge }: { challenge: string }) => {
  return (
    <div className="mb-6">
      <SectionHeading title="The Challenge" className="mb-2" />

      <p className="text-[14px] md:text-[15px] 2xl:text-[17px] leading-6 text-muted-foreground">
        {challenge}
      </p>
    </div>
  );
};

export default ProjectChallenge;
