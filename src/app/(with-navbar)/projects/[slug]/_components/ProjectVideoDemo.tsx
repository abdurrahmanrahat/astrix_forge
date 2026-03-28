import { Play } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ProjectVideoDemo = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className="mb-8">
      <SectionHeading title="Project Demo" className="mb-4" />

      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="gradient-border relative flex aspect-[16/9] items-center justify-center rounded-lg  bg-muted transition-all duration-300">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-topUpShadow transition-transform duration-300 group-hover:scale-105">
            <Play className="h-6 w-6 fill-white" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectVideoDemo;
