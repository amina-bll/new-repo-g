
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-20 ${centered ? 'text-center' : 'text-right'}`}>
      <motion.h2 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tighter dark:text-white text-slate-900 leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="dark:text-white/60 text-slate-500 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 128 }}
        className={`mt-12 h-1.5 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] ${centered ? 'mx-auto' : 'mr-0'}`}
      ></motion.div>
    </div>
  );
};
