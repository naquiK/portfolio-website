import { motion } from "framer-motion"

const Projects = () => {
  const projects = [
    {
      title: "Official Tech Fest Website  Ignition 2025",
      description:
        "Developed the official website for university's annual tech fest using React, Three.js, Framer Motion, GSAP, Tailwind CSS, and custom particle effects.",
      technologies: ["React", "Three.js", "Framer Motion", "GSAP", "Tailwind CSS"],
      link: "https://ignition.gbu.ac.in/",
      features: [
        "Interactive 3D visuals and animations",
        "Responsive design for all devices",
        "Performance optimized for high traffic",
        "Modern UI with particle effects",
      ],
    },
    {
      title: "My World Website",
      description:
        "A self-made web project featuring a clean, modern interface to present ideas and key projects with professional web development approach.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      link: "https://my-world-one.vercel.app/",
      features: [
        "Clean and modern interface",
        "Responsive design implementation",
        "Professional content structuring",
        "Smooth user navigation",
      ],
    },
    {
      title: "Weather Forecasting Website",
      description:
        "Climate App is a weather forecasting tool that provides real-time weather data with a clean, user-friendly interface showcasing API integration skills.",
      technologies: ["React", "Weather API", "CSS3", "JavaScript"],
      link: "https://climate-app-seven.vercel.app/",
      features: [
        "Real-time weather data integration",
        "Clean and intuitive UI design",
        "Location-based weather forecasting",
        "Responsive across all devices",
      ],
    },
    {
  title: "GBU Official Cultural Fest - Abhivyanjana Website",
  description:
    "A modern and responsive website for GBU's cultural fest ‘Abhivyanjana’, featuring event schedules, registrations, artist highlights, and gallery showcase.",
  technologies: ["React", "Tailwind CSS", "GSAP", "Framer Motion", "JavaScript"],
  link: "https://abhivyanjana.gbu.ac.in/",
  features: [
    "Clean and modern fest-themed UI",
    "Event schedule and registration",
    "Artist highlights and gallery showcase",
    "Responsive and animation-rich design",
  ]
}

  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
