import React, { useContext } from 'react'
import { SpellingSetContext } from './SpellingSets'

const SpellingSet = () => {
  const [spellingSet, selectSpellingSet] = useContext(SpellingSetContext)
  return (
    <>
      <button onClick={() => selectSpellingSet(spellingSet.id)}>
        {spellingSet.data().name}
      </button>
    </>
  )
}

export default SpellingSet
