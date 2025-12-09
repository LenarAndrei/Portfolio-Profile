'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error occurred:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl backdrop-blur-xl bg-white/10 p-12 rounded-3xl shadow-2xl border border-white/20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="inline-flex items-center justify-center w-24 h-24 bg-red-500/20 rounded-full mb-8"
        >
          <AlertCircle className="w-12 h-12 text-red-400" />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Oops! Something went wrong
        </h1>
        
        <p className="text-xl text-gray-300 mb-8">
          {error.message || "We encountered an unexpected error. Don't worry, we're on it!"}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            onClick={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </motion.button>
          
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl font-semibold transition-all"
            >
              <Home className="w-5 h-5" />
              Go Home
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
