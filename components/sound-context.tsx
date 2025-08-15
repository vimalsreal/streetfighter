"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type SoundContextType = {
  isMuted: boolean
  toggleMute: () => void
}

const SoundContext = createContext<SoundContextType>({
  isMuted: false,
  toggleMute: () => {},
})

export const useSoundContext = () => useContext(SoundContext)

export function SoundProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    const audioElement = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/John-Cena-Theme-mRWzCc16D78WE7ZsdK8aWMSNUJ5Wo5.mp3")
    audioElement.loop = true
    setAudio(audioElement)

    // Clean up on unmount
    return () => {
      if (audioElement) {
        audioElement.pause()
        audioElement.src = ""
      }
    }
  }, [])

  useEffect(() => {
    if (!audio) return

    if (isMuted) {
      audio.pause()
    } else {
      // Only play if the document has been interacted with
      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented, we'll need user interaction
          console.log("Audio playback was prevented:", error)
        })
      }
    }
  }, [audio, isMuted])

  const toggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  return <SoundContext.Provider value={{ isMuted, toggleMute }}>{children}</SoundContext.Provider>
}
