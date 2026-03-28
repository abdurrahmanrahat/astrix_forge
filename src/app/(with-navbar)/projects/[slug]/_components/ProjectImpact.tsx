import { SectionHeading } from "./SectionHeading";

const ProjectImpact = ({ result }: { result: string }) => {
  return (
    <div className="">
      <SectionHeading title="Business Impact" className="mb-2" />

      <p className="text-[14px] md:text-[15px] 2xl:text-[17px] leading-6 text-muted-foreground">
        {result}
      </p>
    </div>
  );
};

export default ProjectImpact;
