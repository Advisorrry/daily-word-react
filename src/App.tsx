import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GBimage } from './components/BGimage'
import { Header } from './components/Header'
import { useMobileAlert } from './hooks/useMobileAlert'
import { MainLayout } from './layouts/MainLayout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'

import './styles/index.scss'

const App: React.FC<{}> = () => {
  const mobileAlert = useMobileAlert()
  return (
    <>
      <MainLayout>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </MainLayout>
      <GBimage imgName={'bg1.jpg'} />
      {mobileAlert}
    </>
  )
}

export default App
