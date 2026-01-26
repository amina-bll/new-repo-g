
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-20 ${centered ? 'text-center' : 'text-right'}`}>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tighter text-white leading-tight text-glow-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
      <div className={`mt-12 h-1.5 w-32 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)] ${centered ? 'mx-auto' : 'mr-0'}`}></div>
    </div>
  );
};
