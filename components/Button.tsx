
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: (e?: any) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = 'px-12 py-5 rounded-2xl font-bold transition-all duration-500 active:scale-95 text-sm uppercase tracking-[0.2em] overflow-hidden relative group';
  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-400 shadow-[0_15px_40px_-10px_rgba(249,115,22,0.6)]',
    secondary: 'bg-white text-black hover:bg-slate-100 shadow-xl shadow-white/10',
    outline: 'border border-white/20 bg-white/5 text-white hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/5 backdrop-blur-md',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </button>
  );
};
