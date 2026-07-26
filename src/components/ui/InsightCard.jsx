import CategoryBadge from './CategoryBadge'

const InsightCard = ({ title, category, description, date }) => {
  return (
    <article className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="mb-4">
        <CategoryBadge category={category} />
      </div>
      <h3 className="font-heading text-lg font-semibold text-dark mb-3">
        {title}
      </h3>
      <p className="text-body-sm text-dark/70 flex-1">
        {description}
      </p>
      {date && (
        <p className="text-xs text-dark/40 mt-4 pt-3 border-t border-gray-100">
          {date}
        </p>
      )}
    </article>
  )
}

export default InsightCard
