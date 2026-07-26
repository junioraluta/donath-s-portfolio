const ImpactCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gold/20 transition-all duration-300 ease-out">
      <div className="w-10 h-1 bg-gold mb-5" aria-hidden="true" />
      {Icon && (
        <div className="mb-4 text-navy">
          <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
        </div>
      )}
      <h3 className="font-heading text-lg font-semibold text-dark mb-3">{title}</h3>
      <p className="text-body text-dark/70">{description}</p>
    </div>
  )
}

export default ImpactCard
