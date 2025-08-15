interface ItemProps {
  item: {
    id: number
    type: string
    position: number
    pickedUp: boolean
    heldBy?: "player" | "cpu" | null
    thrown?: boolean
  }
}

export function Item({ item }: ItemProps) {
  if (item.pickedUp) return null

  return (
    <div className="absolute bottom-16 z-20" style={{ left: `${item.position}px` }}>
      <div className="w-10 h-10 bg-yellow-500 rounded-full"></div>
    </div>
  )
}
