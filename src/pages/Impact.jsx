import { Settings, Users, BarChart3, Handshake } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import SectionTitle from '../components/ui/SectionTitle'
import SectionDivider from '../components/ui/SectionDivider'
import ImpactCard from '../components/ui/ImpactCard'
import Button from '../components/ui/Button'
import FadeIn from '../components/motion/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerContainer'

const impactAreas = [
  {
    title: 'Operational Excellence',
    description: 'Supporting structured processes, logistics coordination, and operational efficiency across programs and organizations.',
    icon: Settings,
  },
  {
    title: 'Program Delivery Support',
    description: 'Contributing to successful implementation of NGO and donor-funded initiatives through reliable coordination and follow-through.',
    icon: Users,
  },
  {
    title: 'Data & Reporting',
    description: 'Supporting data collection, validation, analysis, and reporting activities that inform strategic decisions.',
    icon: BarChart3,
  },
  {
    title: 'Stakeholder Coordination',
    description: 'Working with teams, partners, and stakeholders to support service delivery and maintain effective communication.',
    icon: Handshake,
  },
]

const supportedPrograms = [
  'M-Mama Project',
  'WISN-POA',
  'Heart to Heart',
  'HTM-Claudio Ferro',
  'GAINS',
  'FBO',
  'WatotoCare',
]

const Impact = () => {
  return (
    <>
      <SEO
        title="Impact & Contributions | Donath John"
        description="Discover Donath John's professional impact across operational excellence, program delivery, data reporting, and stakeholder coordination."
      />
      <PageHero
        title="Impact & Contributions"
        description="Supporting efficient operations, stronger systems, and impactful programs."
      />

      {/* Impact Introduction */}
      <section className="section-lg bg-white">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              subtitle="Overview"
              title="Professional Impact"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-3xl">
              <p className="text-body-lg text-dark/80 mb-4">
                Throughout his career, Donath has contributed to meaningful outcomes
                by supporting operational improvement, program delivery, data-driven
                reporting, and cross-functional stakeholder coordination.
              </p>
              <p className="text-body text-dark/70">
                His contributions span healthcare operations, development sector programs,
                and business consulting — always focused on building systems that work
                efficiently and deliver results reliably.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section-lg bg-gray-light">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              subtitle="Contributions"
              title="Areas of Impact"
            />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {impactAreas.map((area) => (
              <StaggerItem key={area.title}>
                <ImpactCard
                  title={area.title}
                  description={area.description}
                  icon={area.icon}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Supported Programs */}
      <SectionDivider variant="gold" />
      <section className="section-md bg-white">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              subtitle="Programs"
              title="Supported Initiatives"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body text-dark/80 mb-8 max-w-2xl">
              Provided operational, logistics, and data support across the following
              donor-funded health and development programs.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3 max-w-3xl">
              {supportedPrograms.map((program) => (
                <span
                  key={program}
                  className="px-4 py-2 text-body-sm font-medium text-navy bg-gray-light border border-gray-200 rounded-md"
                >
                  {program}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-md bg-navy">
        <div className="container-main text-center">
          <FadeIn>
            <div className="w-12 h-1 bg-gold mx-auto mb-8" aria-hidden="true" />
            <h2 className="text-page-heading text-white mb-4">
              Let&apos;s Collaborate
            </h2>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-8">
              Open to opportunities in operations support, project coordination,
              and business collaboration. Let&apos;s discuss how I can contribute
              to your organization.
            </p>
            <Button variant="primary" href="/contact">
              Get in Touch
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Impact
