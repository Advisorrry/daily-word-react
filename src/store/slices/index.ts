import { combineReducers, Reducer } from 'redux'
import { wordsApi } from '../wordsApi'

import randomNumberReducer from './randomNumber'

const rootReducer: Reducer = combineReducers({
  randomNumberState: randomNumberReducer,
  [wordsApi.reducerPath]: wordsApi.reducer,
})

export default rootReducer
