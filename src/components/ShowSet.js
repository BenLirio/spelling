import React, { useState, useContext, useEffect, createContext } from 'react'
import EditSet from './EditSet'
import SpellingTest from './SpellingTest'
import { SpellingSetContext } from './SpellingSets'
import FirestoreContext from '../context/Firebase/Firestore/FirestoreContext'

export const WordsContext = createContext()

const ShowSet = () => {
  const [view, setView] = useState('')
  const [words, setWords] = useState({})
  const [firestore] = useContext(FirestoreContext)
  const [spellingSet] = useContext(SpellingSetContext)

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

  useEffect(() => {
    setView('')
  }, [spellingSet])
  if (!spellingSet) return null
  return (
    <>
      <h3>Selected Set: {spellingSet.data().name}</h3>
      <button onClick={() => setView('EditSet')}>Edit</button>
      <button onClick={() => setView('SpellingTest')}>Test</button>
      <WordsContext.Provider value={[words]}>
        {view === 'EditSet' && <EditSet />}
        {view === 'SpellingTest' && <SpellingTest />}
      </WordsContext.Provider>
    </>
  )
}

export default ShowSet
