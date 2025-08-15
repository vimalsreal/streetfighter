export interface Fighter {
  id: string
  name: string
  description: string
  portrait: string
  sprite: string
  punchSprite?: string
  kickSprite?: string
  duckSprite?: string
  jumpSprite?: string
  jumpKickSprite?: string
  defenceSprite?: string
  walkSprite?: string
  lostSprite?: string
  wonSprite?: string
  hitSprite?: string
  useSingleSprite?: boolean
  specialMove: string
  // Enhanced combat stats
  speed: number
  power: number
  defense: number
  agility: number
}

export const fighters: Fighter[] = [
  {
    id: "sumo-shiro",
    name: "Sumo Shiro",
    description: "A heavyweight champion with devastating grappling techniques and thunderous strikes",
    portrait: "/images/fighters/portrait-theschorsch.png",
    sprite: "/images/fighters/thegeorg_stand.png",
    punchSprite: "/images/fighters/thegeorg_punch.png",
    kickSprite: "/images/fighters/thegeorg_kick.png",
    duckSprite: "/images/fighters/thegeorg_duck.png",
    jumpSprite: "/images/fighters/thegeorg_jump.png",
    defenceSprite: "/images/fighters/thegeorg_defence.png",
    walkSprite: "/images/fighters/thegeorg_walk.png",
    lostSprite: "/images/fighters/thegeorg_lost.png",
    wonSprite: "/images/fighters/thegeorg_won.png",
    hitSprite: "/images/fighters/thegeorg_gotpunched.png",
    useSingleSprite: true,
    specialMove: "Thunder Slam",
    speed: 6,
    power: 9,
    defense: 8,
    agility: 4,
  },
  {
    id: "bobby-noodles",
    name: "Bobby Noodles",
    description: "Master of fluid combat with lightning-fast noodle-whip techniques",
    portrait: "/images/fighters/portrait-daveradau.png",
    sprite: "/images/fighters/dave-radau-stand.png",
    punchSprite: "/images/fighters/dave-radau-punch.png",
    kickSprite: "/images/fighters/daveradau_kick.png",
    duckSprite: "/images/fighters/daveradau_duck.png",
    jumpSprite: "/images/fighters/daveradau_jump.png",
    defenceSprite: "/images/fighters/daveradau_defence.png",
    walkSprite: "/images/fighters/daveradau_walk.png",
    lostSprite: "/images/fighters/dave-radau-lost.png",
    wonSprite: "/images/fighters/dave-radau-won.png",
    hitSprite: "/images/fighters/daveradau_gotpunched.png",
    useSingleSprite: true,
    specialMove: "Noodle Tornado",
    speed: 8,
    power: 7,
    defense: 6,
    agility: 9,
  },
  {
    id: "cheeseman",
    name: "Cheeseman",
    description: "The dairy destroyer with razor-sharp cheese-based combat techniques",
    portrait: "/images/fighters/portrait-jensator.png",
    sprite: "/images/fighters/jensator-stand.png",
    punchSprite: "/images/fighters/jensator-punch.png",
    kickSprite: "/images/fighters/jensator-kick.png",
    duckSprite: "/images/fighters/jensator-duck.png",
    jumpSprite: "/images/fighters/jensator-jump.png",
    defenceSprite: "/images/fighters/jensator_defence.png",
    walkSprite: "/images/fighters/jensator_walk.png",
    lostSprite: "/images/fighters/jensator-lost.png",
    wonSprite: "/images/fighters/jensator-won.png",
    hitSprite: "/images/fighters/jensator_gotpunched.png",
    useSingleSprite: true,
    specialMove: "Cheddar Crusher",
    speed: 7,
    power: 8,
    defense: 7,
    agility: 7,
  },
  {
    id: "randy-omelette",
    name: "Randy Omelette",
    description: "Culinary combat expert specializing in breakfast-based battle techniques",
    portrait: "/images/fighters/portrait-justusjonas.png",
    sprite: "/images/fighters/justusjonas_stand.png",
    punchSprite: "/images/fighters/justusjonas_punch.png",
    kickSprite: "/images/fighters/justusjonas_kick.png",
    duckSprite: "/images/fighters/justusjonas_duck.png",
    jumpSprite: "/images/fighters/justusjonas_jump.png",
    defenceSprite: "/images/fighters/justusjonas_defence.png",
    walkSprite: "/images/fighters/justusjonas_walk.png",
    lostSprite: "/images/fighters/justusjonas_lost.png",
    wonSprite: "/images/fighters/justusjonas_won.png",
    hitSprite: "/images/fighters/justusjonas_gotpunched.png",
    useSingleSprite: true,
    specialMove: "Scrambled Strike",
    speed: 8,
    power: 6,
    defense: 7,
    agility: 8,
  },
  {
    id: "sam-sneaky",
    name: "Sam Sneaky",
    description: "Shadow warrior with unmatched stealth and precision strike capabilities",
    portrait: "/images/fighters/portrait-paddy.png",
    sprite: "/images/fighters/paddy_stand.png",
    punchSprite: "/images/fighters/paddy_punch.png",
    kickSprite: "/images/fighters/paddy_kick.png",
    duckSprite: "/images/fighters/paddy_duck.png",
    jumpSprite: "/images/fighters/paddy_jump.png",
    defenceSprite: "/images/fighters/paddy_defence.png",
    walkSprite: "/images/fighters/paddy_walk.png",
    lostSprite: "/images/fighters/paddy_lost.png",
    wonSprite: "/images/fighters/paddy_won.png",
    hitSprite: "/images/fighters/paddy_gotpunched.png",
    useSingleSprite: true,
    specialMove: "Shadow Assault",
    speed: 9,
    power: 7,
    defense: 6,
    agility: 9,
  },
  {
    id: "omega-babu",
    name: "Omega Babu",
    description: "The ultimate fighter with balanced mastery across all combat disciplines",
    portrait: "/images/fighters/portrait-nicorohstahl.png",
    sprite: "/images/fighters/nicorohstahl_stand.png",
    punchSprite: "/images/fighters/nicorohstahl_punch.png",
    kickSprite: "/images/fighters/nicorohstahl_kick.png",
    duckSprite: "/images/fighters/nicorohstahl_duck.png",
    jumpSprite: "/images/fighters/nicorohstahl_jump.png",
    defenceSprite: "/images/fighters/nicorohstahl_defence.png",
    walkSprite: "/images/fighters/nicorohstahl_walk.png",
    lostSprite: "/images/fighters/nicorohstahl_lost.png",
    wonSprite: "/images/fighters/nicorohstahl_won.png",
    hitSprite: "/images/fighters/nicorohstahl_gotpunched.png",
    useSingleSprite: true,
    specialMove: "Omega Devastation",
    speed: 8,
    power: 9,
    defense: 9,
    agility: 8,
  },
]

export const getFighterById = (id: string): Fighter | undefined => {
  return fighters.find((fighter) => fighter.id === id)
}

export const getFightersByPowerLevel = (): Fighter[] => {
  return [...fighters].sort((a, b) => b.power - a.power)
}

export const getFightersBySpeed = (): Fighter[] => {
  return [...fighters].sort((a, b) => b.speed - a.speed)
}
