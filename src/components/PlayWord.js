import React, { useEffect, useContext, useState } from 'react'
import CloudFunctionsContext from '../context/Firebase/CloudFunctions/CloudFunctionsContext'
let source = null
const PlayWord = ({ word }) => {
  const [audioCtx, setAudioCtx] = useState(
    new (window.AudioContext || window.webkitAudioContext)()
  )
  const [audioBuffer, setAudioBuffer] = useState()
  const [cloudFunctions] = useContext(CloudFunctionsContext)
  useEffect(() => {
    if (cloudFunctions && word) {
      cloudFunctions
        .httpsCallable('getAudio')({ word })
        .then((res) => {
          const audioContent = Buffer.from(res.data, 'base64')
          audioCtx
            .decodeAudioData(audioContent.buffer)
            .then((buffer) => {
              setAudioBuffer(buffer)
            })
            .catch(console.log)
        })
        .catch(console.log)
    }
  }, [cloudFunctions, word])
  const play = () => {
    if (source) {
      source.stop()
    }
    source = audioCtx.createBufferSource()
    source.buffer = audioBuffer
    source.connect(audioCtx.destination)
    source.start(0)
  }
  return <button onClick={play}>play</button>
}

export default PlayWord
