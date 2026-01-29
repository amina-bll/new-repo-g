
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: (e?: any) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = 'px-10 py-4 rounded-2xl font-bold transition-all duration-300 active:scale-95 text-sm uppercase tracking-widest flex items-center justify-center gap-3 overflow-hidden relative group';
  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-brand-cyan shadow-xl shadow-brand-blue/20',
    secondary: 'bg-brand-deep text-white hover:bg-slate-800 shadow-lg border border-slate-700',
    outline: 'border-2 border-brand-blue/40 text-brand-blue hover:bg-brand-blue hover:text-white',
  };

  return (
    <motion.button 
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      onClick={onClick}
    >
      <div className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
