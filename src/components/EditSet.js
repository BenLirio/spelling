import React, { useContext, useState, useEffect } from 'react'
import { SpellingSetContext } from './SpellingSets'
import FireBaseContext from '../context/Firebase/FirebaseContext'
import FirestoreContext from '../context/Firebase/Firestore/FirestoreContext'

const EditSet = () => {
  const [words, setWords] = useState({})
  const [spellingSet] = useContext(SpellingSetContext)
  const [wordInput, setWordInput] = useState('')
  const [firestore] = useContext(FirestoreContext)
  useEffect(() => {
    if (!spellingSet) return
    if (!firestore) return
    setWords({})
    firestore
      .collection(`spellingSet/${spellingSet.id}/words`)
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          setWords((oldWords) => {
            return { ...oldWords, [doc.id]: doc }
          })
        })
      })
  }, [spellingSet])

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
      <h3>Set: {spellingSet.data().name}</h3>
      <button>Test</button>
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
