import React, { useEffect, useState, useMemo } from 'react'
import useGetAudio from '../context/Firebase/CloudFunctions/useGetAudio'
let source = null
const PlayWord = ({ word }) => {
  const audioCtx = useMemo(
    () => new (window.AudioContext || window.webkitAudioContext)(),
    []
  )
  const [audioBuffer, setAudioBuffer] = useState()
  const getAudio = useGetAudio()

  useEffect(() => {
    if (word) {
      getAudio(word).then(setAudioBuffer).catch(console.error)
    }
  }, [word])
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
