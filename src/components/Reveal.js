import React, { useState, useEffect } from 'react'

const Reveal = ({ word }) => {
  const [show, setShow] = useState(false)
  const onReveal = () => {
    setShow(!show)
  }
  useEffect(() => {
    setShow(false)
  }, [word])
  return (
    <>
      <button onClick={onReveal}>{show ? 'hide' : 'reveal'}</button>
      <p>Correct Spelling: {show && word}</p>
    </>
  )
}

export default Reveal
