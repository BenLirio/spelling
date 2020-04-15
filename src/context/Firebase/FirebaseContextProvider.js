import React, { useReducer } from 'react'
import { FireBaseContext } from '..'
import firebaseReducer from './firebaseReducer'

const FirebaseContextProvider = ({ children }) => {
  const [firebase, dispatchFirebase] = useReducer(...firebaseReducer)
  return (
    <FireBaseContext.Provider value={[firebase, dispatchFirebase]}>
      {children}
    </FireBaseContext.Provider>
  )
}

export default FirebaseContextProvider
