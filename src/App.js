import React, { useContext, useEffect } from 'react'
import FireBaseContext from './context/Firebase/FirebaseContext'
import WordsContext from './context/Firebase/Firestore/Words/WordsContext'

const App = () => {
  const dispatchFirebase = useContext(FireBaseContext)[1]
  useEffect(() => {
    dispatchFirebase({ type: 'init' })
  }, [])
  return <div>App</div>
}

export default App
