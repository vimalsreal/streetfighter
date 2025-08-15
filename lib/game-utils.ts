import { fighters } from "./fighters"

export function getRandomFighter(excludeId: string, previousOpponents: string[] = []) {
  const idsToExclude = [excludeId, ...previousOpponents]
  const availableFighters = fighters.filter((f) => !idsToExclude.includes(f.id))

  const fightersToChooseFrom =
    availableFighters.length > 0 ? availableFighters : fighters.filter((f) => f.id !== excludeId)

  const randomIndex = Math.floor(Math.random() * fightersToChooseFrom.length)
  return fightersToChooseFrom[randomIndex]
}

export function calculateDamage(attacker: any, defender: any, moveType: "punch" | "kick" | "special"): number {
  const baseDamage = {
    punch: 5,
    kick: 10,
    special: 20,
  }

  const powerMultiplier = attacker.power / 10
  const defenseReduction = defender.defense / 20

  return Math.max(1, Math.round(baseDamage[moveType] * powerMultiplier * (1 - defenseReduction)))
}

export function calculateHitChance(attacker: any, defender: any): number {
  const baseHitChance = 0.8
  const speedAdvantage = (attacker.speed - defender.agility) / 20

  return Math.max(0.3, Math.min(0.95, baseHitChance + speedAdvantage))
}

export function getRandomItem() {
  const items = [
    { name: "bottle", damage: 3, effect: "stun" },
    { name: "chair", damage: 8, effect: "knockdown" },
    { name: "barrel", damage: 12, effect: "explosion" },
    { name: "rock", damage: 5, effect: "none" },
  ]

  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

export function generateMatchup(player1: any, player2: any) {
  return {
    speedAdvantage: player1.speed > player2.speed ? "player1" : player2.speed > player1.speed ? "player2" : "equal",
    powerAdvantage: player1.power > player2.power ? "player1" : player2.power > player1.power ? "player2" : "equal",
    defenseAdvantage:
      player1.defense > player2.defense ? "player1" : player2.defense > player1.defense ? "player2" : "equal",
    prediction: calculateWinProbability(player1, player2),
  }
}

function calculateWinProbability(player1: any, player2: any): number {
  const p1Total = player1.speed + player1.power + player1.defense + player1.agility
  const p2Total = player2.speed + player2.power + player2.defense + player2.agility

  return p1Total / (p1Total + p2Total)
}
