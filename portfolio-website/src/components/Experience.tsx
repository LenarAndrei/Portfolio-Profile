'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Inc.',
      location: 'San Francisco, CA',
      period: '2023 - Present',
      description: 'Lead development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on major product redesign',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Built real-time features using WebSocket and Redis'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      type: 'work'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Solutions LLC',
      location: 'Remote',
      period: '2022 - 2023',
      description: 'Developed responsive web applications and collaborated with design teams to create exceptional user experiences.',
      achievements: [
        'Built 15+ responsive web applications using React and Vue.js',
        'Improved code quality by implementing comprehensive testing',
        'Collaborated with UX team to increase user engagement by 35%',
        'Mentored 3 junior developers on modern frontend practices'
      ],
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Jest'],
      type: 'work'
    },
    {
      id: 3,
      title: 'Web Developer Intern',
      company: 'StartUp Hub',
      location: 'New York, NY',
      period: '2021 - 2022',
      description: 'Contributed to various client projects and gained hands-on experience with modern web technologies.',
      achievements: [
        'Developed 5+ client websites from design to deployment',
        'Learned agile development methodologies',
        'Contributed to open-source projects',
        'Received "Outstanding Intern" award'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      type: 'work'
    }
  ]

  const education = [
    {
      id: 1,
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Technology',
      location: 'California, USA',
      period: '2018 - 2022',
      description: 'Focused on software engineering, algorithms, and data structures. Graduated Magna Cum Laude with a 3.8 GPA.',
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        'President of Computer Science Student Association',
        'Led team project that won university hackathon',
        'Published research paper on machine learning applications'
      ],
      technologies: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms'],
      type: 'education'
    },
    {
      id: 2,
      title: 'Full Stack Web Development Bootcamp',
      company: 'Code Academy Pro',
      location: 'Online',
      period: '2021',
      description: 'Intensive 6-month program covering modern web development technologies and best practices.',
      achievements: [
        'Completed 500+ hours of hands-on coding',
        'Built 10+ full-stack applications',
        'Top 5% of graduating class',
        'Received certification in React and Node.js'
      ],
      technologies: ['MERN Stack', 'GraphQL', 'Redux', 'MongoDB', 'Express.js'],
      type: 'education'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-12 text-center"
          >
            Professional Experience
          </motion.h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            {exp.title}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3 space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-12 text-center"
          >
            Education
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {edu.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {edu.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {edu.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Highlights:
                  </h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {edu.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}