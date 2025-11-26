import { IconType } from 'react-icons';


export interface Project {
  id: string;
  title: string;
  description: string;
  dateCreated: string; // YYYY-MM-DD format
  dateUpdated: string; // YYYY-MM-DD format
  tags: string[];
  image: string;
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  content?: string; // Markdown content for detail page
}

export interface Route {
  name: string,
  href: string
}

export interface Skill {
  name: string;
  link: string | null;
}

export interface SocialLink {
  name: string;
  link: string | null;
  icon: IconType
}