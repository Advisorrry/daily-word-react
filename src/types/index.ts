import { IWords } from '../store/wordsApi'

export interface RootState {
  randomNumberState: RandomNumberState
  wordsApi: IWords[]
}
export interface RandomNumberState {
  value: number
}
