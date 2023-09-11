import { VoiceLine } from '@/@types'
import { useEffect, useState } from 'react'

export const useVoice = (voiceLine: VoiceLine | undefined) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [agentVoice, setAgentVoice] = useState<HTMLAudioElement>()
  const voice = voiceLine?.mediaList[0].wave

  useEffect(() => {
    if (voice && voice.length > 0) {
      const newAgentVoice = new Audio(voice)
      setAgentVoice(newAgentVoice)
    }
  }, [voice])

  const handleVoiceAngent = () => {
    if (isPlaying) {
      agentVoice?.pause()
    } else {
      agentVoice?.play()
    }
    setIsPlaying(!isPlaying)
  }

  return {
    handleVoiceAngent,
    agentVoice,
  }
}
