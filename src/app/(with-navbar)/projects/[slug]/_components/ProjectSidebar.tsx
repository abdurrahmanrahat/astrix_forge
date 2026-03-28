import { Button } from "@/components/ui/button";
import { TProject } from "@/types/project.type";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectSidebar = ({ project }: { project: TProject }) => {
  return (
    <div className="sticky top-24 2xl:top-28">
      <div className="gradient-border mb-4 rounded-2xl p-6">
        <div className="mb-4 text-[12px] 2xl:text-base font-semibold uppercase tracking-widest text-muted-foreground">
          Project Details
        </div>

        <div className="space-y-0">
          {Object.entries(project.meta).map(([key, value], index, arr) => (
            <div
              key={key}
              className={`flex items-center justify-between py-3 text-sm 2xl:text-[16px] ${
                index !== arr.length - 1 ? "border-b border-muted" : ""
              }`}
            >
              <span className="text-muted-foreground capitalize">{key}</span>
              <span className="font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-end px-3">
          <Button variant="link" size="icon">
            Live View
          </Button>
        </div>
      </div>

      <div className="gradient-border mb-5 rounded-2xl p-6">
        <div className="mb-4 text-[12px] 2xl:text-base font-semibold uppercase tracking-widest text-muted-foreground">
          Tech Stack
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-muted bg-muted px-2.5 py-1 text-[10px] xl:text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <Link href="/contact">
        <Button size="lg" className="w-full rounded-full shadow-topUpShadow">
          Discuss a Similar Project
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default ProjectSidebar;
