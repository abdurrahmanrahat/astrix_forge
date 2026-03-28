import { cn } from "@/lib/utils";
import { TProject } from "@/types/project.type";
import { categoryStyles } from "@/utils/categoryStyles";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: TProject }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className=" group block overflow-hidden rounded-lg transition-all duration-500 shadow-cardDarkShadow hover:shadow-topUpShadow"
    >
      <div className="bg-muted">
        {/* Thumbnail */}
        <div className="relative h-[220px] overflow-hidden bg-muted">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" /> */}

          <span
            className={cn(
              "absolute left-4 top-4 inline-flex rounded-full px-3 py-1 text-[10px] xl:text-[11px] font-semibold uppercase tracking-[0.14em] border",
              categoryStyles[project.category] ||
                "border-muted bg-muted text-muted-foreground",
            )}
          >
            {project.category}
          </span>

          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-muted text-white backdrop-blur transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="mb-2 text-lg md:text-xl 2xl:text-2xl font-heading font-semibold text-foreground">
            {project.title}
          </h3>

          <p className="mb-5 text-[13px] md:text-sm 2xl:text-[15px] leading-6 text-muted-foreground">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-muted bg-muted px-2.5 py-1 text-[10px] xl:text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
