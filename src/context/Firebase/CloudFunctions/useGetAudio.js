import React, {
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react'
import CloudFunctionsContext from './CloudFunctionsContext'

const useGetAudio = () => {
  const [cloudFunctions] = useContext(CloudFunctionsContext)
  const audioCtx = useMemo(
    () => new (window.AudioContext || window.webkitAudioContext)(),
    []
  )
  const getAudio2 = useCallback(
    async (word) => {
      if (cloudFunctions) {
        let res
        try {
          res = await cloudFunctions.httpsCallable('getAudio')({
            word,
          })
          const audioContent = Buffer.from(res.data, 'base64')
          const buffer = await audioCtx.decodeAudioData(audioContent.buffer)
          return buffer
        } catch (err) {
          return null
        }
      } else {
        throw new Error('getAudio has not initialized')
      }
    },
    [cloudFunctions]
  )
  return getAudio2
}

export default useGetAudio
