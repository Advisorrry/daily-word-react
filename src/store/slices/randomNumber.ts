import { RandomNumberState } from './../../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: RandomNumberState = {
  value: 0,
}

export const randomNumberSlice = createSlice({
  name: 'randomNumber',
  initialState,
  reducers: {
    randomNumberByRange: (state, { payload }: PayloadAction<number>) => {
      state.value = payload
    },
  },
})

export const { randomNumberByRange } = randomNumberSlice.actions

export default randomNumberSlice.reducer
