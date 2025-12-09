'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-pink-400/40 rounded-full animate-bounce"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 text-center relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/10 dark:bg-black/20 rounded-3xl p-12 lg:p-16 xl:p-20 shadow-2xl border border-white/20 mx-auto"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 lg:mb-12 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-300% bg-gradient-to-r">
              Your Name
            </span>
          </motion.h1>

          <motion.div
            className="mb-8 lg:mb-12 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
              Full Stack Developer & UI/UX Designer
            </p>
            <div className="flex items-center justify-center gap-3 text-purple-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm lg:text-base">Available for new opportunities</span>
            </div>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I craft exceptional digital experiences through innovative design and cutting-edge technology. 
            Specializing in modern web applications that combine aesthetic excellence with powerful functionality.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-600' },
              { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
              { icon: Mail, href: '#contact', label: 'Email', color: 'hover:bg-purple-600' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -8, rotateY: 15 }}
                whileTap={{ scale: 0.9 }}
                className={`group relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-white border border-white/20 ${social.color}`}
              >
                <social.icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-black/80 text-white text-sm rounded-lg">{social.label}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}