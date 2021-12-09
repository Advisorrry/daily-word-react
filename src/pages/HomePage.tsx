import React from 'react'
import { Header } from '../components/Header'
import { WordsList } from '../components/WordsList'
import { useWords } from '../hooks/useWords'
import { MainLayout } from '../layouts/MainLayout'

export const HomePage: React.FC = () => {
  const { data, isLoading } = useWords()

  return (
    <>
      <MainLayout>
        <Header />
        <WordsList words={data} isLoading={isLoading} />
      </MainLayout>
      <img src={process.env.PUBLIC_URL + 'bg1.jpg'} className="mx-auto container" alt="bg" />
    </>
  )
}
