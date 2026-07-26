import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import FadeIn from '../motion/FadeIn'
import SlideUp from '../motion/SlideUp'

const impactAreas = [
  'Healthcare program operations support',
  'NGO and donor-funded project coordination',
  'Operational efficiency improvements',
  'Reporting systems and data management',
]

const ImpactPreview = () => {
  return (
    <section className="section-lg bg-gray-light bg-dot-pattern">
      <div className="container-main">
        <div className="max-w-3xl">
          <FadeIn>
            <SectionTitle
              subtitle="Career Impact"
              title="Making a Difference"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body-lg text-dark/80 mb-8">
              Contributed to meaningful outcomes across healthcare, development, and
              private sector organizations through structured operations support and
              reliable project delivery.
            </p>
          </FadeIn>
          <SlideUp delay={0.2}>
            <ul className="space-y-3 mb-10">
              {impactAreas.map((area) => (
                <li key={area} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" aria-hidden="true" />
                  <span className="text-body text-dark/80">{area}</span>
                </li>
              ))}
            </ul>
          </SlideUp>
          <FadeIn delay={0.3}>
            <Button variant="secondary" href="/experience">
              View Full Experience
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default ImpactPreview
