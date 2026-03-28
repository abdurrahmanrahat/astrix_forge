"use client";

import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

type TFilterTabsProps = {
  active: string;
  onChange: (value: string) => void;
};

export default function FilterTabs({ active, onChange }: TFilterTabsProps) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-1.5 md:gap-2">
      {[{ slug: "all", name: "All" }, ...categories].map((category) => {
        const isActive = active === category.slug;

        return (
          <button
            key={category.slug}
            onClick={() => onChange(category.slug)}
            className={cn(
              "rounded-full border px-4 py-[6px] md:px-[18px] md:py-[7px] xl:px-5 xl:py-2 text-[13px] md:text-sm 2xl:text-base font-medium transition-all duration-200",
              "border-muted text-muted-foreground hover:border-primary hover:text-primary cursor-pointer",
              isActive &&
                "bg-primary text-white border-primary shadow-topUpShadow hover:text-white",
            )}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
