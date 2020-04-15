import React, { useState, useEffect } from 'react'
import PlayWord from './PlayWord'
import Answer from './Answer'
import Reveal from './Reveal'

const SpellingTest = ({ testWords }) => {
  const [currentWord, setCurrentWord] = useState(0)
  const [word, setWord] = useState(null)
  useEffect(() => {
    if (testWords[currentWord]) {
      setWord(testWords[currentWord][0])
    }
  }, [testWords, currentWord])
  const next = () => {
    setCurrentWord(currentWord + 1)
  }
  const prev = () => {
    setCurrentWord(currentWord - 1)
  }

  return (
    <div>
      <button onClick={prev} disabled={currentWord <= 0}>
        prev
      </button>
      <PlayWord word={word} />
      <button onClick={next} disabled={currentWord >= testWords.length - 1}>
        next
      </button>
      <Answer word={word} />
      <Reveal word={word} />
    </div>
  )
}

export default SpellingTest
