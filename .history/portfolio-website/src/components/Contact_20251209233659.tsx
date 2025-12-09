'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-blue-600/20 to-pink-600/20"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-block p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-xl">Get In Touch</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Let&apos;s Create Something
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let&apos;s discuss your project and explore the possibilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-2xl">🚀</span>
              </div>
              <h3 className="text-3xl font-bold text-white">
                Let&apos;s Connect
              </h3>
            </div>
            
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              I&apos;m currently available for exciting projects and collaborations. 
              Whether you have a groundbreaking idea or need technical expertise, 
              let&apos;s create something extraordinary together!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <motion.div 
                    className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl"
                    whileHover={{ rotate: 10 }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-300 font-medium mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-cyan-400 transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/20">
              <h4 className="text-xl font-semibold text-white mb-6">
                Follow My Journey
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, y: -8, rotateZ: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-white border border-white/20 hover:bg-white/20"
                  >
                    <social.icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap">{social.label}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl p-8 border border-white/20"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">📫</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Send Me a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 transition-all duration-300 hover:bg-white/15"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 transition-all duration-300 hover:bg-white/15"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 transition-all duration-300 hover:bg-white/15"
                  placeholder="Let's work together"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 transition-all duration-300 hover:bg-white/15 resize-none"
                  placeholder="Tell me about your amazing project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`group w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-500/50 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-2xl'
                }`}
              >
                <div className="flex items-center gap-3">
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <motion.div whileHover={{ x: 5 }}>
                      <Send className="w-5 h-5" />
                    </motion.div>
                  )}
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && (
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.div>
                  )}
                </div>
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200"
                >
                  Thanks for your message! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200"
                >
                  Sorry, there was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Modern Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: '< 24h', label: 'Response Time', icon: '⚡' },
            { number: '100%', label: 'Client Satisfaction', icon: '🎯' },
            { number: '50+', label: 'Projects Delivered', icon: '🚀' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-white mb-3">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}