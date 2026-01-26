
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: (e?: any) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = 'px-10 py-4 rounded-full font-bold transition-all duration-500 active:scale-95 text-sm uppercase tracking-wider overflow-hidden relative group';
  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-400 shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)]',
    secondary: 'bg-white text-black hover:bg-slate-100 shadow-lg shadow-white/10',
    outline: 'border border-orange-500/10 bg-orange-500/5 text-orange-500/80 hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/10 glass',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </button>
  );
};
