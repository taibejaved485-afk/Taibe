
import React from 'react';
import { Layout, Code, Database, Palette, Layers, Smartphone, Github, Figma } from 'lucide-react';
import { Project, Skill, SectionId } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ahad Portfolio',
    description: 'Modern developer portfolio with sleek animations and responsive design.',
    link: 'https://ahad-portfolio.vercel.app',
    image: 'https://picsum.photos/seed/ahad/600/400',
    tags: ['React', 'Tailwind', 'Vercel']
  },
  {
    id: '2',
    title: 'Ahmad Portfolio',
    description: 'Clean minimalist portfolio built for professional showcasing.',
    link: 'https://ahmad-portfolio.vercel.app',
    image: 'https://picsum.photos/seed/ahmad/600/400',
    tags: ['Next.js', 'Framer Motion']
  },
  {
    id: '3',
    title: 'Techskoop',
    description: 'Tech news and blogging platform for community updates.',
    link: 'https://techskoop.vercel.app',
    image: 'https://picsum.photos/seed/tech/600/400',
    tags: ['MERN', 'Redux']
  },
  {
    id: '4',
    title: 'Bridal Saloon',
    description: 'E-commerce and appointment system for specialized salons.',
    link: 'https://bridal-saloon.vercel.app',
    image: 'https://picsum.photos/seed/bridal/600/400',
    tags: ['React', 'Firebase']
  },
  {
    id: '5',
    title: 'Motral Web Studio',
    description: 'Official landing page for a creative web development agency.',
    link: 'https://motral-web-studio.vercel.app',
    image: 'https://picsum.photos/seed/motral/600/400',
    tags: ['Three.js', 'React']
  },
  {
    id: '6',
    title: 'Motral Particles',
    description: 'Interactive particle animation sandbox and visualization tool.',
    link: 'https://motral-particles.vercel.app',
    image: 'https://picsum.photos/seed/particles/600/400',
    tags: ['Canvas API', 'JS']
  },
  {
    id: '7',
    title: 'Pizza Hut Clone',
    description: 'High-fidelity UI clone of the famous pizza delivery platform.',
    link: 'https://pizza-hut-clone.vercel.app',
    image: 'https://picsum.photos/seed/pizza/600/400',
    tags: ['Tailwind', 'React Router']
  }
];

export const SKILLS: Skill[] = [
  { name: 'MongoDB', icon: 'Database', category: 'Full Stack' },
  { name: 'Express.js', icon: 'Layers', category: 'Full Stack' },
  { name: 'React', icon: 'Code', category: 'Full Stack' },
  { name: 'Node.js', icon: 'Smartphone', category: 'Full Stack' },
  { name: 'JavaScript', icon: 'Code', category: 'Full Stack' },
  { name: 'Photoshop', icon: 'Palette', category: 'Design' },
  { name: 'Illustrator', icon: 'Figma', category: 'Design' },
  { name: 'UI/UX Design', icon: 'Layout', category: 'Design' }
];

export const NAV_ITEMS = [
  { label: 'Home', href: `#${SectionId.Home}` },
  { label: 'About', href: `#${SectionId.About}` },
  { label: 'Skills', href: `#${SectionId.Skills}` },
  { label: 'Projects', href: `#${SectionId.Projects}` },
  { label: 'Design Gallery', href: `#${SectionId.DesignGallery}` },
  { label: 'Contact', href: `#${SectionId.Contact}` }
];
