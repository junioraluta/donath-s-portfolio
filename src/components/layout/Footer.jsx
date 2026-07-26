import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Impact', path: '/impact' },
  { label: 'Insights', path: '/insights' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-navy section-sm">
      {/* Top gold accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden="true" />

      <div className="container-main">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="block">
              <span className="font-heading text-xl font-bold text-white tracking-tight">
                DONATH JOHN
              </span>
            </Link>
            <p className="text-body-sm text-white/50 mt-2 max-w-xs">
              Operations & Business Development Professional
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-body-sm text-white/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-body-sm text-gold font-medium mb-2">Get in Touch</p>
            <a
              href="mailto:donathj8@gmail.com"
              className="text-body-sm text-white/60 hover:text-white transition-colors duration-200 block mb-1"
            >
              donathj8@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/donath-john-94867a24b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-white/60 hover:text-gold transition-colors duration-200 block"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" aria-hidden="true" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-body-sm text-white/40">
            &copy; {currentYear} Donath John. All rights reserved.
          </p>
          <a
            href="https://wa.me/255734502499?text=Hi%20Junior%2C%20I%20found%20your%20contact%20from%20Donath%20John%27s%20portfolio%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-body-sm text-white/50 hover:text-gold transition-colors duration-200 group"
          >
            <span>Designed &amp; Developed by <span className="font-medium text-white/70 group-hover:text-gold">Junior Aluta</span></span>
            <span className="text-xs px-2 py-0.5 rounded-full border border-gold/30 text-gold/80 group-hover:bg-gold/10 transition-colors duration-200">Hire Me</span>
          </a>
          <div className="flex items-center gap-2" aria-hidden="true">
            <div className="w-6 h-[1px] bg-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <div className="w-6 h-[1px] bg-gold/40" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
