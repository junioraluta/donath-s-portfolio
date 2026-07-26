import { StaggerContainer, StaggerItem } from '../motion/StaggerContainer'
import useCountUp from '../../hooks/useCountUp'

const CountUpMetric = ({ value, suffix = '' }) => {
  const { count, ref } = useCountUp(value, 2000)

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const metrics = [
  { value: 4, suffix: '+', label: 'Years Experience', isNumeric: true },
  { value: 90, suffix: '%+', label: 'Client Retention', isNumeric: true },
  { display: 'Multiple', label: 'Donor-Funded Projects Supported', isNumeric: false },
  { display: 'Cross-functional', label: 'Operations & Project Support', isNumeric: false },
]

const MetricsSection = () => {
  return (
    <section className="section-md bg-gray-light bg-dot-pattern">
      <div className="container-main">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 text-center relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden="true" />
                <p className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">
                  {metric.isNumeric ? (
                    <CountUpMetric value={metric.value} suffix={metric.suffix} />
                  ) : (
                    metric.display
                  )}
                </p>
                <p className="text-body-sm text-dark/60 font-medium">
                  {metric.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default MetricsSection
