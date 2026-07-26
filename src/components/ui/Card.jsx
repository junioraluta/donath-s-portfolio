const Card = ({ children, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gold/20 transition-all duration-300 ease-out">
      {title && (
        <h3 className="font-heading text-lg font-semibold text-dark mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-body text-dark/70 mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

export default Card
