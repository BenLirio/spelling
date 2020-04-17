import React, { useContext, useEffect, useState } from 'react'
import FireBaseContext from './context/Firebase/FirebaseContext'
import FirestoreContext from './context/Firebase/Firestore/FirestoreContext'
import SpellingSets from './components/SpellingSets'

const App = () => {
  const dispatchFirebase = useContext(FireBaseContext)[1]
  const [firestore] = useContext(FirestoreContext)
  useEffect(() => {
    dispatchFirebase({ type: 'init' })
  }, [])

  const [word, setWord] = useState('')
  const [set, setSet] = useState('')

  const addWord = (e) => {
    e.preventDefault()
    if (!firestore) return
    firestore.collection('words').doc(word).set({}, { merge: true })
  }
  const addSet = (e) => {
    e.preventDefault()
    if (!firestore) return
    firestore
      .collection('sets')
      .add({ name: set, words: ['walk', 'run', 'jog'] })
  }

  return (
    <>
      <form>
        <input
          onChange={(e) => setWord(e.target.value)}
          type="text"
          value={word}
        />
        <button onClick={addWord} type="submit">
          Add Word
        </button>
      </form>
      <form>
        <input
          onChange={(e) => setSet(e.target.value)}
          type="text"
          value={set}
        />
        <button onClick={addSet} type="submit">
          Add Set
        </button>
      </form>
      <p></p>
      <SpellingSets />
    </>
  )
}

export default App
