import firebase from 'firebase/app'
import firebaseConfig from './firebaseConfig'

const initialValue = firebase.initializeApp(firebaseConfig)

const firebaseReducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error()
  }
}

export default [firebaseReducer, initialValue]
