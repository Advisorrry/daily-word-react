import React from 'react'
import { Button } from '../components/Button'
import { WordsList } from '../components/WordsList'
import { randomValue } from '../hooks/useRandomValue'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { getRandomNumber } from '../selectors'
import { randomNumberByRange } from '../store/slices/randomNumber'
import { useGetWordsQuery } from '../store/wordsApi'

export const HomePage: React.FC = () => {
  const { data, isLoading } = useGetWordsQuery('')
  const { value } = useAppSelector(getRandomNumber)
  const dispatch = useAppDispatch()

  const handleClick = React.useCallback(() => {
    const _ = randomValue(0, 2999)

    dispatch(randomNumberByRange(_))
  }, [dispatch])

  return (
    <>
      <WordsList words={data} isLoading={isLoading} randomNumber={value} />
      <div className="flex justify-end font-extrabold divide-fuchsia-300" onClick={handleClick}>
        <Button>Next word</Button>
      </div>
    </>
  )
}
