import React, { useContext, useEffect, useState } from 'react'
import FireBaseContext from './context/Firebase/FirebaseContext'
import FirestoreContext from './context/Firebase/Firestore/FirestoreContext'
import SpellingSets from './components/SpellingSets'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const dispatchFirebase = useContext(FireBaseContext)[1]
  const [firestore] = useContext(FirestoreContext)
  useEffect(() => {
    dispatchFirebase({ type: 'init' })
  }, [])

  return (
    <BrowserRouter>
      <h1>Spelling</h1>
      <hr />
      <SpellingSets />
    </BrowserRouter>
  )
}

export default App
