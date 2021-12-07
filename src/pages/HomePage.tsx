import React from 'react'
import { Header } from '../components/Header'
import { WordsList } from '../components/WordsList'
import { useWords } from '../hooks/useWords'
import { MainLayout } from '../layouts/MainLayout'

export const HomePage: React.FC = () => {
  const { data } = useWords()
  console.log(data)

  return (
    <>
      <MainLayout>
        <Header />
        <WordsList words={data} />
      </MainLayout>
      <img src={process.env.PUBLIC_URL + 'bg1.jpg'} className="mx-auto container" alt="bg" />
    </>
  )
}
