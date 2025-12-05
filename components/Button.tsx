import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  fullWidth = false,
  size = 'md'
}) => {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    font-display
  `;
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const variants = {
    primary: `
      bg-primary text-white
      shadow-lg shadow-primary/25
      hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5
      active:translate-y-0 active:shadow-md
      focus:ring-primary
    `,
    secondary: `
      bg-amber-500 text-white
      shadow-lg shadow-amber-500/25
      hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5
      active:translate-y-0 active:shadow-md
      focus:ring-amber-500
    `,
    outline: `
      border-2 border-stone-300 text-stone-700 bg-transparent
      hover:border-primary hover:text-primary hover:bg-primary/5 hover:-translate-y-0.5
      active:translate-y-0
      focus:ring-primary
    `,
    ghost: `
      text-stone-600 bg-transparent
      hover:text-stone-900 hover:bg-stone-100
      active:bg-stone-200
      focus:ring-stone-400
    `,
    white: `
      bg-white text-primary
      shadow-lg
      hover:bg-stone-50 hover:shadow-xl hover:-translate-y-0.5
      active:translate-y-0 active:shadow-md
      focus:ring-white
    `,
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${widthClass} ${className}`.replace(/\s+/g, ' ').trim();

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
