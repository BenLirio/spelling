import React, { useContext, useEffect } from 'react'
import FirestoreContext from '../context/Firebase/Firestore/FirestoreContext'

const SpellingSets = () => {
  const firestore = useContext(FirestoreContext)
  useEffect(() => {
    if (!firestore) return
    firestore.collection('sets').onSnapshot((snapshot) => {
      console.log('snapshot', snapshot)
    })
  }, [firestore])
  return <div>Spelling sets</div>
}

export default SpellingSets
