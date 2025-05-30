"use client"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900">Passionate Developer & Tech Leader</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm Mohammad Naqui, a dedicated Computer Science Engineering student at Gautam Buddha University with a
              CGPA of 8.16. My journey in technology spans full-stack web development, machine learning, and event
              management.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in creating modern, responsive web applications using React, Next.js, and cutting-edge
              technologies. My passion lies in building innovative solutions that make a real impact.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900">Education</h4>
                <p className="text-gray-600">B.Tech CSE</p>
                <p className="text-sm text-gray-500">CGPA: 8.16</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900">Graduation</h4>
                <p className="text-gray-600">October 2025</p>
                <p className="text-sm text-gray-500">GBU</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Mohammad Naqui"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
