type TSectionHeadingProps = {
  title: string;
  className?: string;
};

export const SectionHeading = ({ title, className }: TSectionHeadingProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="w-1 h-5 2xl:h-6 bg-primary rounded-full"></span>
      <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold tracking-tight text-white">
        {title}
      </h3>
    </div>
  );
};
