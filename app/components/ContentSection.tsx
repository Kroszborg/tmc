import React from 'react'

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentSection({ children, className = '' }: ContentSectionProps) {
  return (
    <div className={`bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  )
}

