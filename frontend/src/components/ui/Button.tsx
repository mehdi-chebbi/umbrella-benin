import { type ReactNode, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
}

const variantClasses = {
  primary:
    'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20',
  secondary:
    'bg-transparent text-white border-2 border-white/80 hover:bg-white/10 hover:border-white',
  accent:
    'bg-accent text-white hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-heading font-semibold rounded-lg btn-interactive transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
