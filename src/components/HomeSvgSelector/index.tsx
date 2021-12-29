import React from 'react'

interface HomeSvgSelectorProps {
  id: SvgName
}

export enum SvgName {
  ArroyRight = 'ArroyRight',
  HeaderLogo = 'HeaderLogo',
  AboutPage = 'AboutPage',
}

export const HomeSvgSelector = ({ id }: HomeSvgSelectorProps) => {
  switch (id) {
    case SvgName.ArroyRight:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline ml-2 w-6 stroke-current text-white stroke-2"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )

    default:
      return <svg></svg>
  }
}
