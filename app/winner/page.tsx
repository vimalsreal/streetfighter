"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { fighters } from "@/lib/fighters"

export default function WinnerScreen() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const winner = searchParams.get("winner")
  const playerId = searchParams.get("player") || fighters[0].id
  const cpuId = searchParams.get("cpu") || fighters[1].id
  const roundCount = Number.parseInt(searchParams.get("round") || "1", 10)
  const difficulty = Number.parseFloat(searchParams.get("difficulty") || "1.0")

  // Get previous opponents from URL
  const previousOpponentsParam = searchParams.get("prevOpponents") || ""
  const previousOpponents = previousOpponentsParam ? previousOpponentsParam.split(",") : []

  const playerFighter = fighters.find((f) => f.id === playerId) || fighters[0]
  const cpuFighter = fighters.find((f) => f.id === cpuId) || fighters[1]

  const [showContinue, setShowContinue] = useState(true)
  const [countdown, setCountdown] = useState(5)
  const [isCountingDown, setIsCountingDown] = useState(winner === "player")

  // Function to start next round with a new opponent
  const startNextRound = useCallback(() => {
    if (winner === "player") {
      // Get a random opponent different from the current one and previous 5 opponents
      const opponentsToAvoid = [playerId, cpuId, ...previousOpponents]
      const availableFighters = fighters.filter((f) => !opponentsToAvoid.includes(f.id))

      // If we've exhausted all fighters, just avoid the current one
      const fightersToChooseFrom =
        availableFighters.length > 0 ? availableFighters : fighters.filter((f) => f.id !== cpuId && f.id !== playerId)

      const randomIndex = Math.floor(Math.random() * fightersToChooseFrom.length)
      const newOpponent = fightersToChooseFrom[randomIndex]

      // Update previous opponents list (keep only the last 4 to make room for current opponent)
      const updatedPreviousOpponents = [...previousOpponents, cpuId].slice(-4)

      // Increase difficulty for the next round
      const newDifficulty = difficulty + 0.2

      // Start next round with new opponent and increased difficulty
      router.push(
        `/fight?player=${playerId}&cpu=${newOpponent.id}&round=${roundCount + 1}&difficulty=${newDifficulty.toFixed(1)}&prevOpponents=${updatedPreviousOpponents.join(",")}`,
      )
    } else {
      // If player lost, go back to main menu
      router.push("/")
    }
  }, [router, winner, playerId, cpuId, roundCount, difficulty, previousOpponents])

  // Handle countdown timer
  useEffect(() => {
    if (!isCountingDown) return

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          startNextRound()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isCountingDown, startNextRound])

  // Blink effect for continue text
  useEffect(() => {
    const interval = setInterval(() => {
      setShowContinue((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        startNextRound()
      } else if (e.key === "Escape") {
        router.push("/")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [router, startNextRound])

  const winnerText = winner === "player" ? "You Won!" : "You Lost!"

  // Determine which fighter won and which lost
  const winnerFighter = winner === "player" ? playerFighter : cpuFighter
  const loserFighter = winner === "player" ? cpuFighter : playerFighter

  // Get the appropriate sprite based on win/lose state
  const spriteToShow =
    winner === "player"
      ? winnerFighter.wonSprite || "/images/victory.png"
      : loserFighter.lostSprite || "/images/defeat.png"

  // Get the appropriate background and text color based on win/lose state
  const backgroundImage = winner === "player" ? "/images/youwon.jpg" : "/images/youlost.jpg"
  const titleColor = winner === "player" ? "#5D1A11" : "#361E13"

  const handleContinue = () => {
    startNextRound()
  }

  const handleReturnToMenu = () => {
    router.push("/")
  }

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#001428] pixelated">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={winner === "player" ? "Victory Background" : "Defeat Background"}
          fill
          className="object-cover pixelated"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="z-10 flex flex-col items-center justify-between h-full py-12">
        <h1 className="game-title text-6xl" style={{ color: titleColor }}>
          {winnerText}
        </h1>

        <div className="flex-grow flex items-end justify-center">
          {/* Position sprite at the bottom */}
          <div className="relative w-80 h-80 flex items-end justify-center">
            <Image
              src={spriteToShow || "/placeholder.svg"}
              alt={winner === "player" ? "Victorious Fighter" : "Defeated Fighter"}
              width={200}
              height={200}
              className="pixelated object-contain object-bottom"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <div
            className={`game-text text-xl cursor-pointer select-none active:scale-95 transition-transform ${showContinue ? "blink" : "opacity-0"}`}
            onClick={handleContinue}
          >
            {winner === "player" ? "PRESS ENTER FOR NEXT ROUND" : "PRESS ENTER TO PLAY AGAIN"}
          </div>

          {winner === "player" && (
            <div
              className="game-text text-lg mt-2 cursor-pointer select-none active:scale-95 transition-transform"
              style={{ color: "#5D1A11" }}
              onClick={handleReturnToMenu}
            >
              PRESS ESC TO RETURN TO MENU
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
