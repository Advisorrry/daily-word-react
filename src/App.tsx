import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GBimage } from './components/BGimage'
import { Header } from './components/Header'
import { useNonMobileAlert } from './hooks/useNonMobileAlert'
import { useRandomValue } from './hooks/useRandomValue'
import { MainLayout } from './layouts/MainLayout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'

import './styles/index.scss'

const App: React.FC<{}> = () => {
  const mobileAlert = useNonMobileAlert()

  useRandomValue(0, 2999)
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
