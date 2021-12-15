import { useAppDispatch } from './useRedux'
import { randomNumberByRange } from '../store/slices/randomNumber'

export const useRandomValue = (min: number, max: number) => {
  const dispatch = useAppDispatch()

  const _ = Math.floor(Math.random() * (max - min + 1)) + min

  dispatch(randomNumberByRange(_))
}
