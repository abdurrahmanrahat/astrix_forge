import { cn } from "@/lib/utils";
import { LucideIcon, PackageSearch } from "lucide-react";

type TEmptyStateProps = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
};

export default function EmptyState({
  title,
  description,
  icon: Icon = PackageSearch,
  className,
}: TEmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-8 md:py-12",
        className,
      )}
    >
      {/* Icon */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-muted bg-muted">
        <Icon className="h-7 w-7 text-muted-foreground" />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg md:text-xl 2xl:text-2xl font-heading font-semibold text-foreground">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="max-w-md text-sm md:text-base 2xl:text-[17px] leading-6 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
