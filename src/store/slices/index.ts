import { combineReducers, Reducer } from 'redux'
import { wordsApi } from '../wordsApi'

import randomNumberSlice from './randomNumber'

const rootReducer: Reducer = combineReducers({
  randomNumberSlice,
  [wordsApi.reducerPath]: wordsApi.reducer,
})

export default rootReducer
