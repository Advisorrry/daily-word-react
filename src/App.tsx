import React from 'react'
import { AppRouter } from './components/AppRouter'
import { Header } from './components/Header'
import { MainLayout } from './layouts/MainLayout'
import './styles/index.scss'

const App: React.FC<{}> = () => {
  return (
    <>
     <AppRouter />
    </>
  )
}

export default App
