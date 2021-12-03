import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutPage } from '../pages/AboutPage'
import { HomePage } from '../pages/HomePage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  )
}
