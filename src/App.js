import React, { useContext, useEffect } from 'react'
import FireBaseContext from './context/Firebase/FirebaseContext'
import WordsContext from './context/Firebase/Firestore/Words/WordsContext'
import SpellingTest from './components/SpellingTest'

const App = () => {
  const dispatchFirebase = useContext(FireBaseContext)[1]
  const [words] = useContext(WordsContext)
  useEffect(() => {
    dispatchFirebase({ type: 'init' })
  }, [])
  return (
    <>
      <SpellingTest testWords={Object.entries(words)} />
    </>
  )
}

export default App
