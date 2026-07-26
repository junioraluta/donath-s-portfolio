import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import SectionTitle from '../components/ui/SectionTitle'
import SectionDivider from '../components/ui/SectionDivider'
import TimelineItem from '../components/ui/TimelineItem'
import AchievementCard from '../components/ui/AchievementCard'
import FadeIn from '../components/motion/FadeIn'
import SlideUp from '../components/motion/SlideUp'
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerContainer'

const experiences = [
  {
    company: 'Emagination Power Consulting Ltd',
    role: 'Business Development & Operations Officer Consultant',
    period: 'Aug 2025 — Present',
    description: 'Supporting business growth and operational delivery in a consulting environment.',
    achievements: [
      'Business development operations and lead pipeline management',
      'Client onboarding and service delivery coordination',
      'KPI monitoring and executive reporting',
      'Client retention management and relationship building',
    ],
  },
  {
    company: 'Touch Health',
    role: 'Operations Assistant',
    period: 'May 2019 — Dec 2024',
    description: 'Provided comprehensive operational support across logistics, procurement, finance, and data management for health-focused programs.',
    achievements: [
      'Logistics coordination and procurement support',
      'Financial record management and VAT submissions',
      'Data collection, analysis, and reporting',
      'Stakeholder coordination across programs',
      'Technical system support and documentation',
    ],
  },
]

const donorProjects = [
  'M-Mama Project',
  'WISN-POA',
  'Heart to Heart',
  'HTM-Claudio Ferro',
  'GAINS',
  'FBO',
  'WatotoCare',
]

const achievements = [
  {
    title: 'Operational Efficiency',
    description: 'Streamlined logistics and procurement workflows, reducing turnaround time and improving coordination across multiple programs.',
  },
  {
    title: 'Financial Accuracy',
    description: 'Maintained precise financial records and timely VAT submissions, supporting organizational compliance and accountability.',
  },
  {
    title: 'Communication Accessibility',
    description: 'Facilitated clear communication channels between field teams, management, and external stakeholders across programs.',
  },
  {
    title: 'Field Operations Support',
    description: 'Provided reliable on-the-ground operational support for donor-funded health initiatives across multiple regions.',
  },
]

const Experience = () => {
  return (
    <>
      <SEO
        title="Professional Experience | Donath John"
        description="Explore Donath John's career history including roles at Emagination Power Consulting and Touch Health, supporting operations, business development, and donor-funded programs."
      />
      <PageHero
        title="Professional Experience"
        description="A track record of operational excellence across consulting, healthcare, and development sectors."
      />

      {/* Career Timeline */}
      <section className="section-lg bg-white">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              subtitle="Career"
              title="Work Experience"
            />
          </FadeIn>
          <div className="max-w-3xl">
            {experiences.map((exp, index) => (
              <SlideUp key={exp.company} delay={index * 0.15}>
                <TimelineItem
                  company={exp.company}
                  role={exp.role}
                  period={exp.period}
                  description={exp.description}
                  achievements={exp.achievements}
                />
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Donor-Funded Projects */}
      <SectionDivider variant="gold" />
      <section className="section-md bg-gray-light">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              subtitle="Programs"
              title="Donor-Funded Projects Supported"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body text-dark/80 mb-8 max-w-2xl">
              Provided operational, logistics, and data support across multiple
              donor-funded health and development programs.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3 max-w-3xl">
              {donorProjects.map((project) => (
                <span
                  key={project}
                  className="px-4 py-2 text-body-sm font-medium text-navy bg-white border border-gray-200 rounded-md"
                >
                  {project}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-lg bg-white">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              subtitle="Impact"
              title="Key Achievements"
            />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {achievements.map((achievement) => (
              <StaggerItem key={achievement.title}>
                <AchievementCard
                  title={achievement.title}
                  description={achievement.description}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}

export default Experience
