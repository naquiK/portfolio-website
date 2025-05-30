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
  
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App w-full max-w-full overflow-x-hidden">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <main className="pt-16 md:pt-20 w-full max-w-full overflow-x-hidden">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  )
}

export default App
