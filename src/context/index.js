import React from 'react'
import { FirebaseContextProvider } from './Firebase/FirebaseContext'

const RootContext = ({ children }) => {
  return <FirebaseContextProvider>{children}</FirebaseContextProvider>
}
export default RootContext
