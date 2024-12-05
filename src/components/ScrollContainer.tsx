import React from 'react';
import { cn } from '../utils/cn';

interface ScrollContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ScrollContainer({ children, className, ...props }: ScrollContainerProps) {
  return (
    <div 
      className={cn(
        "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-scrollbar-thumb hover:scrollbar-thumb-gray-300 dark:scrollbar-thumb-dark-600 dark:hover:scrollbar-thumb-dark-500 scrollbar-track-scrollbar-track",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}