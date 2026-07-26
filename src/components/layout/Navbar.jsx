import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Impact', path: '/impact' },
  { label: 'Insights', path: '/insights' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/60'
          : 'bg-white border-b border-gray-200/80'
      }`}
    >
      <nav
        className={`container-main flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
      >
        {/* Branding */}
        <Link
          to="/"
          className="block"
          onClick={closeMobileMenu}
        >
          <span className="font-heading text-xl font-bold tracking-tight text-navy">
            DONATH JOHN
          </span>
          <span className="block font-body text-xs text-gold/80 tracking-wide mt-0.5">
            Operations &amp; Business Development Professional
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-body-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-navy border-b-2 border-gold pb-1'
                      : 'text-dark/70 hover:text-navy'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="secondary" href="/resume">
            Resume
          </Button>
          <Button variant="primary" href="/contact">
            Contact
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200/80 bg-white/95 backdrop-blur-md">
          <div className="container-main py-6">
            <ul className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block text-body font-medium py-2 transition-colors duration-200 ${
                        isActive ? 'text-navy' : 'text-dark/70 hover:text-navy'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <Button variant="secondary" href="/resume" onClick={closeMobileMenu}>
                Resume
              </Button>
              <Button variant="primary" href="/contact" onClick={closeMobileMenu}>
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
