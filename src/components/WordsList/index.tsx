import clsx from 'clsx'
import React from 'react'
import { IWords } from '../../hooks/useWords'

interface WordsListProps {
  words: IWords[]
}

export const WordsList: React.FC<WordsListProps> = ({ words }) => {
  return (
    <div
      className={clsx('max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ', 'layout-height')}
    >
      <h2 className="font-extrabold w-full tracking-widest text-purple-600 text-4xl ">
        <div className="mb-5 px-1 flex justify-around items-center divide-y divide-fuchsia-300">
          <span className="text-indigo-700 ">{'words.en_word'}</span>
          <span className="text-indigo-400 text-lg">lvl: {'words.level'} </span>
        </div>
        <div className="flex justify-end px-3">
          <span className="bg-green-200 rounded-full p-4 text-2xl ">{'words.ru_word'}</span>
        </div>
        <span className="block text-indigo-300 text-xs mt-5">
          часть речи: {'words.part_speech'}
        </span>
      </h2>
    </div>
  )
}
