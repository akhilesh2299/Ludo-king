import { BrowserRouter, Routes, Route } from "react-router";
import LudoLogin from "./pages/ludoLogin";
import Game from "./pages/game";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LudoLogin />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
