import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const logo = process.env.PUBLIC_URL + 'logo.png'
const about = process.env.PUBLIC_URL + 'about.png'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex justify-between items-center p-2">
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <div className="font-bold font-sans antialiased">Daily Word</div>
      <NavLink to="/about" className={styles.logo}>
        <img src={about} alt="logo" />
      </NavLink>
    </header>
  )
}
