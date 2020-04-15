import firebase from 'firebase/app'
import firebaseConfig from './firebaseConfig'

const initialValue = null

const firebaseReducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return firebase.initializeApp(firebaseConfig)
    default:
      throw new Error()
  }
}

export default [firebaseReducer, initialValue]
