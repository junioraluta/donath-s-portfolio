import { Link } from 'react-router-dom'

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  'outline-light': 'btn-outline-light',
}

const Button = ({ variant = 'primary', children, href, onClick, download, disabled, ...props }) => {
  const className = `${variantClasses[variant] || variantClasses.primary}${disabled ? ' btn-disabled' : ''}`

  // External link or downloadable file
  if (href && (href.startsWith('http') || download)) {
    return (
      <a
        href={href}
        className={className}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        download={download || undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  // Internal route link
  if (href) {
    return (
      <Link to={href} className={className} {...props}>
        {children}
      </Link>
    )
  }

  // Button element
  return (
    <button className={className} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
