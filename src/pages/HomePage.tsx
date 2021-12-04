import React from 'react'
import { Header } from '../components/Header'
import { WordsList } from '../components/WordsList'
import { MainLayout } from '../layouts/MainLayout'

export const HomePage = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <WordsList />
      </MainLayout>
      <img src={process.env.PUBLIC_URL + 'bg1.jpg'} className="mx-auto container" alt="bg" />
    </>
  )
}
