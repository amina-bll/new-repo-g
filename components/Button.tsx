import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: (e?: any) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = 'px-12 py-5 rounded-2xl font-black transition-all duration-500 active:scale-95 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-brand-blue text-white hover:shadow-2xl hover:shadow-brand-blue/40',
    secondary: 'bg-brand-deep text-white hover:bg-slate-800',
    outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
  };

  return (
    <motion.button 
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      onClick={onClick}
    >
      <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};