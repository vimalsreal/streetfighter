"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const [showContent, setShowContent] = useState(false)
  const [showPCSuggestion, setShowPCSuggestion] = useState(false)

  const handleStartGame = () => {
    if (window.innerWidth <= 768) {
      setShowPCSuggestion(true)
    } else {
      router.push("/select")
    }
  }

  const handleContinueOnMobile = () => {
    setShowPCSuggestion(false)
    router.push("/select")
  }

  useEffect(() => {
    setShowContent(true)

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleStartGame()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  if (!showContent) return null

  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col items-center justify-between relative overflow-hidden bg-black px-4 py-4 pb-safe">
      {showPCSuggestion && (
        <div className="pc-suggestion fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 border border-yellow-500/30 rounded-lg backdrop-blur-sm p-6">
          <h3 className="text-xl text-white mb-4">Best Experience on PC!</h3>
          <p className="text-base text-white mb-6">
            This fighting game is optimized for desktop/PC with keyboard controls. Mobile controls are available but may
            not provide the full experience.
          </p>
          <div className="space-y-2">
            <button
              onClick={handleContinueOnMobile}
              className="w-full bg-yellow-500 text-black hover:bg-yellow-400 rounded-lg px-4 py-2"
            >
              Continue on Mobile
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="game-title text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center leading-tight">
            STREET FIGHTER
          </h1>
        </div>

        <div className="space-y-1 md:space-y-2">
          <p className="game-text text-xs sm:text-sm md:text-base text-center text-white">
            Creator -{" "}
            <a
              href="https://vimalsreal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              Vimal
            </a>
          </p>
          <p className="game-text text-xs sm:text-sm md:text-base text-center text-white">
            Inspired from -{" "}
            <a
              href="https://medium.com/@david.brandau/friedrichshain-connection-how-i-built-a-retro-fighting-game-with-ai-and-zero-code-02167f6a2efc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              David Brandau
            </a>
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 pb-4 sm:pb-6 md:pb-8">
        <div className="relative">
          <p
            className="game-text text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-white px-6 py-3 cursor-pointer select-none active:scale-95 transition-all duration-200 hover:text-yellow-300 bg-black/50 border border-yellow-500/30 rounded-lg backdrop-blur-sm"
            onClick={handleStartGame}
            style={{
              textShadow:
                "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2)",
              boxShadow: "0 0 20px rgba(255, 255, 0, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)",
            }}
          >
            Press ENTER to Start
          </p>
          <p className="md:hidden text-xs text-yellow-400/70 text-center mt-2 game-text">(Tap to start on mobile)</p>
        </div>
      </div>
    </div>
  )
}
