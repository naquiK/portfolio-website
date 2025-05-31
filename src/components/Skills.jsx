import { motion } from "framer-motion"

const Skills = () => {
  const skills = [
    { name: "Java", level: 90, color: "bg-red-500" },
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "Next.js", level: 88, color: "bg-gray-200" },
    { name: "Node", level: 85, color: "bg-indigo-500" },
    { name: "Python", level: 85, color: "bg-green-500" },
    { name: "JavaScript", level: 92, color: "bg-yellow-500" },
    { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
    { name: "Machine Learning", level: 80, color: "bg-purple-500" },
    { name: "C/C++", level: 85, color: "bg-indigo-100" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800 p-6 rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className={`h-3 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
