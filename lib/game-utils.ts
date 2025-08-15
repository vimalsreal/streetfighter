import { fighters } from "./fighters"

export function getRandomFighter(excludeId: string, previousOpponents: string[] = []) {
  // Combine the current fighter ID with previous opponents to avoid
  const idsToExclude = [excludeId, ...previousOpponents]

  // Filter out fighters that should be excluded
  const availableFighters = fighters.filter((f) => !idsToExclude.includes(f.id))

  // If we've exhausted all fighters, just avoid the current one
  const fightersToChooseFrom =
    availableFighters.length > 0 ? availableFighters : fighters.filter((f) => f.id !== excludeId)

  const randomIndex = Math.floor(Math.random() * fightersToChooseFrom.length)
  return fightersToChooseFrom[randomIndex]
}

export function getRandomItem() {
  const items = ["bottle", "chair", "barrel", "rock"]
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}
