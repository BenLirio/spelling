import React, { createContext, useReducer, useEffect, useContext } from 'react'
import cloudFunctionsReducer from './cloudFunctionsReducer'
import FirebaseContext from '../FirebaseContext'

const CloudFunctionsContext = createContext()

export const CloudFunctionsContextProvider = ({ children }) => {
  const [cloudFunctions, dispatchCloudFunctions] = useReducer(
    ...cloudFunctionsReducer
  )
  const [firebase] = useContext(FirebaseContext)
  useEffect(() => {
    if (firebase) {
      dispatchCloudFunctions({ type: 'init', payload: firebase })
    }
  }, [firebase])
  return (
    <CloudFunctionsContext.Provider
      value={[cloudFunctions, dispatchCloudFunctions]}
    >
      {children}
    </CloudFunctionsContext.Provider>
  )
}

export default CloudFunctionsContext
