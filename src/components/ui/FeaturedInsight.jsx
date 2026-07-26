import CategoryBadge from './CategoryBadge'

const FeaturedInsight = ({ title, description, category }) => {
  return (
    <article className="bg-navy rounded-lg p-8 md:p-12">
      <div className="max-w-2xl">
        <div className="mb-6">
          <CategoryBadge category={category} />
        </div>
        <div className="w-12 h-1 bg-gold mb-6" aria-hidden="true" />
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-body-lg text-white/75">
          {description}
        </p>
        <p className="text-body-sm text-white/40 mt-6 italic">
          Coming soon
        </p>
      </div>
    </article>
  )
}

export default FeaturedInsight
