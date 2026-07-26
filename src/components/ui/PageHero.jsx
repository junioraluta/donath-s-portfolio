import FadeIn from '../motion/FadeIn'

const PageHero = ({ title, description }) => {
  return (
    <section className="relative overflow-hidden bg-navy section-md">
      {/* Subtle background treatment */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d2847]" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/[0.02] to-transparent" />
      </div>

      <div className="container-main relative">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-[2px] bg-gold" aria-hidden="true" />
          </div>
          <h1 className="text-page-heading text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-body-lg text-white/75 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  )
}

export default PageHero
