import ReactGA from 'react-ga4'

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

/**
 * Initialize Google Analytics.
 * Only initializes if a valid measurement ID is provided.
 */
export const initializeAnalytics = () => {
  if (MEASUREMENT_ID) {
    ReactGA.initialize(MEASUREMENT_ID)
  }
}

/**
 * Track a page view.
 * @param {string} path - The page path to track.
 * @param {string} [title] - Optional page title.
 */
export const trackPageView = (path, title) => {
  if (MEASUREMENT_ID) {
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title || document.title,
    })
  }
}
