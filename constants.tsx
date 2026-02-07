
import React from 'react';
import { Layout, Code, Database, Palette, Layers, Smartphone, Github, Figma, Cpu, Terminal, Zap, Type, PenTool } from 'lucide-react';
import { Project, Skill, SectionId } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Elite E-commerce',
    description: 'A high-performance online marketplace featuring secure payments and inventory management.',
    link: 'https://techskoop.vercel.app',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    tags: ['MERN', 'Redux', 'Stripe'],
    color: '#3b82f6',
    status: { label: 'Active Store' }
  },
  {
    id: '2',
    title: 'Speedy Pizza App',
    description: 'Real-time pizza delivery application with live order tracking and interactive menu.',
    link: 'https://pizza-hut-clone.vercel.app',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Firebase', 'Maps'],
    color: '#f97316',
    status: { label: 'Real-time Tracking', icon: '🛵' }
  },
  {
    id: '3',
    title: 'Rose Bridal Saloon',
    description: 'Elegant appointment booking system for high-end bridal beauty services.',
    link: 'https://bridal-saloon.vercel.app',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Cloudinary'],
    color: '#ec4899',
    status: { label: 'Live Preview' }
  },
  {
    id: '4',
    title: 'Ahad Dev-Port',
    description: 'Sleek developer showcase with custom dark-mode aesthetic.',
    link: 'https://ahad-portfolio.vercel.app',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Vercel'],
    color: '#22d3ee',
    status: { label: 'Production Ready' }
  },
  {
    id: '5',
    title: 'Motral Car Rental',
    description: 'Modern vehicle booking platform with dynamic availability search.',
    link: 'https://motral-web-studio.vercel.app',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    tags: ['NodeJS', 'MongoDB'],
    color: '#eab308',
    status: { label: 'Live Demo' }
  },
  {
    id: '6',
    title: 'Ahmad Design-Port',
    description: 'Creative graphic design portfolio focused on visual storytelling.',
    link: 'https://ahmad-portfolio.vercel.app',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Framer'],
    color: '#a855f7',
    status: { label: 'Live Preview' }
  },
  {
    id: '7',
    title: 'Motral Studio',
    description: 'Interactive agency landing page with physics-based animations.',
    link: 'https://motral-particles.vercel.app',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    tags: ['Three.js', 'GSAP'],
    color: '#10b981',
    status: { label: 'Live Preview' }
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML5', icon: 'Type', category: 'Full Stack' },
  { name: 'CSS3', icon: 'Layers', category: 'Full Stack' },
  { name: 'JavaScript', icon: 'Zap', category: 'Full Stack' },
  { name: 'React', icon: 'Cpu', category: 'Full Stack' },
  { name: 'Node.js', icon: 'Terminal', category: 'Full Stack' },
  { name: 'MongoDB', icon: 'Database', category: 'Full Stack' },
  { name: 'Photoshop', icon: 'Palette', category: 'Design' },
  { name: 'Illustrator', icon: 'PenTool', category: 'Design' }
];

export const NAV_ITEMS = [
  { label: 'Home', href: `#${SectionId.Home}` },
  { label: 'About', href: `#${SectionId.About}` },
  { label: 'Skills', href: `#${SectionId.Skills}` },
  { label: 'Projects', href: `#${SectionId.Projects}` },
  { label: 'Design Gallery', href: `#${SectionId.DesignGallery}` },
  { label: 'Contact', href: `#${SectionId.Contact}` }
];
