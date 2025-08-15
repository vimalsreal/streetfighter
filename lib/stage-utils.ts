// Array of available stage backgrounds
const stageBackgrounds = [
  "/images/stages/stage-intimes.jpg",
  "/images/stages/stage-nordkiez2.jpg",
  "/images/stages/stage-raw1.jpg",
  "/images/stages/stage-raw2.jpg",
  "/images/stages/stage-boxi_final.jpg",
  "/images/stages/stage-rigaer1.jpg",
]

// Function to get a random stage background
export function getRandomStageBackground(): string {
  const randomIndex = Math.floor(Math.random() * stageBackgrounds.length)
  return stageBackgrounds[randomIndex]
}
