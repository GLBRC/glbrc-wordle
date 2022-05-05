import { Cell } from './Cell'
export const GLBRCCells = () => {
  return (
    <div className="flex justify-center mb-1 mt-4">
      <Cell isRevealing={true} isCompleted={true} value="G" status="correct" />
      <Cell isRevealing={true} isCompleted={true} value="L" status="present" />
      <Cell isRevealing={true} isCompleted={true} value="B" status="correct" />
      <Cell isRevealing={true} isCompleted={true} value="R" status="present" />
      <Cell isRevealing={true} isCompleted={true} value="C" status="correct" />
    </div>
  )
}
