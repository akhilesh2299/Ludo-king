import LudoBoard from "../components/ludo-board"
import Navbar from "../components/navbar"

export default function Game() {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <Navbar/>
      <div className="flex flex-row items-center justify-center mt-3">
      <LudoBoard />
      </div>
    </div>
  )
}
