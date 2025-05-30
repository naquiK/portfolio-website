"use client"
import { motion } from "framer-motion"

const Experience = () => {
  const experiences = [
    {
      title: "Tech Fest Organizer & Event Manager",
      organization: "Gautam Buddha University",
      period: "2025",
      description:
        "Successfully organized and managed the annual tech fest 'Ignition 2025' with 15+ diverse technical events including coding competitions, hackathons, workshops, and tech talks.",
      highlights: [
        "Organized 15+ technical events covering various domains",
        "Managed logistics for 1000+ participants",
        "Coordinated with industry experts and speakers",
        "Led a team of 50+ volunteers",
      ],
    },
    {
      title: "National Level Hackathon Coordinator",
      organization: "Gautam Buddha University",
      period: "2025",
      description:
        "Spearheaded the organization of a national-level hackathon that attracted participants from all over India, focusing on innovative solutions for real-world problems.",
      highlights: [
        "Attracted participants from across India",
        "Managed registration of 500+ teams",
        "Coordinated with industry mentors and judges",
        "Facilitated networking opportunities for participants",
      ],
    },
    {
      title: "Full Stack Web Developer",
      organization: "Personal Projects",
      period: "2023 - Present",
      description:
        "Developed multiple web applications using modern technologies including React, Next.js, and various backend frameworks.",
      highlights: [
        "Built responsive and interactive web applications",
        "Implemented modern UI/UX design principles",
        "Integrated APIs and third-party services",
        "Optimized applications for performance and SEO",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience & Leadership</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-lg text-indigo-600 font-semibold">{exp.organization}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
