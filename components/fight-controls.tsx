export function FightControls() {
  return (
    <div className="bg-black/80 w-full py-2 px-4 flex justify-center gap-8 text-xs game-text">
      <div>← → : Move</div>
      <div>↑ : Jump</div>
      <div>↓ : Duck</div>
      <div>A : Kick</div>
      <div>S : Defence</div>
      <div>D : Punch</div>
      <div>↑+A : Jump Kick</div>
    </div>
  )
}
