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
    institution: 'Federation of Education in Europe (UniAthena Global Education)',
    year: '2024',
  },
  {
    qualification: 'Technician Certificate in Procurement and Supply Management',
    institution: 'College of Business Education',
    year: '2019',
  },
]

const emaginationResponsibilities = [
  'Business Development Operations – Managed end-to-end business development activities from prospecting and needs assessment to proposal development and deal closure.',
  'Lead & Pipeline Management – Built and tracked a structured sales pipeline covering leads, meetings, proposals, and conversions to support growth targets.',
  'Client Onboarding Coordination – Oversaw client onboarding processes to ensure smooth transition from acquisition to service delivery.',
  'Service Delivery Oversight – Coordinated internal teams to ensure timely, high-quality service delivery aligned with client expectations.',
  'Client Retention Management – Maintained strong client relationships through structured engagement and issue resolution, sustaining 90%+ retention.',
  'KPI Monitoring & Analysis – Tracked operational and commercial KPIs to identify trends, risks, and improvement opportunities.',
  'Executive Reporting – Prepared concise weekly reports on leads, contracts, performance, and feedback to support MD/CEO decision-making.',
  'Upselling & Account Growth – Identified upsell and cross-sell opportunities to support revenue growth and long-term client partnerships.',
]

const touchHealthResponsibilities = [
  'Accommodation and Event Planning: Organized staff hotel and in-house accommodations while planning events to ensure smooth logistics and successful outcomes.',
  'Inventory and Office Supplies Management: Maintained office inventory and supplies to support uninterrupted operations and ensure resource availability.',
  'Financial Assistance: Collected outstanding invoices and receipts, prepared expense requests, and maintained accurate financial records for audits and compliance.',
  'Procurement Coordination: Sourced quotes for minor and large procurements and ensured timely transfer and delivery of procured items and services.',
  'Translation Services: Provided Swahili-English translations for documents, meetings, and training sessions, ensuring clear communication and accessibility.',
  'Data Entry and Reporting: Completed data entry tasks for the program team, contributing to accurate reporting and informed decision-making.',
  'File and Logistics Management: Managed the guest accommodation logbook, postal office box, and office files to maintain organization and efficiency. This included managing office vehicle & driver.',
  'VAT Submissions: Prepared and submitted VAT documents, ensuring compliance with tax regulations and timely processing.',
  'Operations, HR, and Administrative Support: Coordinated staff schedules, managed office administration, and oversaw accommodations, logistics, and procurement to ensure seamless operations.',
  'Field Operations Coordination – Coordinated field activities and emergency transport operations across health programs.',
  'Data Collection & Analysis – Collected, validated, and analyzed program data for reporting and decision-making.',
  'Training & Capacity Building – Trained dispatchers and frontline staff on systems and protocols.',
  'Technical System Support – Tested applications and provided technical support for trip tracking systems.',
  'Stakeholder Engagement – Coordinated with government and partner stakeholders on program delivery.',
  'M&E Support & Reporting – Supported monitoring, evaluation, and donor reporting activities.',
]

const touchHealthAchievements = [
  'Streamlined Office Operations: Successfully organized and maintained office utilities, inventory, and supplies, enhancing overall efficiency and resource availability.',
  'Enhanced Financial Accuracy: Ensured precise financial record-keeping and timely VAT submissions, reducing discrepancies and improving compliance with financial regulations.',
  'Improved Communication Accessibility: Provided effective Swahili-English translations for key documents and meetings, facilitating clear communication across diverse stakeholders.',
]

const donorPrograms = [
  { name: 'M-Mama Project', funder: 'Vodafone Foundation' },
  { name: 'WISN-POA', funder: 'USAID' },
  { name: 'Heart to Heart', funder: 'Astra Zeneca' },
  { name: 'HTM-Claudio Ferro', funder: null },
  { name: 'GAINS', funder: 'Sanofi' },
  { name: 'FBO', funder: 'Vitol' },
  { name: 'WatotoCare', funder: 'ELMA Foundation' },
]

const languages = ['English', 'Swahili']
const software = ['Microsoft Office', 'Outlook', 'Google Mail', 'Microsoft Windows']

const references = [
  {
    name: 'Bonaventure Aluta',
    title: 'Operations Manager, Touch Health',
    email: 'bonaventurealuta@gmail.com',
    phone: '+255 765 829 257 / +255 787 891 477',
  },
  {
    name: 'Salome Mnzava',
    title: 'Human Resources & Administration Manager, Touch Health',
    email: 'salomemnzava7@gmail.com',
    phone: '+255 65 500 9242',
  },
  {
    name: 'Prof. Robert Galan Mashenene',
    title: 'Deputy Rector, College of Business Education',
    email: 'gmashenene@yahoo.com',
    phone: '+255 625 643 188',
  },
]

const Resume = () => {
  return (
    <>
      <SEO
        title="Resume | Donath John"
        description="View Donath John's complete professional resume including career history, education, skills, and qualifications in operations and business development."
      />
      <PageHero
        title="Professional Resume"
        description="Complete professional profile, career history, and qualifications."
      />

      {/* Download CTA at top */}
      <section className="py-6 bg-gray-light border-b border-gray-200">
        <div className="container-main max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-body text-dark/70">
            Prefer a PDF version? Download the full CV below.
          </p>
          <Button variant="primary" href="/documents/Donath_John_CV.pdf" download="Donath_John_CV.pdf">
            <Download size={18} className="mr-2" aria-hidden="true" />
            Download CV
          </Button>
        </div>
      </section>

      <section className="section-lg bg-white">
        <div className="container-main max-w-4xl">
          {/* Professional Profile */}
          <FadeIn>
            <ResumeSection title="Professional Profile">
              <p className="text-body text-dark/80">
                Results-oriented operations and project management professional with over 4 years
                of progressive experience supporting business operations, program delivery,
                procurement, logistics, and data-driven reporting. Proven ability to manage
                end-to-end operational processes, coordinate diverse stakeholders, maintain
                financial and procurement compliance, and support executive decision-making
                through structured reporting. Experience includes business development support,
                client onboarding, KPI monitoring, and service delivery coordination, alongside
                a strong background in NGO and donor-funded projects. Recognized for driving
                operational efficiency, maintaining accuracy in financial records, engaging
                stakeholders effectively, and adapting quickly in fast-paced environments.
              </p>
            </ResumeSection>
          </FadeIn>

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

          {/* Career Summary */}
          <SlideUp>
            <ResumeSection title="Career Summary">
              {/* Role 1 */}
              <div className="mb-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
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
                <p className="text-body-sm text-dark/60 font-medium mb-3">Key Responsibilities</p>
                <ul className="space-y-2">
                  {emaginationResponsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0" aria-hidden="true" />
                      <span className="text-body-sm text-dark/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Role 2 */}
              <div className="mb-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
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
                <p className="text-body-sm text-dark/60 font-medium mb-3">Key Responsibilities</p>
                <ul className="space-y-2">
                  {touchHealthResponsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0" aria-hidden="true" />
                      <span className="text-body-sm text-dark/80">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Achievements */}
                <div className="mt-6">
                  <p className="text-body-sm text-dark/60 font-medium mb-3">Key Achievements</p>
                  <ul className="space-y-2">
                    {touchHealthAchievements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" aria-hidden="true" />
                        <span className="text-body-sm text-dark/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Donor Programs */}
                <div className="mt-6">
                  <p className="text-body-sm text-dark/70 mb-3">
                    In addition to operational responsibilities, played a key role as a Field &amp;
                    Program Specialist, supporting donor-funded health initiatives:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {donorPrograms.map((program) => (
                      <div key={program.name} className="flex items-center gap-2 px-3 py-2 bg-gray-light rounded-md">
                        <span className="w-2 h-2 rounded-full bg-gold shrink-0" aria-hidden="true" />
                        <span className="text-body-sm text-dark/80 font-medium">{program.name}</span>
                        {program.funder && (
                          <span className="text-xs text-dark/50">— {program.funder}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
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

          {/* References */}
          <FadeIn>
            <ResumeSection title="References">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {references.map((ref) => (
                  <div key={ref.name} className="bg-gray-light rounded-lg p-5">
                    <h4 className="font-heading text-sm font-semibold text-dark mb-1">
                      {ref.name}
                    </h4>
                    <p className="text-xs text-dark/60 mb-3">{ref.title}</p>
                    <p className="text-xs text-dark/70 break-all">{ref.email}</p>
                    <p className="text-xs text-dark/70 mt-1">{ref.phone}</p>
                  </div>
                ))}
              </div>
            </ResumeSection>
          </FadeIn>

          {/* Download CTA */}
          <FadeIn>
            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-body text-dark/70 mb-6">
                For a downloadable version of this resume, use the link below.
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
