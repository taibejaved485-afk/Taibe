
import React from 'react';

interface GeminiCardProps {
  children: React.ReactNode;
  className?: string;
  glowType?: 'purple' | 'cyan';
}

const GeminiCard: React.FC<GeminiCardProps> = ({ children, className = "", glowType = 'purple' }) => {
  const glowClass = glowType === 'purple' ? 'gemini-glow-purple' : 'gemini-glow-cyan';
  
  return (
    <div className={`glass-morphism rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] animate-glow-border ${glowClass} ${className}`}>
      {children}
    </div>
  );
};

export default GeminiCard;
