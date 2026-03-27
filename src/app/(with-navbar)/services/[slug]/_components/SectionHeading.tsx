type TSectionHeadingProps = {
  title: string;
  className?: string;
};

const SectionHeading = ({ title, className = "" }: TSectionHeadingProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="w-[3px] h-5 bg-primary rounded-sm"></span>

      <h2 className="text-lg 2xl:text-xl font-semibold text-foreground">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
