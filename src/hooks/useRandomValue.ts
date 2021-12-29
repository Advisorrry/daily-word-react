import { useAppDispatch } from './useRedux'
import { randomNumberByRange } from '../store/slices/randomNumber'

export const randomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

export const useRandomValue = (min: number, max: number) => {
  const dispatch = useAppDispatch()

  const _ = randomValue(min, max)

  dispatch(randomNumberByRange(_))
}
