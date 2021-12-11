import React from 'react'
import { Header } from '../components/Header'
import { WordsList } from '../components/WordsList'
import { MainLayout } from '../layouts/MainLayout'
import { useGetWordsQuery } from '../store/wordsApi'

export const HomePage: React.FC = () => {
  const { data, isLoading } = useGetWordsQuery(' ')
  const [randomNumber, setrandomNumber] = React.useState(0)

  React.useEffect(() => {
    function selfRandom(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    setrandomNumber(selfRandom(0, 2999))
  }, [])

  return (
    <>
      <MainLayout>
        <Header />
        <WordsList words={data} isLoading={isLoading} randomNumber={randomNumber} />
      </MainLayout>
      <img src={process.env.PUBLIC_URL + 'bg1.jpg'} className="mx-auto container" alt="bg" />
    </>
  )
}
