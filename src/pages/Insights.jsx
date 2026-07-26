import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import SectionTitle from '../components/ui/SectionTitle'
import FeaturedInsight from '../components/ui/FeaturedInsight'
import InsightCard from '../components/ui/InsightCard'
import CategoryBadge from '../components/ui/CategoryBadge'
import Button from '../components/ui/Button'
import FadeIn from '../components/motion/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerContainer'

const categories = ['Operations', 'Leadership', 'Business Strategy', 'Data & Reporting']

const insights = [
  {
    title: 'Building Efficient Operational Systems',
    category: 'Operations',
    description: 'Exploring frameworks for streamlining workflows, reducing bottlenecks, and creating operational systems that scale with organizational growth.',
  },
  {
    title: 'Data-Informed Decision Making',
    category: 'Data & Reporting',
    description: 'How structured data collection and analysis can drive better strategic decisions in operations and project management.',
  },
  {
    title: 'Supporting Sustainable Business Growth',
    category: 'Business Strategy',
    description: 'Approaches to business development that prioritize long-term partnerships, client retention, and sustainable value creation.',
  },
  {
    title: 'Effective Stakeholder Collaboration',
    category: 'Leadership',
    description: 'Building communication frameworks that keep internal teams, external partners, and leadership aligned on shared objectives.',
  },
]

const Insights = () => {
  return (
    <>
      <SEO
        title="Insights | Donath John"
        description="Professional perspectives on operations, strategy, leadership, and data-driven decision making from Donath John."
      />
      <PageHero
        title="Insights"
        description="Perspectives on operations, strategy, leadership, and organizational improvement."
      />

      {/* Featured Insight */}
      <section className="section-lg bg-white">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              subtitle="Featured"
              title="Latest Thinking"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <FeaturedInsight
              title="Operational Excellence in Modern Organizations"
              description="A future article exploring approaches to improving processes, efficiency, and service delivery in complex organizational environments."
              category="Operations"
            />
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="section-sm bg-gray-light">
        <div className="container-main">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-body-sm text-dark/60 font-medium mr-2">Topics:</span>
              {categories.map((category) => (
                <CategoryBadge key={category} category={category} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Insights Library */}
      <section className="section-lg bg-white">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              subtitle="Library"
              title="Upcoming Perspectives"
            />
            <p className="text-body text-dark/60 mb-8 -mt-8">
              Future thought leadership content — topics in development.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {insights.map((insight) => (
              <StaggerItem key={insight.title}>
                <InsightCard
                  title={insight.title}
                  category={insight.category}
                  description={insight.description}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-md bg-navy">
        <div className="container-main text-center">
          <FadeIn>
            <div className="w-12 h-1 bg-gold mx-auto mb-8" aria-hidden="true" />
            <h2 className="text-page-heading text-white mb-4">
              Let&apos;s Discuss
            </h2>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-8">
              Interested in discussing operations, strategy, or collaboration?
              I welcome conversations with professionals and organizations.
            </p>
            <Button variant="primary" href="/contact">
              Start a Conversation
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Insights
