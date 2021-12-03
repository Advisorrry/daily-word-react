import React from 'react'
import { Header } from '../components/Header'
import { MainLayout } from '../layouts/MainLayout'

export const HomePage = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex items-center justify-between">
          <h2 className="font-extrabold tracking-widest text-purple-600 text-4xl ">
            <span className="block text-indigo-700 divide-y divide-fuchsia-300">above</span>
            <span className="text-indigo-300 text-xs"> prep. Adverb </span>
            <span className="text-indigo-400 text-right text-lg"> B1 </span>
            <span className="bg-green-200 rounded-full py-4 px-2">выше</span>
          </h2>
        </div>
      </MainLayout>
    </>
  )
}
