import { Download } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import ResumeSection from '../components/ui/ResumeSection'
import EducationCard from '../components/ui/EducationCard'
import SkillGroup from '../components/ui/SkillGroup'
import Button from '../components/ui/Button'
import FadeIn from '../components/motion/FadeIn'
import SlideUp from '../components/motion/SlideUp'

const coreSkills = [
  'Business & Operations Management',
  'Project Coordination',
  'Business Development Support',
  'Client Onboarding & Retention',
  'Data Collection & Analysis',
  'Procurement & Vendor Coordination',
  'Financial Record Keeping & VAT',
  'Reporting & KPI Monitoring',
  'Logistics & Event Planning',
  'Problem-Solving & Adaptability',
]

const education = [
  {
    qualification: 'Advanced Diploma in Procurement and Supplies Management',
    institution: 'Tanzania Procurement and Supplies Professional Board',
    year: null,
  },
  {
    qualification: 'Diploma in Operations and Project Management',
    institution: 'UniAthena Global Education',
    year: '2024',
  },
  {
    qualification: 'Technician Certificate in Procurement and Supply Management',
    institution: 'College of Business Education',
    year: '2019',
  },
]

const languages = ['English', 'Swahili']
const software = ['Microsoft Office', 'Outlook', 'Google Mail', 'Microsoft Windows']

const Resume = () => {
  return (
    <>
      <SEO
        title="Resume | Donath John"
        description="View Donath John's professional resume summary — operations, business development, project coordination, and stakeholder management."
      />
      <PageHero
        title="Professional Resume"
        description="A summary of qualifications, experience, and credentials."
      />

      {/* Download CTA at top */}
      <section className="py-10 bg-gray-light border-b border-gray-200">
        <div className="container-main max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-body font-medium text-dark mb-1">
              Want the full details?
            </p>
            <p className="text-body-sm text-dark/60">
              Download the complete CV with all responsibilities, achievements, and references.
            </p>
          </div>
          <Button variant="primary" href="/documents/Donath_John_CV.pdf" download="Donath_John_CV.pdf">
            <Download size={18} className="mr-2" aria-hidden="true" />
            Download Full CV
          </Button>
        </div>
      </section>

      <section className="section-lg bg-white">
        <div className="container-main max-w-4xl">
          {/* Professional Profile */}
          <FadeIn>
            <ResumeSection title="Professional Summary">
              <p className="text-body text-dark/80 leading-relaxed">
                Results-oriented operations and project management professional with over 4 years
                of progressive experience. Proven ability to manage end-to-end operational
                processes, coordinate diverse stakeholders, maintain financial and procurement
                compliance, and support executive decision-making through structured reporting.
                Recognized for driving operational efficiency, maintaining accuracy in financial
                records, and adapting quickly in fast-paced environments.
              </p>
            </ResumeSection>
          </FadeIn>

          {/* Career Experience */}
          <SlideUp>
            <ResumeSection title="Career Experience">
              {/* Role 1 */}
              <div className="mb-10 pb-10 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-dark">
                      Business Development &amp; Operations Officer Consultant
                    </h3>
                    <p className="text-body-sm text-dark/60 font-medium">
                      Emagination Power Consulting Ltd
                    </p>
                  </div>
                  <span className="text-body-sm text-gold font-medium shrink-0">
                    Aug 2025 — Present
                  </span>
                </div>
                <p className="text-body-sm text-dark/70 leading-relaxed">
                  Managing end-to-end business development operations including lead pipeline
                  management, client onboarding, service delivery coordination, KPI monitoring,
                  executive reporting, and client retention — sustaining 90%+ retention rates.
                </p>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-dark">
                      Operations Assistant
                    </h3>
                    <p className="text-body-sm text-dark/60 font-medium">Touch Health</p>
                  </div>
                  <span className="text-body-sm text-gold font-medium shrink-0">
                    May 2019 — Dec 2024
                  </span>
                </div>
                <p className="text-body-sm text-dark/70 leading-relaxed mb-4">
                  Provided comprehensive operational support across logistics, procurement,
                  financial management, data reporting, and stakeholder coordination for
                  health-focused programs. Additionally served as Field &amp; Program Specialist
                  supporting multiple donor-funded initiatives.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['M-Mama', 'WISN-POA', 'Heart to Heart', 'GAINS', 'FBO', 'WatotoCare'].map((program) => (
                    <span
                      key={program}
                      className="px-3 py-1 text-xs font-medium text-navy bg-gray-light border border-gray-200 rounded-md"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            </ResumeSection>
          </SlideUp>

          {/* Core Skills */}
          <SlideUp>
            <ResumeSection title="Core Skills">
              <SkillGroup title="Professional Competencies" skills={coreSkills} />
            </ResumeSection>
          </SlideUp>

          {/* Education */}
          <SlideUp>
            <ResumeSection title="Education">
              <div className="space-y-4">
                {education.map((edu) => (
                  <EducationCard
                    key={edu.qualification}
                    institution={edu.institution}
                    qualification={edu.qualification}
                    year={edu.year}
                  />
                ))}
              </div>
            </ResumeSection>
          </SlideUp>

          {/* Additional */}
          <FadeIn>
            <ResumeSection title="Additional">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillGroup title="Languages" skills={languages} />
                <SkillGroup title="Software" skills={software} />
              </div>
            </ResumeSection>
          </FadeIn>

          {/* Bottom Download CTA */}
          <FadeIn>
            <div className="mt-20 pt-10 border-t border-gray-200 text-center">
              <p className="text-body-lg text-dark/80 font-medium mb-2">
                For the complete picture
              </p>
              <p className="text-body-sm text-dark/60 mb-6 max-w-md mx-auto">
                The full CV includes detailed responsibilities, key achievements,
                donor-funded program details, and professional references.
              </p>
              <Button variant="primary" href="/documents/Donath_John_CV.pdf" download="Donath_John_CV.pdf">
                <Download size={18} className="mr-2" aria-hidden="true" />
                Download Full CV
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Resume
