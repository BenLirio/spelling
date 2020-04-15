import React, { useContext, useState, useEffect } from 'react'
import WordsContext from '../context/Firebase/Firestore/Words/WordsContext'
import wordsReducer from '../context/Firebase/Firestore/Words/wordsReducer'

const SpellingTest = ({ testWords }) => {
  const [currentWord, setCurrentWord] = useState(0)
  const next = () => {
    setCurrentWord(currentWord + 1)
  }
  const prev = () => {
    setCurrentWord(currentWord - 1)
  }
  const playSound = () => {
    console.log('play ' + testWords[currentWord][0])
  }
  return (
    <div>
      <button onClick={prev} disabled={currentWord <= 0}>
        prev
      </button>

      <button onClick={playSound}>
        {testWords[currentWord] && testWords[currentWord][0]}
      </button>
      <button onClick={next} disabled={currentWord >= testWords.length - 1}>
        next
      </button>
    </div>
  )
}

export default SpellingTest
