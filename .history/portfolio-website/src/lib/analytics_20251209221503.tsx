// Google Analytics component for client-side analytics
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (!gaId || !window.gtag) return

    const url = pathname + searchParams.toString()
    window.gtag('config', gaId, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

// Custom event tracking
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  if (!gaId || typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', eventName, {
    ...parameters,
  })
}

// Common event trackers
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location,
  })
}

export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent('form_submit', {
    form_name: formName,
    success,
  })
}

export const trackDownload = (fileName: string) => {
  trackEvent('file_download', {
    file_name: fileName,
  })
}

export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_click', {
    url,
    link_text: linkText,
  })
}
