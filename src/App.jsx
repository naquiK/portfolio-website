"use client"

import { useState, useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import Loader from "./components/Loader"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for 3D elements and assets
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <div className="pt-16 md:pt-20">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </>
      )}
    </div>
  )
}

export default App
