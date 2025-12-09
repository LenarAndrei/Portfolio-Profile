import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6">
      <div className="text-center max-w-2xl backdrop-blur-xl bg-white/10 p-12 rounded-3xl shadow-2xl border border-white/20">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-500/20 rounded-full mb-8">
          <span className="text-6xl">🔍</span>
        </div>
        
        <h1 className="text-8xl font-black text-white mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Page Not Found</h2>
        
        <p className="text-xl text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <Home className="w-5 h-5" />
              Go Home
            </button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl font-semibold transition-all hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
