import React from 'react'
import styles from './Header.module.scss'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex justify-between items-center p-2">
      <div className={styles.logo}>
        <img className="" src={process.env.PUBLIC_URL + 'logo.png'} alt="logo" />
      </div>
      <div className="font-bold font-sans antialiased">Daily Word</div>
      <div>opt</div>
    </div>
  )
}
