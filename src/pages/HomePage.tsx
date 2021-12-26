import React from 'react'
import { Button } from '../components/Button'
import { WordsList } from '../components/WordsList'
import { useAppSelector } from '../hooks/useRedux'
import { getRandomNumber } from '../selectors'
import { useGetWordsQuery } from '../store/wordsApi'

export const HomePage: React.FC = () => {
  const { data, isLoading } = useGetWordsQuery('')
  const { value } = useAppSelector(getRandomNumber)

  return (
    <>
      <WordsList words={data} isLoading={isLoading} randomNumber={value} />
      <div className="flex justify-end font-extrabold divide-fuchsia-300 ">
        <Button>Next word</Button>
      </div>
    </>
  )
}
