import 'firebase/functions'
const initialValue = null

const cloudFunctionsReducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return action.payload.functions()
    default:
      throw new Error()
  }
}
export default [cloudFunctionsReducer, initialValue]
