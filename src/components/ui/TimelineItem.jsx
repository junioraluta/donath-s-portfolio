const TimelineItem = ({ company, role, period, description, achievements }) => {
  return (
    <div className="relative pl-10 pb-14 last:pb-0 border-l-2 border-gray-200 hover:border-gold/40 transition-colors duration-300">
      {/* Timeline indicator */}
      <div className="absolute left-[-8px] top-1 w-[14px] h-[14px] rounded-full bg-gold border-[3px] border-white shadow-sm" aria-hidden="true" />

      {/* Content */}
      <div>
        <p className="text-body-sm text-gold font-semibold mb-1 uppercase tracking-wide">{period}</p>
        <h3 className="font-heading text-xl font-bold text-dark mb-1">{role}</h3>
        <p className="text-body-sm text-dark/55 font-medium mb-5">{company}</p>

        {description && (
          <p className="text-body text-dark/75 mb-5 leading-relaxed">{description}</p>
        )}

        {achievements && achievements.length > 0 && (
          <ul className="space-y-2.5">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-navy/70 mt-2 shrink-0" aria-hidden="true" />
                <span className="text-body-sm text-dark/70 leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default TimelineItem
