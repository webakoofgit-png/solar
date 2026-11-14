import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-xs font-semibold',
    md: 'px-6 py-3 text-sm font-semibold tracking-wide',
    lg: 'px-8 py-4 text-base font-bold tracking-wide',
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:from-amber-300 hover:to-amber-400 border border-amber-300',
    secondary:
      'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-950/20 border border-slate-700/50',
    outline:
      'bg-transparent text-white border-2 border-amber-400/80 hover:bg-amber-400/10 hover:border-amber-300 shadow-sm',
    dark:
      'bg-[#071B2E] text-white hover:bg-[#0e2b45] border border-amber-400/30 hover:border-amber-400',
    ghost:
      'bg-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-100',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg cursor-pointer transition-colors duration-200 uppercase font-display ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </motion.button>
  );
};
