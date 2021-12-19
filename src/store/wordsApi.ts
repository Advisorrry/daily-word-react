import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IWords {
  id: string
  en_word: string
  ru_word: string
  part_speech: string
  level: string
}

export const wordsApi = createApi({
  reducerPath: 'wordsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dailyword-react.web.app/' }),
  endpoints: (builder) => ({
    getWords: builder.query<IWords[], string>({
      query: () => ({
        url: 'db.json',
      }),
    }),
  }),
})

export const { useGetWordsQuery } = wordsApi
