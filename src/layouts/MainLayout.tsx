import React from 'react'

interface MainLayoutProps {
  children?: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div className="text-white font-mono container mx-auto bg-gray-800 h-full text-lg">
    <div>{children}</div>
    <img src={process.env.PUBLIC_URL + 'bg1.png'} className='bg' alt='bg' />
  </div>
}
