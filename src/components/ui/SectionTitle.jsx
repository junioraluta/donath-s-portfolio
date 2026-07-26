const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-16">
      {subtitle && (
        <p className="text-body-sm uppercase tracking-widest text-gold font-medium mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-section-heading text-dark">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
