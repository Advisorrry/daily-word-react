import React from 'react'
import { Header } from './components/Header'
import { MainLayout } from './layouts/MainLayout'
import './styles/index.scss'

const App: React.FC<{}> = () => {
  return (
    <>
      <MainLayout>
        <Header />
      </MainLayout>
    </>
  )
}

export default App
