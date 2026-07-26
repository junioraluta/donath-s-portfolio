import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Impact from './pages/Impact'
import Insights from './pages/Insights'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
