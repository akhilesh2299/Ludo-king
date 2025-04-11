import Cell from "./cell"

const GRID_SIZE = 15

const LudoBoard = () => {
   const grid = Array(GRID_SIZE * GRID_SIZE).fill(0)

   return (
      <div className="grid grid-cols-15 grid-rows-15 w-[600px] h-[600px] border border-black">
         {grid.map((_, index) => (
            <Cell index={index} />

         ))}
      </div>
   )
}

export default LudoBoard
