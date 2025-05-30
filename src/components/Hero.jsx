"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text3D, Environment } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"

const CodeRain = () => {
  const codeChars = "01{}[];()=>const let var function class import export default async await".split("")

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400 font-mono text-xs opacity-40 md:opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 4 + 6}px`,
          }}
          animate={{
            y: [-50, window.innerHeight + 50],
          }}
          transition={{
            duration: Math.random() * 3 + 2, 
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {codeChars[Math.floor(Math.random() * codeChars.length)]}
        </motion.div>
      ))}
    </div>
  )
}

const TypingCode = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [displayedCode, setDisplayedCode] = useState([])

  const codeLines = [
    "// Mohammad Naqui's Portfolio",
    "class Developer {",
    "  constructor() {",
    "    this.name = 'Mohammad Naqui';",
    "    this.role = 'Full Stack Dev';",
    "    this.skills = [",
    "      'React', 'Next.js',",
    "      'Python', 'Java'",
    "    ];",
    "    this.passion = 'Innovation';",
    "    this.experience = 'Tech Fest';",
    "  }",
    "",
    "  getCurrentProject() {",
    "    return 'Ignition 2025';",
    "  }",
    "",
    "  getAchievements() {",
    "    return [",
    "      '15+ Tech Events',",
    "      'National Hackathon',",
    "      'CGPA: 8.16'",
    "    ];",
    "  }",
    "",
    "  contactMe() {",
    "    return {",
    "      email: 'Nknaqui72@gmail.com',",
    "      github: 'naquik'",
    "    };",
    "  }",
    "}",
    "",
    "const mohammad = new Developer();",
    "console.log('Ready! 🚀');",
  ]

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(
        () => {
          if (currentChar < codeLines[currentLine].length) {
            setDisplayedCode((prev) => {
              const newCode = [...prev]
              if (!newCode[currentLine]) newCode[currentLine] = ""
              newCode[currentLine] += codeLines[currentLine][currentChar]
              return newCode
            })
            setCurrentChar((prev) => prev + 1)
          } else {
            setCurrentLine((prev) => prev + 1)
            setCurrentChar(0)
          }
        },
        Math.random() * 50 + 30,
      )

      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar, codeLines])

  return (
    <div className="font-mono text-xs md:text-sm text-green-400 bg-black/80 backdrop-blur-sm rounded-lg p-3 md:p-6 max-w-xs sm:max-w-md md:max-w-4xl w-full border border-green-500/30 mx-auto">
      {/* Terminal Header */}
      <div className="flex items-center mb-2 md:mb-4 pb-2 border-b border-green-500/30">
        <div className="flex space-x-1 md:space-x-2">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-2 md:ml-4 text-green-300 text-xs md:text-sm">portfolio.js</span>
        <div className="ml-auto text-green-300 text-xs">● Live</div>
      </div>

      {/* Code Content */}
      <div className="space-y-1 max-h-48 md:max-h-96 overflow-y-auto">
        {displayedCode.map((line, index) => (
          <motion.div
            key={index}
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <span className="text-gray-500 mr-2 md:mr-4 select-none w-4 md:w-8 text-right text-xs">{index + 1}</span>
            <span className="text-green-400 text-xs md:text-sm">
              {line}
              {index === currentLine && (
                <motion.span
                  className="bg-green-400 text-black ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                >
                  ▋
                </motion.span>
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const FloatingHologram = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <group ref={meshRef}>
      <Text3D
        font="/fonts/Geist_Bold.json"
        size={0.3}
        height={0.05}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={5}
      >
        MN
        <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={0.3} />
      </Text3D>
    </group>
  )
}

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowTerminal(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden"
    >
      {/* Matrix Code Rain Background */}
      <CodeRain />

      {/* 3D Hologram - Hidden on mobile for performance */}
      <div className="absolute top-20 right-4 md:right-10 w-16 h-16 md:w-32 md:h-32 hidden sm:block">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingHologram />
          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Glitch Effects - Reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-0.5 bg-cyan-400 opacity-20 md:opacity-30"
            style={{ top: `${Math.random() * 100}%` }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: Math.random() * 5 + 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center text-white max-w-6xl w-full">
          {/* Header */}
          <motion.div
            className="mb-4 md:mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              &gt; Mohammad Naqui_
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-xl lg:text-2xl text-green-400 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              $ whoami: Full Stack Developer
            </motion.p>
          </motion.div>

          {/* Live Coding Terminal */}
          <AnimatePresence>
            {showTerminal && (
              <motion.div
                className="mb-4 md:mb-6 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <TypingCode />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.a
              href="#projects"
              className="px-6 md:px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border border-green-400/30 text-sm md:text-base"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>./view_projects.sh</span>
              <span>🚀</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 md:px-8 py-3 border-2 border-green-400 hover:bg-green-400 hover:text-black rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 text-sm md:text-base"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>./contact.sh</span>
              <span>📧</span>
            </motion.a>
          </motion.div>

          {/* System Status */}
          <motion.div
            className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-xs md:text-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            {[
              { label: "Status", value: "Online", color: "text-green-400" },
              { label: "Projects", value: "3+", color: "text-blue-400" },
              { label: "Events", value: "15+", color: "text-purple-400" },
              { label: "CGPA", value: "8.16", color: "text-yellow-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-black/40 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-gray-700"
                whileHover={{ scale: 1.05, borderColor: "#4f46e5" }}
              >
                <div className="text-gray-400 text-xs">{stat.label}</div>
                <div className={`font-bold ${stat.color} text-sm md:text-base`}>{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-green-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="text-center">
          <div className="text-xs mb-2">scroll down</div>
          <div className="w-4 h-6 md:w-6 md:h-10 border-2 border-green-400 rounded-full flex justify-center">
            <motion.div
              className="w-0.5 h-2 md:w-1 md:h-3 bg-green-400 rounded-full mt-1 md:mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
