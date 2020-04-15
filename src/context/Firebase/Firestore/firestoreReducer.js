import 'firebase/firestore'
const initialValue = null
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return action.payload.firestore()
    default:
      throw new Error()
  }
}
export default [firestoreReducer, initialValue]
