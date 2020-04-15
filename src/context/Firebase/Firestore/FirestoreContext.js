import React, { useReducer, useContext, useEffect, createContext } from 'react'
import firestoreReducer from './firestoreReducer'
import FireBaseContext from '../FirebaseContext'
import { WordsContextProvider } from './Words/WordsContext'

const FirestoreContext = createContext()

export const FirestoreContextProvider = ({ children }) => {
  const [firestore, dispatchFirestore] = useReducer(...firestoreReducer)
  const [firebase] = useContext(FireBaseContext)
  useEffect(() => {
    if (firebase) {
      dispatchFirestore({ type: 'init', payload: firebase })
    }
  }, [firebase])
  return (
    <FirestoreContext.Provider value={[firestore, dispatchFirestore]}>
      <WordsContextProvider>{children}</WordsContextProvider>
    </FirestoreContext.Provider>
  )
}

export default FirestoreContext
