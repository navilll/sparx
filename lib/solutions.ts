import solutionCatalog from "../data/solutions.json";

export type Solution = {
  title: string;
  eyebrow: string;
  description: string;
  overview: string;
  idealFor: string[];
  features: string[];
  recommended: string[];
  benefits: string[];
  steps: string[];
  faqs: { question: string; answer: string }[];
};

export const solutions = solutionCatalog as Solution[];
