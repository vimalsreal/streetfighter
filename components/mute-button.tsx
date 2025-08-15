"use client"

import { useSoundContext } from "./sound-context"
import Image from "next/image"

export function MuteButton() {
  const { isMuted, toggleMute } = useSoundContext()

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 left-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      <Image
        src={isMuted ? "/images/icons/volume_off_24dp_E3E3E3.png" : "/images/icons/volume_up_24dp_E3E3E3.png"}
        alt={isMuted ? "Unmute" : "Mute"}
        width={24}
        height={24}
        className="text-white"
      />
    </button>
  )
}
