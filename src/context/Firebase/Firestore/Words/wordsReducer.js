const initialValue = []
const wordsReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.payload
    default:
      throw new Error()
  }
}
export default [wordsReducer, initialValue]
