import React, { useContext, useEffect, useState } from 'react'
import FirestoreContext from '../context/Firebase/Firestore/FirestoreContext'

const SpellingSets = () => {
  const [firestore] = useContext(FirestoreContext)
  const [spellingSet, setSpellingSet] = useState({
    data: () => {
      return {
        name: null,
        words: [],
      }
    },
  })
  useEffect(() => {
    if (!firestore) return
    firestore
      .collection('sets')
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.forEach(setSpellingSet)
      })
  }, [firestore])
  const [newWord, setNewWord] = useState('')
  const addWord = (e) => {
    e.preventDefault()
    firestore
      .collection('sets')
      .doc(spellingSet.id)
      .set({ words: [...spellingSet.data().words, newWord] }, { merge: true })
  }

  return (
    <>
      <button>{spellingSet.data().name}</button>
      {spellingSet.data().words.map((word) => {
        return <p key={word}>{word}</p>
      })}
      <form>
        <input
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          type="text"
        />
        <button onClick={addWord}>Add Word to set</button>
      </form>
    </>
  )
}

export default SpellingSets
