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
      <div className="relative aspect-video max-w-[940px] mx-auto bg-muted">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
};

export default ProjectCover;
