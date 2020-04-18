import React, { createContext, useContext, useEffect, useState } from 'react'
import FirestoreContext from '../context/Firebase/Firestore/FirestoreContext'
import ShowSet from './ShowSet'
import SpellingSet from './SpellingSet'

export const SpellingSetsContext = createContext()
export const SpellingSetContext = createContext()
const SpellingSets = () => {
  const [firestore] = useContext(FirestoreContext)
  const [spellingSets, setSpellingSets] = useState({})
  useEffect(() => {
    if (!firestore) return
    firestore.collection('spellingSet').onSnapshot((snapshot) => {
      snapshot.forEach((data) => {
        setSpellingSets((sets) => {
          return { ...sets, [data.id]: data }
        })
      })
    })
  }, [firestore])
  const [spellingSetInput, setSpellingSetInput] = useState('')
  const addWord = (e) => {
    e.preventDefault()
    if (!firestore) return
    firestore.collection('spellingSet').add({ name: spellingSetInput })
  }
  const [currentSet, setCurrentSet] = useState(null)
  const selectSet = (id) => {
    setCurrentSet(spellingSets[id])
  }
  return (
    <>
      <SpellingSetsContext.Provider value={[spellingSets, SpellingSetsContext]}>
        <h2>Spelling Sets</h2>
        {Object.values(spellingSets).map((set) => {
          return (
            <SpellingSetContext.Provider key={set.id} value={[set, selectSet]}>
              <SpellingSet />
            </SpellingSetContext.Provider>
          )
        })}
        <form>
          <input
            value={spellingSetInput}
            onChange={(e) => setSpellingSetInput(e.target.value)}
            type="text"
          />
          <button onClick={addWord}>Add Set</button>
        </form>
        <hr />
        <SpellingSetContext.Provider value={[currentSet]}>
          <ShowSet />
        </SpellingSetContext.Provider>
      </SpellingSetsContext.Provider>
    </>
  )
}

export default SpellingSets
