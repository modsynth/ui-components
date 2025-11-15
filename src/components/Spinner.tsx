import React from 'react';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'text-blue-600',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${color} border-t-transparent border-solid rounded-full animate-spin`}
      role="status"
      aria-label="Loading"
    />
  );
};
