import React from 'react'

interface MainLayoutProps {
  children?: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="text-white font-mono container mx-auto h-full bg-gradient-to-t from-yellow-150 to-indigo-200 text-lg">
      <div>{children}</div>
    </div>
  )
}
