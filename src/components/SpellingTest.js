import React, { useContext, useEffect, useState, createContext } from 'react'
import { WordsContext } from './ShowSet'
import SpellingTestWord from './SpellingTestWord'

export const WordContext = createContext()

const SpellingTest = () => {
  const [words] = useContext(WordsContext)

  useEffect(() => {
    if (!words) return
    console.log('words', Object.values(words).length)
  }, [words])
  return (
    <>
      {Object.values(words).map((word) => {
        return (
          <WordContext.Provider key={word.id} value={[word]}>
            <SpellingTestWord />
          </WordContext.Provider>
        )
      })}
    </>
  )
}

export default SpellingTest
