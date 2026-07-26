import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import FadeIn from '../motion/FadeIn'
import { StaggerContainer, StaggerItem } from '../motion/StaggerContainer'

const expertiseAreas = [
  {
    title: 'Business Operations',
    description: 'Streamlining day-to-day operations, managing workflows, and ensuring organizational efficiency across departments.',
  },
  {
    title: 'Project Management',
    description: 'Coordinating project activities, timelines, and deliverables across cross-functional teams and stakeholders.',
  },
  {
    title: 'Business Development',
    description: 'Supporting growth initiatives, identifying opportunities, and building relationships with clients and partners.',
  },
  {
    title: 'Procurement & Logistics',
    description: 'Managing procurement processes, vendor coordination, and logistics planning for timely project delivery.',
  },
  {
    title: 'Data Analysis & Reporting',
    description: 'Producing data-driven reports and insights that support strategic decision-making and operational improvements.',
  },
  {
    title: 'Stakeholder Management',
    description: 'Maintaining effective communication between internal teams, external partners, and organizational leadership.',
  },
]

const ExpertiseSection = () => {
  return (
    <section className="section-lg bg-white">
      <div className="container-main">
        <FadeIn>
          <SectionTitle
            subtitle="What I Do"
            title="Areas of Expertise"
          />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area) => (
            <StaggerItem key={area.title}>
              <Card
                title={area.title}
                description={area.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default ExpertiseSection
