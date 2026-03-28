import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ProjectFeatures = ({ features }: { features: string[] }) => {
  return (
    <div className="mb-6">
      <SectionHeading title="Key Features" className="mb-3" />

      <ul className="space-y-3 ml-4">
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex items-start gap-3 leading-5 text-muted-foreground text-[13px] md:text-sm xl:text-[15px] 2xl:text-[17px]"
          >
            <span className="mt-0.5 flex h-5 w-5 2xl:h-6 2xl:w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="h-3.5 w-3.5 2xl:h-4.5 2xl:w-4.5" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFeatures;
