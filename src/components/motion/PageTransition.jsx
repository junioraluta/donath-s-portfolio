import { motion, useReducedMotion } from 'framer-motion'

const PageTransition = ({ children }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.35,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
