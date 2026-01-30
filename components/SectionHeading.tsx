import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : 'text-right'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter dark:text-white text-slate-900 leading-[0.9]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="dark:text-white/40 text-slate-500 text-xl md:text-2xl leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        className={`mt-10 h-1.5 bg-brand-blue rounded-full ${centered ? 'mx-auto' : 'mr-0'}`}
      ></motion.div>
    </div>
  );
};