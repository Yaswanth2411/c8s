export const trackEvent = (action: string, category: string, label: string, value?: number) => {
    try {
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", action, {
          event_category: category,
          event_label: label,
          value: value,
        })
      }
    } catch (error) {
      console.error("Analytics error:", error)
    }
  }
  
  