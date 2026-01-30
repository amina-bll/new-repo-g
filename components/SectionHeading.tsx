
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
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter dark:text-white text-slate-900 leading-[1.1]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="dark:text-white/40 text-slate-500 text-lg md:text-xl lg:text-2xl leading-relaxed font-light px-4"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        className={`mt-10 h-1 bg-brand-blue rounded-full ${centered ? 'mx-auto' : 'mr-0'}`}
      ></motion.div>
    </div>
  );
};
