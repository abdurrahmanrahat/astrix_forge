import { LucideIcon } from "lucide-react";

export type TServiceFAQ = {
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

  faq: TServiceFAQ[];

  tools: string[];
  relatedProjects: string[];
};
