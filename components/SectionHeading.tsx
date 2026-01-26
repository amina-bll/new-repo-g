
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-right'}`}>
      <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-white">{title}</h2>
      {subtitle && <p className="text-white/30 max-w-2xl mx-auto text-lg leading-relaxed font-light">{subtitle}</p>}
      <div className={`mt-8 h-1 w-20 bg-orange-500 rounded-full ${centered ? 'mx-auto' : 'mr-0'}`}></div>
    </div>
  );
};
