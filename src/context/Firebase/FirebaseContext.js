import React, { useReducer, createContext } from 'react'
import firebaseReducer from './firebaseReducer'
import { FirestoreContextProvider } from './Firestore/FirestoreContext'
import { CloudFunctionsContextProvider } from './CloudFunctions/CloudFunctionsContext'

const FirebaseContext = createContext()

export const FirebaseContextProvider = ({ children }) => {
  const [firebase, dispatchFirebase] = useReducer(...firebaseReducer)
  return (
    <FirebaseContext.Provider value={[firebase, dispatchFirebase]}>
      <FirestoreContextProvider>
        <CloudFunctionsContextProvider>
          {children}
        </CloudFunctionsContextProvider>
      </FirestoreContextProvider>
    </FirebaseContext.Provider>
  )
}

export default FirebaseContext
