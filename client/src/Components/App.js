import React from "react"
import Navbar from "./Navbar"
import "../dist/index.css"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default App
