import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'
import FadeIn from '../motion/FadeIn'
import { StaggerContainer, StaggerItem } from '../motion/StaggerContainer'

const placeholderInsights = [
  {
    title: 'Operations Strategy',
    description: 'Perspectives on building efficient operational frameworks in dynamic environments.',
  },
  {
    title: 'Project Management',
    description: 'Insights on coordination, delivery, and managing cross-functional teams effectively.',
  },
  {
    title: 'Business Growth',
    description: 'Approaches to business development and sustainable organizational growth.',
  },
]

const InsightsPreview = () => {
  return (
    <section className="section-lg bg-white">
      <div className="container-main">
        <FadeIn>
          <SectionTitle
            subtitle="Insights"
            title="Thoughts & Perspectives"
          />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {placeholderInsights.map((insight) => (
            <StaggerItem key={insight.title}>
              <Card
                title={insight.title}
                description={insight.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn delay={0.3}>
          <Button variant="secondary" href="/insights">
            View All Insights
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

export default InsightsPreview
