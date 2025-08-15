"use client"

import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from "react"

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
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isInitializedRef = useRef(false)

  useEffect(() => {
    if (isInitializedRef.current || audioRef.current) return

    const audioElement = new Audio(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/John-Cena-Theme-mRWzCc16D78WE7ZsdK8aWMSNUJ5Wo5.mp3",
    )
    audioElement.loop = true
    audioElement.volume = 0.5 // Set reasonable volume level
    audioRef.current = audioElement
    isInitializedRef.current = true

    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
        audioRef.current = null
      }
      isInitializedRef.current = false
    }
  }, [])

  useEffect(() => {
    if (!audioRef.current) return

    if (isMuted) {
      audioRef.current.pause()
    } else {
      if (audioRef.current.paused) {
        const playPromise = audioRef.current.play()

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("[v0] Audio playback was prevented:", error)
          })
        }
      }
    }
  }, [isMuted])

  const toggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  return <SoundContext.Provider value={{ isMuted, toggleMute }}>{children}</SoundContext.Provider>
}
