import React, { useContext, useState } from 'react'
import { WordContext } from './SpellingTest'

const SpellingTestWord = () => {
  const [word] = useContext(WordContext)
  const [correct, setCorrect] = useState(false)
  const playWord = (e) => {
    e.preventDefault()
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(word.data().name))
  }
  const [answer, setAnswer] = useState('')
  const checkWord = (e) => {
    e.preventDefault()
    setCorrect(answer === word.data().name)
  }
  return (
    <>
      <form>
        <input onClick={playWord} type="submit" value="play" />
        <input
          onChange={(e) => setAnswer(e.target.value)}
          type="text"
          value={answer}
        />
        <input onClick={checkWord} type="submit" value="check"></input>
        <input type="checkbox" checked={correct} readOnly />
      </form>
    </>
  )
}

export default SpellingTestWord
