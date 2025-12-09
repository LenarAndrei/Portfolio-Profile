// Utility function to create placeholder data URLs for images
export function getPlaceholderImage(width: number, height: number, text?: string): string {
  const canvas = typeof document !== 'undefined' 
    ? document.createElement('canvas')
    : null
    
  if (!canvas) {
    // Return a simple SVG placeholder for SSR
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='${Math.min(width, height) / 10}' fill='%239ca3af'%3E${text || `${width}x${height}`}%3C/text%3E%3C/svg%3E`
  }
  
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return ''
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#667eea')
  gradient.addColorStop(1, '#764ba2')
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
  
  // Add text
  ctx.fillStyle = '#ffffff'
  ctx.font = `${Math.min(width, height) / 10}px sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text || `${width}x${height}`, width / 2, height / 2)
  
  return canvas.toDataURL()
}

// Blur placeholder for Next.js Image component
export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f3f4f6" offset="20%" />
      <stop stop-color="#e5e7eb" offset="50%" />
      <stop stop-color="#f3f4f6" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f3f4f6" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const blurDataURL = (w: number, h: number) => 
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`

// Sample project images configuration
export const projectImages = [
  {
    id: 1,
    src: '/images/projects/ecommerce.jpg',
    alt: 'E-Commerce Platform Screenshot',
    width: 1200,
    height: 800,
  },
  {
    id: 2,
    src: '/images/projects/task-manager.jpg',
    alt: 'Task Management App Screenshot',
    width: 1200,
    height: 800,
  },
  {
    id: 3,
    src: '/images/projects/weather-dashboard.jpg',
    alt: 'Weather Dashboard Screenshot',
    width: 1200,
    height: 800,
  },
  {
    id: 4,
    src: '/images/projects/api-gateway.jpg',
    alt: 'API Gateway Service Diagram',
    width: 1200,
    height: 800,
  },
  {
    id: 5,
    src: '/images/projects/fitness-tracker.jpg',
    alt: 'Mobile Fitness Tracker Screenshot',
    width: 1200,
    height: 800,
  },
  {
    id: 6,
    src: '/images/projects/real-estate.jpg',
    alt: 'Real Estate Platform Screenshot',
    width: 1200,
    height: 800,
  },
]
