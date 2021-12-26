import React from 'react'
import { HomeSvgSelector, SvgName } from '../HomeSvgSelector'

interface ButtonProps {
  children: React.ReactNode
}

export const Button = React.memo(({ children }: ButtonProps) => {
  return (
    <button className="flex bg-indigo-300 rounded-full text-white text-xl px-7 py-4 transition duration-300 ease-in-out hover:bg-indigo-500 mr-6 items-center">
      {children}
      <HomeSvgSelector id={SvgName.ArroyRight} />
    </button>
  )
})
