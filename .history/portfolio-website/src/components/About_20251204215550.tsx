'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Server, Smartphone } from 'lucide-react'

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js']
    },
    {
      category: 'Backend',
      icon: Server,
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Design',
      icon: Palette,
      items: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design', 'Prototyping']
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      items: ['React Native', 'Flutter', 'iOS', 'Android', 'Cross-platform']
    }
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-block p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl">About Me</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions through innovative design and development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 p-8 rounded-3xl shadow-2xl border border-white/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">👋</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                My Journey
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                With over [X years] of experience in web development, I specialize in creating 
                modern, scalable applications that solve real-world problems. My journey began 
                with a curiosity about how websites work, and has evolved into a passion for 
                building exceptional digital experiences.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest technologies and best practices. When I'm not coding, you can find me 
                [add your hobbies/interests here].
              </p>
              <p>
                Currently, I'm focused on [current focus - could be a specific technology, 
                type of project, or learning goal]. I'm always excited to take on new challenges 
                and collaborate with like-minded developers and designers.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'User-Focused', 'Detail-Oriented'].map((trait) => (
                <span key={trait} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group p-8 bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30"
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mr-4"
                    whileHover={{ rotate: 10 }}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {skill.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.span 
                      key={item} 
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-blue-500/20 transition-all duration-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Experience' },
            { number: '20+', label: 'Technologies Used' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}