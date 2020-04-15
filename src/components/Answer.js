import React, { useState, useEffect } from 'react'

const Answer = ({ word }) => {
  const [answer, setAnswer] = useState('')
  const [result, setResult] = useState('')
  useEffect(() => {
    setResult('')
  }, [word])
  const editAnswer = (e) => {
    setAnswer(e.target.value)
  }
  const onCheck = (e) => {
    e.preventDefault()
    if (word === answer) {
      setResult('correct')
    } else {
      setResult('incorrect')
    }
  }
  return (
    <>
      <form>
        <input onChange={editAnswer} type="text" value={answer} />
        <input onClick={onCheck} type="submit" value="check" />
      </form>
      <p>
        Result:{' '}
        <span style={{ color: result === 'correct' ? '#00aa00' : '#aa0000' }}>
          {result}
        </span>
      </p>
    </>
  )
}

export default Answer
