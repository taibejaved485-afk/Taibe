
import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Palette, 
  Layout, 
  Smartphone, 
  Layers, 
  Database,
  Type,
  ChevronDown,
  Sparkles,
  Zap,
  Cpu,
  MousePointer2,
  Terminal,
  User,
  Figma,
  Box,
  Monitor
} from 'lucide-react';
import SectionWrapper from './components/SectionWrapper';
import GeminiCard from './components/GeminiCard';
import { PROJECTS, SKILLS, NAV_ITEMS } from './constants';
import { SectionId, Project, Skill } from './types';

// Helper to map icon strings to components
const IconMapper: Record<string, any> = {
  Database,
  Layers,
  Code,
  Smartphone,
  Palette,
  Figma,
  Layout,
  Monitor,
  Box
};

// Floating WhatsApp Component with Branded SVG and Pulse Effect
const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = "https://wa.me/923706487654";
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group"
      aria-label="Chat with Taibe on WhatsApp"
    >
      <div className="relative">
        {/* Pulse Glow Layer */}
        <div className="absolute inset-0 rounded-full animate-whatsapp-pulse -z-10"></div>
        
        {/* Main Button Container */}
        <div className="glass-morphism w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110 shadow-2xl border-2 border-[#25D366] shadow-[#25D366]/20">
          {/* Custom WhatsApp SVG (FontAwesome-like) */}
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 448 512" 
            fill="white" 
            className="drop-shadow-[0_2px_4px_rgba(37,211,102,0.8)] transition-transform duration-500 group-hover:rotate-12"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 glass-morphism border-[#25D366]/30 rounded-xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap text-[#25D366]">Chat with Taibe</span>
        </div>
      </div>
    </a>
  );
};

// Custom Glowing Tube Cursor Component
const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const tailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const tailPos = useRef<{ x: number, y: number }[]>(Array(12).fill({ x: 0, y: 0 }));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const updateCursor = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mousePos.current.x}px`;
        dotRef.current.style.top = `${mousePos.current.y}px`;
      }

      let prevX = mousePos.current.x;
      let prevY = mousePos.current.y;

      tailPos.current.forEach((pos, index) => {
        const lerpFactor = 0.25 - (index * 0.015);
        const newX = pos.x + (prevX - pos.x) * lerpFactor;
        const newY = pos.y + (prevY - pos.y) * lerpFactor;
        
        tailPos.current[index] = { x: newX, y: newY };
        
        const tailEl = tailRefs.current[index];
        if (tailEl) {
          tailEl.style.left = `${newX}px`;
          tailEl.style.top = `${newY}px`;
          const scale = 1 - (index / tailPos.current.length);
          tailEl.style.transform = `translate(-50%, -50%) scale(${scale})`;
          tailEl.style.opacity = `${0.6 * scale}`;
          
          if (index > 6) {
             tailEl.style.backgroundColor = 'rgba(168, 85, 247, 0.4)';
          } else {
             tailEl.style.backgroundColor = 'rgba(0, 255, 255, 0.4)';
          }
        }
        prevX = newX;
        prevY = newY;
      });

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    if (!isMobile) {
      animationFrameId = requestAnimationFrame(updateCursor);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      {tailPos.current.map((_, i) => (
        <div key={i} ref={el => tailRefs.current[i] = el} className="cursor-tail" />
      ))}
    </>
  );
};

const TypewriterText: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-w-[2ch]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse border-r-2 border-cyan-400 ml-1"></span>
    </span>
  );
};

const BioTypewriter: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.5 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [index, text, isVisible]);

  return (
    <div ref={containerRef} className="font-mono text-sm md:text-base leading-relaxed text-cyan-50/80">
      <span className="text-green-400 mr-2">➜</span>
      <span className="text-purple-400">~/taibe-javed/bio</span>
      <span className="text-gray-500"> $ </span>
      <span>cat profile.md</span>
      <br /><br />
      {displayedText}
      {index < text.length && <span className="w-2 h-5 bg-cyan-400 inline-block align-middle animate-pulse ml-1"></span>}
    </div>
  );
};

const ProjectTiltCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const glowType = Math.random() > 0.5 ? 'purple' : 'cyan';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="perspective-1000 h-full">
      <GeminiCard glowType={glowType} className="group overflow-hidden !p-0 flex flex-col h-full !rounded-3xl relative transition-transform duration-200 ease-out preserve-3d" style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}>
        <div className="glass-shine-layer"></div>
        <div className="relative h-56 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity"></div>
          <div className="absolute top-6 right-6 p-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all translate-y-[-10px] group-hover:translate-y-0 z-10">
            <ExternalLink size={18} className={glowType === 'cyan' ? 'text-cyan-400' : 'text-purple-400'} />
          </div>
        </div>
        <div className="p-8 flex flex-col flex-grow relative z-10">
          <h3 className={`text-2xl font-black mb-3 transition-colors tracking-tight ${glowType === 'cyan' ? 'group-hover:text-cyan-400' : 'group-hover:text-purple-400'}`}>
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed font-light">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {project.tags.map(tag => (
              <span key={tag} className={`text-[10px] uppercase font-black tracking-widest px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 transition-colors ${glowType === 'cyan' ? 'group-hover:border-cyan-500/30' : 'group-hover:border-purple-500/30'}`}>
                {tag}
              </span>
            ))}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 w-full py-4 bg-white/5 rounded-2xl border border-white/10 font-black text-xs uppercase tracking-widest transition-all ${glowType === 'cyan' ? 'neon-btn-cyan hover:border-cyan-400/50' : 'neon-btn-purple hover:border-purple-400/50'}`}>
            Launch Live <ExternalLink size={14} />
          </a>
        </div>
      </GeminiCard>
    </div>
  );
};

const SkillTile: React.FC<{ skill: Skill; activeTab: string }> = ({ skill, activeTab }) => {
  const Icon = IconMapper[skill.icon] || Code;
  const isDev = activeTab === 'Full Stack';
  
  return (
    <div className={`group relative p-6 rounded-2xl glass-morphism border border-white/5 transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${isDev ? 'hover:gemini-glow-cyan' : 'hover:gemini-glow-purple'}`}>
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl ${isDev ? 'bg-cyan-500' : 'bg-purple-500'}`}></div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <Icon size={32} className={`transition-all duration-500 ${isDev ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-purple-400 group-hover:text-purple-300'}`} />
        <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeNav, setActiveNav] = useState(SectionId.Home);
  const [activeSkillTab, setActiveSkillTab] = useState<'Full Stack' | 'Design'>('Full Stack');

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SectionId);
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveNav(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bioText = "Hello, I am Taibe Javed. A digital alchemist transforming abstract ideas into high-fidelity digital experiences. With deep expertise in the MERN stack and a soulful approach to graphic design, I build products that are as functional as they are beautiful. My process is a blend of rigorous logic and creative intuition, ensuring every pixel and every line of code serves a larger purpose. Currently pushing the boundaries of what's possible in web architecture and brand identity.";

  const filteredSkills = SKILLS.filter(s => s.category === activeSkillTab);

  return (
    <div className="mesh-gradient min-h-screen">
      <CustomCursor />
      <FloatingWhatsApp />
      
      {/* Floating Header */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
        <div className="glass-morphism rounded-full py-3 px-6 flex items-center justify-between gap-1 md:gap-4 md:px-10 border-cyan-500/30">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace('#', '') as SectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-[10px] md:text-xs font-black uppercase tracking-widest transition-colors hover:text-cyan-400 ${
                  activeNav === id ? 'text-cyan-400' : 'text-gray-500'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Hero Section */}
      <SectionWrapper id={SectionId.Home} className="pt-32 pb-32 overflow-hidden relative">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-purple-900 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-900 rounded-full blur-[140px] animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 text-center lg:text-left">
          <div className="relative order-1 lg:order-2 group">
            <div className="absolute -top-6 -right-6 z-20 glass-morphism px-5 py-2.5 rounded-2xl border border-cyan-500/40 flex items-center gap-2 animate-float shadow-2xl shadow-cyan-500/20">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
              <span className="text-[11px] font-black uppercase tracking-widest text-white">OPEN FOR PROJECTS</span>
            </div>
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] transition-all duration-700">
              <div className="absolute -inset-4 border border-cyan-500/20 rounded-full animate-pulse-ring"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden glass-morphism border-2 border-white/10 p-2 group-hover:border-cyan-400/50 transition-all duration-700 shadow-2xl shadow-cyan-500/10">
                 <img 
                  src="https://i.pinimg.com/736x/af/4d/a5/af4da5dd0b6e4f8b84928fa7d15b41ca.jpg" 
                  alt="Taibe Javed" 
                  className="w-full h-full object-cover rounded-full transition-all duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 order-2 lg:order-1 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-xl animate-float">
              <Sparkles className="text-cyan-400" size={16} />
              <span className="text-xs font-black tracking-[0.3em] text-cyan-300 uppercase">Aesthetically Engineered</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-black font-heading mb-6 leading-[0.8] tracking-tight">
              <span className="text-metallic">Taibe</span> <br />
              <span className="text-metallic">Javed</span>
            </h1>
            <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start mb-8">
              <span className="text-2xl md:text-4xl font-light text-gray-400 tracking-tight">
                I am a <span className="font-black text-white"><TypewriterText words={['Full Stack Developer', 'Graphic Designer', 'UI/UX Strategist', 'MERN Expert']} /></span>
              </span>
            </div>
            <p className="max-w-xl mx-auto lg:mx-0 text-gray-400 text-lg md:text-xl leading-relaxed mb-12 font-light">
              Crafting immersive digital ecosystems where <span className="text-white font-bold border-b border-cyan-500/50">code meets high-art</span>. Based in Pakistan, innovating for the future.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 items-center">
              <a href={`#${SectionId.Projects}`} className="group relative px-12 py-6 bg-white text-black font-black rounded-2xl transition-all hover:scale-105 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-sm">View Projects <ChevronDown size={20} /></span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1.5 glow-cyan-filter">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-[scroll_2s_infinite]"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* About Section - MacOS Terminal Bio */}
      <SectionWrapper id={SectionId.About} className="bg-black/40">
        <div className="max-w-7xl w-full container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-black font-heading mb-10 text-center lg:text-left">
                SYSTEM <span className="text-purple-500">BIO</span>
              </h2>
              <div className="relative group perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-gray-600">
                      <Terminal size={12} />
                      <span>TERMINAL — ZSH — 80x24</span>
                    </div>
                    <div className="w-12"></div>
                  </div>
                  <div className="p-8 min-h-[300px]">
                    <BioTypewriter text={bioText} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col items-center">
              <div className="relative group animate-float">
                <div className="absolute -inset-10 bg-cyan-500/10 rounded-full blur-[100px] -z-10 group-hover:bg-cyan-500/20 transition-all"></div>
                <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-[3.5rem] overflow-hidden border-2 border-white/10 p-2 glass-morphism shadow-2xl transform transition-transform duration-700 hover:scale-[1.03] group-hover:-rotate-2">
                   <img 
                    src="https://i.pinimg.com/736x/e8/ae/b8/e8aeb83ac15b75dac0603e6eba5e4cfc.jpg" 
                    alt="Taibe Creative" 
                    className="w-full h-full object-cover rounded-[3rem] brightness-90 group-hover:brightness-100 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 mix-blend-overlay"></div>
                </div>
                <div className="absolute top-0 -right-4 w-24 h-24 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-[3.5rem]"></div>
                <div className="absolute bottom-0 -left-4 w-24 h-24 border-b-2 border-l-2 border-purple-400/30 rounded-bl-[3.5rem]"></div>
              </div>
              <div className="mt-12 text-center lg:text-left flex flex-col gap-2">
                <p className="text-gray-500 font-black uppercase tracking-[0.4em] text-[10px]">Creator Archives</p>
                <p className="text-3xl font-light text-gray-300">Merging Logic with <span className="text-white font-black italic">Soul</span></p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Redesigned Skills Section with Tabbed View */}
      <SectionWrapper id={SectionId.Skills}>
        <div className="max-w-6xl w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-12">
              Technical <span className="text-metallic">Stacks</span>
            </h2>
            
            <div className="inline-flex glass-morphism p-1.5 rounded-2xl border border-white/5 relative overflow-hidden">
              <div 
                className={`absolute inset-y-1.5 left-1.5 w-[calc(50%-1.5px)] rounded-xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  activeSkillTab === 'Full Stack' ? 'translate-x-0 bg-cyan-500/20 gemini-glow-cyan' : 'translate-x-full bg-purple-500/20 gemini-glow-purple'
                }`}
              ></div>
              <button 
                onClick={() => setActiveSkillTab('Full Stack')}
                className={`relative z-10 px-8 py-3 rounded-xl flex items-center gap-3 transition-colors duration-500 ${
                  activeSkillTab === 'Full Stack' ? 'text-cyan-400' : 'text-gray-500'
                }`}
              >
                <Code size={18} />
                <span className="text-xs font-black uppercase tracking-widest">Development</span>
              </button>
              <button 
                onClick={() => setActiveSkillTab('Design')}
                className={`relative z-10 px-8 py-3 rounded-xl flex items-center gap-3 transition-colors duration-500 ${
                  activeSkillTab === 'Design' ? 'text-purple-400' : 'text-gray-500'
                }`}
              >
                <Palette size={18} />
                <span className="text-xs font-black uppercase tracking-widest">Design</span>
              </button>
            </div>
          </div>

          <div className="relative min-h-[400px]">
             <div 
              className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 transition-all duration-700 ease-out ${
                activeSkillTab ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-md'
              }`}
              key={activeSkillTab}
             >
                {filteredSkills.map((skill, i) => (
                  <div 
                    key={skill.name} 
                    className="animate-in fade-in zoom-in duration-500" 
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <SkillTile skill={skill} activeTab={activeSkillTab} />
                  </div>
                ))}
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id={SectionId.Projects}>
        <div className="max-w-7xl w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Featured <span className="text-purple-500 underline decoration-purple-500/20 underline-offset-8">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-md text-center md:text-right font-light">
              Architecting high-performance digital solutions with meticulous attention to detail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
            {PROJECTS.map((project) => (
              <ProjectTiltCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Graphic Design Gallery */}
      <SectionWrapper id={SectionId.DesignGallery} className="bg-black/50 overflow-hidden">
        <div className="max-w-5xl w-full text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-[160px] -z-10"></div>
          <h2 className="text-4xl md:text-7xl font-black font-heading mb-8">
            Visual <span className="text-cyan-400 underline decoration-purple-500/50 underline-offset-8">Gallery</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 font-light max-w-2xl mx-auto">
            Where creative vision meets pixel precision. Discover my journey through professional branding and layout design.
          </p>
          <GeminiCard className="p-16 md:p-24 relative overflow-hidden group cursor-pointer transition-all duration-1000 hover:shadow-[0_0_100px_rgba(168,85,247,0.15)] !rounded-[3rem]" glowType="purple">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-all duration-1000 transform group-hover:scale-105">
              <img src="https://picsum.photos/seed/design/1600/1000" alt="Design Background" className="w-full h-full object-cover grayscale brightness-50" />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative mb-10">
                <Palette className="w-24 h-24 text-purple-500 transition-transform duration-1000 group-hover:rotate-[360deg] group-hover:scale-110" />
                <div className="absolute -inset-6 bg-purple-500/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-5xl font-black mb-6 transition-colors group-hover:text-purple-300 tracking-tighter">BEHANCE PORTFOLIO</h3>
              <p className="text-gray-400 mb-12 max-w-lg text-lg font-light leading-relaxed">
                A curated selection of high-fidelity visual assets, identity systems, and futuristic layouts for top-tier brands.
              </p>
              <a href="https://www.behance.net/Taibegraphics" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-4 px-16 py-7 bg-white text-black font-black rounded-[2rem] transition-all hover:scale-110 active:scale-95 overflow-hidden group/btn uppercase tracking-[0.2em] text-sm">
                <span className="absolute inset-0 bg-purple-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 flex items-center gap-3 group-hover/btn:text-white">OPEN SHOWCASE <ExternalLink size={24} /></span>
              </a>
            </div>
          </GeminiCard>
        </div>
      </SectionWrapper>

      {/* Contact Section / Footer */}
      <footer id={SectionId.Contact} className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
            <div className="flex flex-col justify-center">
              <h2 className="text-6xl md:text-8xl font-black font-heading mb-10 leading-none tracking-tight">
                Let's <br />
                <span className="text-cyan-400 underline decoration-purple-500 underline-offset-8">Collaborate</span>
              </h2>
              <div className="space-y-10">
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 glass-morphism rounded-3xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all border border-white/5">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-600 uppercase font-black tracking-[0.3em] mb-2">VOICE CHANNEL</p>
                    <p className="text-2xl font-black group-hover:text-cyan-400 transition-colors tracking-tight">03706487654</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 glass-morphism rounded-3xl flex items-center justify-center text-purple-400 group-hover:bg-purple-400 group-hover:text-black transition-all border border-white/5">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-600 uppercase font-black tracking-[0.3em] mb-2">DIRECT COMMS</p>
                    <p className="text-2xl font-black group-hover:text-purple-400 transition-colors tracking-tight">taibejaved485@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <GeminiCard glowType="cyan" className="!p-12 !rounded-[3rem] border border-cyan-500/20 shadow-2xl">
                <h3 className="text-3xl font-black mb-10 flex items-center gap-4 tracking-tighter">
                  <Cpu size={32} className="text-cyan-400 animate-pulse" />
                  SECURE MESSAGE
                </h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase text-gray-600 tracking-widest ml-3">INITIATOR NAME</label>
                    <input type="text" placeholder="Enter identity..." className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-400 transition-all text-white placeholder:text-gray-700 font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase text-gray-600 tracking-widest ml-3">RESPONSE LINK</label>
                    <input type="email" placeholder="Enter email address..." className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-400 transition-all text-white placeholder:text-gray-700 font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase text-gray-600 tracking-widest ml-3">CORE MESSAGE</label>
                    <textarea placeholder="Describe your vision..." rows={4} className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-400 transition-all resize-none text-white placeholder:text-gray-700 font-bold"></textarea>
                  </div>
                  <button className="w-full py-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black rounded-2xl hover:scale-[1.03] active:scale-[0.98] transition-all uppercase tracking-[0.3em] shadow-2xl text-xs">
                    INITIATE DATA TRANSMISSION
                  </button>
                </form>
              </GeminiCard>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col gap-2 text-center md:text-left">
               <p className="text-white font-black tracking-widest text-lg">TAIBE JAVED</p>
               <p className="text-gray-600 text-[11px] uppercase tracking-[0.6em]">Core Development Systems</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/taibejaved" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all"><Github size={24} /></a>
              <a href="https://www.behance.net/Taibegraphics" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all"><Palette size={24} /></a>
              <a href="#" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all"><Mail size={24} /></a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 text-[11px] font-black uppercase tracking-[0.4em] mb-1">FAISALABAD, PK</p>
              <p className="text-gray-700 text-[10px] font-bold uppercase tracking-widest">&copy; 2024-25 T. JAVED ARCHIVES</p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .animate-in {
          animation: animate-in 0.5s ease-out forwards;
        }
        @keyframes animate-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes whatsapp-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .animate-whatsapp-pulse {
          animation: whatsapp-pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
