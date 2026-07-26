const ContactCard = ({ title, value, icon: Icon, href }) => {
  const content = (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gold/20 transition-all duration-300 ease-out flex items-start gap-4">
      {Icon && (
        <div className="w-10 h-10 rounded-md bg-navy/5 flex items-center justify-center shrink-0">
          <Icon size={20} className="text-navy" aria-hidden="true" />
        </div>
      )}
      <div>
        <p className="text-body-sm text-dark/60 font-medium mb-1">{title}</p>
        <p className="text-body font-medium text-dark">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {content}
      </a>
    )
  }

  return content
}

export default ContactCard
