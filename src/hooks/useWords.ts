import React from 'react'
import axios from 'redaxios'

export interface IWords {
  id: string
  en_word: string
  ru_word: string
  part_speech: string
  level: string
}

export const useWords = () => {
  const [data, setData] = React.useState<IWords[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  //const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    const getWords = async () => {
      try {
        const response = await axios.get('http://localhost:3000/db.json')

        const { words } = await response.data

        setData(words)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }
    getWords()
  }, [])
  return {
    data,
    isLoading,
  }
}
