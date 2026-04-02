import Player from "next-video/player";
import { SectionHeading } from "./SectionHeading";

const ProjectVideoDemo = ({
  videoUrl,
  isVideoMobileRecording,
}: {
  videoUrl: string;
  isVideoMobileRecording: boolean;
}) => {
  return (
    <div className="mb-8">
      <SectionHeading title="Project Demo" className="mb-4" />

      <div
        className={`${isVideoMobileRecording ? "aspect-9/16 max-w-[350px] mx-auto" : "aspect-video w-full"}  rounded-lg overflow-hidden`}
      >
        <Player
          src={videoUrl}
          // poster="https://your-video-host.com/videos/demo-poster.webp"
          playsInline
          controls
          autoPlay
          muted
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProjectVideoDemo;
