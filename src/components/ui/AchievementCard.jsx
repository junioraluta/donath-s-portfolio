const AchievementCard = ({ title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gold/20 transition-all duration-300 ease-out">
      <div className="w-8 h-1 bg-gold mb-4" aria-hidden="true" />
      <h3 className="font-heading text-lg font-semibold text-dark mb-2">{title}</h3>
      <p className="text-body-sm text-dark/70">{description}</p>
    </div>
  )
}

export default AchievementCard
