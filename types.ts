
export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Full Stack' | 'Design';
}

export enum SectionId {
  Home = 'home',
  About = 'about',
  Skills = 'skills',
  Projects = 'projects',
  DesignGallery = 'design-gallery',
  Contact = 'contact'
}
