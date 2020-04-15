import React, { useReducer, createContext } from 'react'
import firebaseReducer from './firebaseReducer'
import { FirestoreContextProvider } from './Firestore/FirestoreContext'

const FireBaseContext = createContext()

export const FirebaseContextProvider = ({ children }) => {
  const [firebase, dispatchFirebase] = useReducer(...firebaseReducer)
  return (
    <FireBaseContext.Provider value={[firebase, dispatchFirebase]}>
      <FirestoreContextProvider>{children}</FirestoreContextProvider>
    </FireBaseContext.Provider>
  )
}

export default FireBaseContext
