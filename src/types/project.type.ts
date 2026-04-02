export type TProjectMeta = {
  type: string;
  industry: string;
  timeline: string;
};

export type TProject = {
  _id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  thumbnail: string;
  videoUrl?: string;
  isVideoMobileRecording?: boolean;
  challenge: string;
  solution: string;
  features: string[];
  result: string;
  meta: TProjectMeta;
  tools: string[];
  liveUrl?: string;
};
