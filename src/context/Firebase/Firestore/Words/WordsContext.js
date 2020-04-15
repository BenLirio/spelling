import React, { createContext, useReducer, useContext, useEffect } from 'react'
import wordsReducer from './wordsReducer'
import FirestoreContext from '../FirestoreContext'

const WordsContext = createContext()

export const WordsContextProvider = ({ children }) => {
  const [words, dispatchWords] = useReducer(...wordsReducer)
  const [firestore] = useContext(FirestoreContext)
  useEffect(() => {
    if (firestore) {
      const getWords = async () => {
        try {
          const snapshot = await firestore.collection('words').get()
          const payload = {}
          snapshot.forEach((doc) => {
            payload[doc.id] = doc.data()
          })
          dispatchWords({ type: 'set', payload })
        } catch (e) {
          throw new Error(e)
        }
      }
      getWords()
    }
  }, [firestore])
  return (
    <WordsContext.Provider value={[words, dispatchWords]}>
      {children}
    </WordsContext.Provider>
  )
}

export default WordsContext
