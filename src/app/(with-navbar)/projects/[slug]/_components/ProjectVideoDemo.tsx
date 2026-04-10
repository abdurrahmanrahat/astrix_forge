import Player from "next-video/player";
import { SectionHeading } from "./SectionHeading";

const ProjectVideoDemo = ({
  videoUrl,
  isVideoMobileRecording,
}: {
  videoUrl: string;
  isVideoMobileRecording: boolean;
}) => {
  const isYoutubeLink =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  // Convert YouTube URL to embed format
  const getYoutubeEmbedUrl = (url: string) => {
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const match = url.match(regExp);
    const videoId = match?.[1];

    if (!videoId) return url;

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&controls=1`;
  };

  return (
    <div className="mb-8">
      <SectionHeading title="Project Demo" className="mb-4" />

      <div
        className={`${
          isVideoMobileRecording
            ? "aspect-9/16 max-w-[350px] mx-auto"
            : "aspect-video w-full"
        } rounded-lg overflow-hidden`}
      >
        {isYoutubeLink ? (
          <iframe
            src={getYoutubeEmbedUrl(videoUrl)}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <Player
            src={videoUrl}
            playsInline
            controls
            autoPlay
            muted
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectVideoDemo;
