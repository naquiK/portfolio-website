import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2 
      })
    }, 20) 

    return () => clearInterval(interval)
  }, [])

  const codeLines = [
    "import React from 'react'",
    "const Developer = () => {",
    "  return (",
    "    <div className='portfolio'>",
    "      <h1>Mohammad Naqui</h1>",
    "      <p>Full Stack Developer</p>",
    "    </div>",
    "  )",
    "}",
    "export default Developer",
  ]

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center z-50">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Main Logo/Icon */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-3xl md:text-4xl text-white font-bold shadow-2xl">
            MN
          </div>
        </motion.div>

        {/* Animated Code Block */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-8 text-left max-w-md mx-auto border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400 text-sm">portfolio.jsx</span>
          </div>
          <div className="font-mono text-xs md:text-sm">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                className="text-gray-300 mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
              >
                <span className="text-gray-500 mr-2">{index + 1}</span>
                <span className="text-blue-400">{line}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Loading Portfolio
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-8 text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          Initializing components...
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          className="flex justify-center space-x-4 md:space-x-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          {["⚛️", "🔥", "⚡", "🚀", "💻"].map((icon, index) => (
            <motion.div
              key={index}
              className="text-xl md:text-2xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Loader
