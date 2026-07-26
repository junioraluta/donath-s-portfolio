import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import SectionTitle from '../components/ui/SectionTitle'
import SkillGroup from '../components/ui/SkillGroup'
import FadeIn from '../components/motion/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerContainer'

const competencies = [
  'Operations Management',
  'Project Coordination',
  'Business Development',
  'Procurement',
  'Data Analysis',
  'Reporting',
]

const languages = ['English', 'Swahili']

const software = ['Microsoft Office', 'Outlook', 'Google Mail', 'Microsoft Windows']

const About = () => {
  return (
    <>
      <SEO
        title="About Donath John | Professional Background"
        description="Learn about Donath John's professional background, core competencies, and philosophy in operations management, project coordination, and business development."
      />
      <PageHero
        title="About Donath John"
        description="Operations & Business Development Professional"
      />

      {/* Professional Introduction */}
      <section className="section-lg bg-white">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              subtitle="Introduction"
              title="Professional Background"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              <div>
                <p className="text-body text-dark/80 mb-4">
                  With over four years of professional experience, Donath John has
                  built a strong foundation in business operations, project coordination,
                  and stakeholder management across both donor-funded and private sector
                  environments.
                </p>
                <p className="text-body text-dark/80">
                  His work spans operational support, business development, procurement,
                  and data-driven reporting — consistently contributing to organizational
                  efficiency and measurable outcomes.
                </p>
              </div>
              <div>
                <p className="text-body text-dark/80 mb-4">
                  From supporting healthcare programs and NGO initiatives to driving
                  business development in consulting, Donath brings a versatile skill set
                  grounded in structure, communication, and execution.
                </p>
                <p className="text-body text-dark/80">
                  He thrives in cross-functional environments where attention to detail
                  and collaborative coordination make the difference between good
                  operations and excellent ones.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="section-md bg-gray-light">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              subtitle="Philosophy"
              title="How I Work"
            />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
            {[
              { title: 'Operational Efficiency', text: 'Streamlining processes to maximize output with minimal friction.' },
              { title: 'Structured Processes', text: 'Building repeatable frameworks that ensure consistency and reliability.' },
              { title: 'Stakeholder Collaboration', text: 'Maintaining clear communication across all levels of an organization.' },
              { title: 'Continuous Improvement', text: 'Always looking for ways to refine, optimize, and deliver better outcomes.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-8 h-0.5 bg-gold mb-4" aria-hidden="true" />
                  <h3 className="font-heading text-base font-semibold text-dark mb-2">{item.title}</h3>
                  <p className="text-body-sm text-dark/70">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Core Competencies & Skills */}
      <section className="section-lg bg-white">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              subtitle="Skills"
              title="Core Competencies"
            />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <StaggerItem>
              <SkillGroup title="Professional" skills={competencies} />
            </StaggerItem>
            <StaggerItem>
              <SkillGroup title="Languages" skills={languages} />
            </StaggerItem>
            <StaggerItem>
              <SkillGroup title="Software" skills={software} />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}

export default About
