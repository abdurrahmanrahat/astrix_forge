import { cn } from "@/lib/utils";

type TSectionTitleProps = {
  subTitle: string;
  title: string;
  highlight?: string;
  className?: string;
};

export default function SectionTitle({
  subTitle,
  title,
  highlight,
  className,
}: TSectionTitleProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
        <span className="w-5 h-[2px] bg-primary" />
        {subTitle}
      </div>

      <h2 className="text-[28px] md:text-4xl xl:text-5xl 2xl:text-6xl font-heading font-bold text-foreground leading-[1.1] tracking-tight">
        {title}{" "}
        {highlight && (
          <span className="bg-linear-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
    </div>
  );
}
