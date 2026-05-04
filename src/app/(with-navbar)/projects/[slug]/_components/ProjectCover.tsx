import Image from "next/image";

const ProjectCover = ({
  title,
  thumbnail,
}: {
  title: string;
  thumbnail: string;
}) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="max-w-[940px] mx-auto bg-muted">
        <Image
          src={thumbnail}
          alt={title}
          width={1200}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default ProjectCover;
