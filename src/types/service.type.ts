import { LucideIcon } from "lucide-react";

export type TFaq = {
  question: string;
  answer: string;
};

export type TService = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;

  features: string[];
  whoItsFor: string[];
  problemsSolved: string[];
  solutionBreakdown: string[];
  outcomes: string[];

  faq: TFaq[];

  tools: string[];
  relatedProjects: string[];
};
