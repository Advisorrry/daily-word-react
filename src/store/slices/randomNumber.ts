import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface randomNumberState {
  value: number
}

const initialState: randomNumberState = {
  value: 1242,
}

export const randomNumberSlice = createSlice({
  name: 'randomNumber',
  initialState,
  reducers: {
    randomNumberByRange: (state, {payload}: PayloadAction<number>) => {
      state.value = payload
    },
  },
})

export const { randomNumberByRange } = randomNumberSlice.actions

export default randomNumberSlice.reducer