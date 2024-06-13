import React from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from "./components/LandingPage"
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <LandingPage/>
    </div>
  )
}

export default App
