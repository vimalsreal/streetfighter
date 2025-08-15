"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import type { Fighter as FighterType } from "@/lib/fighters"

interface FighterProps {
  fighter: FighterType
  position: number
  state: string
  side: "left" | "right"
  jumpDirection?: "left" | "right" | null
  isDefending?: boolean
  isFacingLeft?: boolean
  isDefeated?: boolean
  isVictorious?: boolean
  isHit?: boolean
  isWalking?: boolean
  isJumpKicking?: boolean
}

export function Fighter({
  fighter,
  position,
  state,
  side,
  jumpDirection,
  isDefending = false,
  isFacingLeft = false,
  isDefeated = false,
  isVictorious = false,
  isHit = false,
  isWalking = false,
  isJumpKicking = false,
}: FighterProps) {
  // Add state for walking animation
  const [showWalkFrame, setShowWalkFrame] = useState(false)

  // Walking animation effect
  useEffect(() => {
    if (!isWalking || !fighter.walkSprite) return

    // Toggle between stand and walk sprites every 150ms
    const walkInterval = setInterval(() => {
      setShowWalkFrame((prev) => !prev)
    }, 150)

    return () => clearInterval(walkInterval)
  }, [isWalking, fighter.walkSprite])

  // Check if fighter uses a single sprite or a sprite sheet
  const isSingleSprite = fighter.useSingleSprite

  // Determine z-index based on victory/defeat state
  // Victorious fighters should appear in front of defeated fighters
  const zIndex = isVictorious ? 20 : isDefeated ? 5 : 10

  // For single sprites, we need to use Image component for better compatibility
  if (isSingleSprite) {
    // Determine which sprite to use based on state
    let spriteToUse = fighter.sprite

    if (isDefeated && fighter.lostSprite) {
      spriteToUse = fighter.lostSprite
    } else if (isVictorious && fighter.wonSprite) {
      spriteToUse = fighter.wonSprite
    } else if (isHit && !isDefending && fighter.hitSprite) {
      // Only show hit sprite if not defending
      spriteToUse = fighter.hitSprite
    } else if (state === "punch" && fighter.punchSprite) {
      spriteToUse = fighter.punchSprite
    } else if (state === "kick" && fighter.kickSprite) {
      spriteToUse = fighter.kickSprite
    } else if (state === "jump") {
      // If player is kicking while jumping, use kick sprite
      if (isJumpKicking && fighter.kickSprite) {
        spriteToUse = fighter.kickSprite
      } else {
        spriteToUse = fighter.jumpSprite || fighter.sprite
      }
    } else if ((state === "defence" || isDefending) && fighter.defenceSprite) {
      // Show defense sprite when in defense state or isDefending is true
      spriteToUse = fighter.defenceSprite
    } else if (state === "duck" && fighter.duckSprite) {
      spriteToUse = fighter.duckSprite
    } else if (isWalking && fighter.walkSprite && showWalkFrame) {
      // Use walk sprite when walking and on walk frame
      spriteToUse = fighter.walkSprite
    }

    // Determine if the sprite should be flipped
    // For right side (CPU), always flip the sprite horizontally
    // For left side (player), flip when facing left (away from center)
    const shouldFlip = (side === "left" && isFacingLeft) || (side === "right" && !isFacingLeft)

    return (
      <div
        className="absolute"
        style={{
          left: side === "left" ? `${position}px` : "auto",
          right: side === "right" ? `${position}px` : "auto",
          bottom: state === "jump" ? "100px" : "0px", // Keep all other states at bottom 0
          transition: state === "jump" ? "bottom 0.5s, left 0.5s, right 0.5s" : "bottom 0.2s",
          zIndex: zIndex,
          transform: shouldFlip ? "scaleX(-1)" : "",
        }}
      >
        <div className="relative w-40 h-40">
          <Image
            src={spriteToUse || "/placeholder.svg"}
            alt={fighter.name}
            width={160}
            height={160}
            className="pixelated object-contain object-bottom"
            priority
          />
        </div>
      </div>
    )
  }

  // For sprite sheets, calculate the position based on state
  const getSpritePosition = () => {
    // Each sprite is 80x80 pixels in a 4x3 grid
    switch (state) {
      case "idle":
        return { x: 0, y: 0 } // Top-left sprite
      case "punch":
        return { x: 80, y: 0 } // Second sprite in first row
      case "kick":
        return { x: 240, y: 0 } // Fourth sprite in first row
      case "duck":
        return { x: 0, y: 80 } // First sprite in second row
      case "jump":
        return { x: 160, y: 80 } // Third sprite in second row
      case "defence":
        return { x: 160, y: 0 } // Second sprite in first row
      default:
        return { x: 0, y: 0 }
    }
  }

  const spritePosition = getSpritePosition()
  const shouldFlip = (side === "right" && !isFacingLeft) || (side === "left" && isFacingLeft)

  return (
    <div
      className="absolute"
      style={{
        left: side === "left" ? `${position}px` : "auto",
        right: side === "right" ? `${position}px` : "auto",
        bottom: state === "jump" ? "100px" : "0px", // Keep duck at same position as stand
        transition: state === "jump" ? "bottom 0.5s, left 0.5s, right 0.5s" : "bottom 0.2s",
        zIndex: zIndex,
      }}
    >
      <div
        className={`relative w-40 h-40 ${shouldFlip ? "scale-x-[-1]" : ""}`}
        style={{
          transform: state === "punch" ? `${side === "right" ? "translateX(-10px)" : "translateX(10px)"}` : "none",
          transition: "transform 0.1s",
        }}
      >
        <div
          className="w-full h-full pixelated"
          style={{
            backgroundImage: `url(${fighter.sprite})`,
            backgroundPosition: `-${spritePosition.x}px -${spritePosition.y}px`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "320px 240px", // 4x3 grid of 80x80 sprites
          }}
        />
      </div>
    </div>
  )
}
