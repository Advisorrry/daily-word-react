import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { wordsApi } from './wordsApi'

const rootReducer = combineReducers({})

export const store = configureStore({
  reducer: {
    [wordsApi.reducerPath]: wordsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wordsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)