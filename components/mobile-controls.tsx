"use client"

import { Button } from "@/components/ui/button"

interface MobileControlsProps {
  onKeyPress: (key: string) => void
  onKeyRelease: (key: string) => void
}

export function MobileControls({ onKeyPress, onKeyRelease }: MobileControlsProps) {
  const handleTouchStart = (key: string) => {
    onKeyPress(key)
  }

  const handleTouchEnd = (key: string) => {
    onKeyRelease(key)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 p-2 sm:p-4 flex justify-between items-end md:hidden pl-16">
      {/* Left side - Movement controls */}
      <div className="flex flex-col items-center gap-1 sm:gap-2">
        <Button
          variant="outline"
          size="sm"
          className="w-10 h-10 sm:w-12 sm:h-12 text-white border-white bg-black/50 hover:bg-white/20 text-xs sm:text-sm"
          onTouchStart={() => handleTouchStart("ArrowUp")}
          onTouchEnd={() => handleTouchEnd("ArrowUp")}
          onMouseDown={() => handleTouchStart("ArrowUp")}
          onMouseUp={() => handleTouchEnd("ArrowUp")}
        >
          ↑
        </Button>
        <div className="flex gap-1 sm:gap-2">
          <Button
            variant="outline"
            size="sm"
            className="w-10 h-10 sm:w-12 sm:h-12 text-white border-white bg-black/50 hover:bg-white/20 text-xs sm:text-sm"
            onTouchStart={() => handleTouchStart("ArrowLeft")}
            onTouchEnd={() => handleTouchEnd("ArrowLeft")}
            onMouseDown={() => handleTouchStart("ArrowLeft")}
            onMouseUp={() => handleTouchEnd("ArrowLeft")}
          >
            ←
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-10 h-10 sm:w-12 sm:h-12 text-white border-white bg-black/50 hover:bg-white/20 text-xs sm:text-sm"
            onTouchStart={() => handleTouchStart("ArrowDown")}
            onTouchEnd={() => handleTouchEnd("ArrowDown")}
            onMouseDown={() => handleTouchStart("ArrowDown")}
            onMouseUp={() => handleTouchEnd("ArrowDown")}
          >
            ↓
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-10 h-10 sm:w-12 sm:h-12 text-white border-white bg-black/50 hover:bg-white/20 text-xs sm:text-sm"
            onTouchStart={() => handleTouchStart("ArrowRight")}
            onTouchEnd={() => handleTouchEnd("ArrowRight")}
            onMouseDown={() => handleTouchStart("ArrowRight")}
            onMouseUp={() => handleTouchEnd("ArrowRight")}
          >
            →
          </Button>
        </div>
      </div>

      {/* Right side - Action controls */}
      <div className="flex flex-col gap-1 sm:gap-2">
        <div className="flex gap-1 sm:gap-2">
          <Button
            variant="outline"
            size="sm"
            className="w-12 h-10 sm:w-16 sm:h-12 text-white border-white bg-red-900/70 hover:bg-red-800/70 font-bold text-xs sm:text-sm"
            onTouchStart={() => handleTouchStart("a")}
            onTouchEnd={() => handleTouchEnd("a")}
            onMouseDown={() => handleTouchStart("a")}
            onMouseUp={() => handleTouchEnd("a")}
          >
            KICK
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-12 h-10 sm:w-16 sm:h-12 text-white border-white bg-blue-900/70 hover:bg-blue-800/70 font-bold text-xs sm:text-sm"
            onTouchStart={() => handleTouchStart("d")}
            onTouchEnd={() => handleTouchEnd("d")}
            onMouseDown={() => handleTouchStart("d")}
            onMouseUp={() => handleTouchEnd("d")}
          >
            PUNCH
          </Button>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full h-10 sm:h-12 text-white border-white bg-green-900/70 hover:bg-green-800/70 font-bold text-xs sm:text-sm"
          onTouchStart={() => handleTouchStart("s")}
          onTouchEnd={() => handleTouchEnd("s")}
          onMouseDown={() => handleTouchStart("s")}
          onMouseUp={() => handleTouchEnd("s")}
        >
          DEFEND
        </Button>
      </div>
    </div>
  )
}
