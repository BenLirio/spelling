import React, { createContext } from 'react'
import FirebaseContextProvider from './Firebase/FirebaseContextProvider'

export const FireBaseContext = createContext()

const RootContext = ({ children }) => {
  return <FirebaseContextProvider>{children}</FirebaseContextProvider>
}
export default RootContext
