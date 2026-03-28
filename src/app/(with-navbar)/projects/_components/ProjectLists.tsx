"use client";

import EmptyState from "@/components/shared/Ui/Data/EmptyState";
import { projects } from "@/data/projects";
import { FolderSearch } from "lucide-react";
import { useState } from "react";
import ProjectCard from "../../_components/ProjectsSection/ProjectCard";
import FilterTabs from "./FilterTabs";

const ProjectLists = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="py-14 md:py-20">
      <div className="flex justify-center items-center">
        <FilterTabs active={active} onChange={setActive} />
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={FolderSearch}
          title="Projects Not Found"
          description="There are currently no projects associated with this category. Please explore other categories."
        />
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectLists;
