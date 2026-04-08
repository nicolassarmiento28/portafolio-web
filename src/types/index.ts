export interface TechStack {
  name: string;
  icon: string;
  color: string;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  caseStudy?: string;
}

export interface ProjectDetails {
  challenge: string;
  solution: string;
  impact: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  details: ProjectDetails;
  features: string[];
  techStack: TechStack[];
  links: ProjectLinks;
  tags: string[];
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  frontend: Skill[];
  backend: Skill[];
  learning: Skill[];
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  initials: string;
  bio: string;
  email: string;
  location?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
