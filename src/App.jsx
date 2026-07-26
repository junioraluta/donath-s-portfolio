import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/ui/BackToTop'
import PageTransition from './components/motion/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Impact from './pages/Impact'
import Insights from './pages/Insights'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
          <Route path="/impact" element={<PageTransition><Impact /></PageTransition>} />
          <Route path="/insights" element={<PageTransition><Insights /></PageTransition>} />
          <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
