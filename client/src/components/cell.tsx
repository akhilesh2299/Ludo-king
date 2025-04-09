import React from "react"
import clsx from "clsx"

type Props = {
  index: number
}

const Cell: React.FC<Props> = ({ index }) => {
  const row = Math.floor(index / 15)
  const col = index % 15
  let bg = "bg-white border border-black"

  // RED Zone (Top-Left outer layer)
  if (row < 6 && col < 6) {
    if (row === 0 || row === 5 || col === 0 || col === 5) {
      bg = "bg-red-500"
    }
  }

  // GREEN Zone (Top-Right outer layer)
  else if (row < 6 && col > 8) {
    if (row === 0 || row === 5 || col === 9 || col === 14) {
      bg = "bg-green-500"
    }
  }

  // BLUE Zone (Bottom-Left outer layer)
  else if (row > 8 && col < 6) {
    if (row === 9 || row === 14 || col === 0 || col === 5) {
      bg = "bg-blue-500"
    }
  }

  // YELLOW Zone (Bottom-Right outer layer)
  else if (row > 8 && col > 8) {
    if (row === 9 || row === 14 || col === 9 || col === 14) {
      bg = "bg-yellow-500"
    }
  }

  else {
    // RED Home Stretch (horizontal into center)
    if (row === 7 && col >= 1 && col <= 5) bg = "bg-red-500"

    // YELLOW Home Stretch (horizontal into center)
    else if (row === 7 && col >= 9 && col <= 13) bg = "bg-yellow-500"

    // BLUE Home Stretch (vertical into center)
    else if (col === 7 && row >= 9 && row <= 13) bg = "bg-blue-500"

    // GREEN Home Stretch (vertical into center)
    else if (col === 7 && row >= 1 && row <= 5) bg = "bg-green-500"

    // RED Entry point
    else if (index === 91) bg = "bg-red-500"

    // GREEN Entry point
    else if (index === 23) bg = "bg-green-500"

    // YELLOW Entry point
    else if (index === 133) bg = "bg-yellow-500"

    // BLUE Entry point
    else if (index === 201) bg = "bg-blue-500"

    // CENTER HOME (Final spot)
    else if (row === 7 && col === 7) bg = "bg-conic/decreasing from-red-400 via-yellow-600 via-green-500 to-blue-700"
  }

  return (
    <div className={clsx("w-full h-full flex items-center justify-center text-xs font-bold", bg)}>
      {index}
    </div>
  )
}

export default Cell
