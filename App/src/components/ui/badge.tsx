import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

const badgeVariants = {
  default: 'bg-gray-900 text-gray-50',
  secondary: 'bg-gray-200 text-gray-900',
  destructive: 'bg-red-500 text-white',
  outline: 'border border-gray-200 text-gray-900',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <span
      ref={ref}
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${badgeVariants[variant]} ${className || ''}`}
      {...props}
    />
  )
);
Badge.displayName = 'Badge';
