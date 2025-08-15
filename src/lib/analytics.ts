// Google Analytics utility functions
export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with actual GA4 tracking ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// Track custom events
export const event = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Predefined events for the landing page
export const trackDownload = (method: string) => {
  event('download', 'engagement', method)
}

export const trackNavigation = (destination: string) => {
  event('navigate', 'engagement', destination)
}

export const trackFeatureView = (feature: string) => {
  event('feature_view', 'engagement', feature)
}

export const trackTestimonialView = (testimonial: string) => {
  event('testimonial_view', 'engagement', testimonial)
}

export const trackCTAClick = (cta: string) => {
  event('cta_click', 'conversion', cta)
}

export const trackFormSubmit = (form: string) => {
  event('form_submit', 'conversion', form)
}
