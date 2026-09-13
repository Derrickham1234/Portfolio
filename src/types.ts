export interface FAQItem {
  id: number;
  topic: string;
  question: string;
  answer: string;
}

export interface SkillItem {
  id: string;
  name: string;
  domain: 'frontend' | 'backend' | 'mobile' | 'systems' | 'cyber';
  level: 'Hands-on' | 'Intermediate' | 'Working Knowledge' | 'Learning';
  description: string;
  percentage: number;
}

export interface ProjectItem {
  id: string;
  tag: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  longDescription: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  githubUrl: string;
  liveDemoUrl?: string;
  architectureHighlights: string[];
}

export interface InnovationItem {
  id: string;
  category: string;
  icon: string;
  title: string;
  description: string;
  techDomain: string;
  statusBadge: string;
  spanCol?: boolean;
}

export interface ExperienceItem {
  id: string;
  location: string;
  period: string;
  role: string;
  company: string;
  bullets: string[];
  badges: string[];
  accentColor: 'primary' | 'secondary' | 'tertiary';
}

export interface EducationItem {
  id: string;
  year: string;
  degree: string;
  institution: string;
  description: string;
  icon: string;
  gradeBadge: string;
  accentColor: 'primary' | 'secondary' | 'tertiary';
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
}
