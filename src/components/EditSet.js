import React, { useContext, useState, useEffect } from 'react'
import { SpellingSetContext } from './SpellingSets'
import FireBaseContext from '../context/Firebase/FirebaseContext'
import FirestoreContext from '../context/Firebase/Firestore/FirestoreContext'
import { WordsContext } from './ShowSet'

const EditSet = () => {
  const [spellingSet] = useContext(SpellingSetContext)
  const [wordInput, setWordInput] = useState('')
  const [firestore] = useContext(FirestoreContext)
  const [words] = useContext(WordsContext)

  if (!spellingSet) return <h3>Select a set</h3>
  const addWord = (e) => {
    e.preventDefault()
    if (!firestore) return
    firestore
      .collection(`spellingSet/${spellingSet.id}/words`)
      .add({ name: wordInput })
  }

  return (
    <>
      {Object.values(words).map((word) => {
        return <p key={word.id}>{word.data().name}</p>
      })}
      <form>
        <input
          onChange={(e) => setWordInput(e.target.value)}
          value={wordInput}
          type="text"
        ></input>
        <input onClick={addWord} type="submit" value="Add word" />
      </form>
      <hr />
    </>
  )
}

export default EditSet
