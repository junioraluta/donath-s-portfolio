import SEO from '../components/SEO'
import HeroSection from '../components/sections/HeroSection'
import ProfessionalSnapshot from '../components/sections/ProfessionalSnapshot'
import MetricsSection from '../components/sections/MetricsSection'
import ExpertiseSection from '../components/sections/ExpertiseSection'
import ImpactPreview from '../components/sections/ImpactPreview'
import InsightsPreview from '../components/sections/InsightsPreview'
import ContactCTA from '../components/sections/ContactCTA'
import SectionDivider from '../components/ui/SectionDivider'

const Home = () => {
  return (
    <>
      <SEO
        title="Donath John | Operations & Business Development Professional"
        description="Donath John is an Operations and Business Development professional with 4+ years of experience in project coordination, procurement, logistics, data reporting, and stakeholder management."
      />
      <HeroSection />
      <ProfessionalSnapshot />
      <MetricsSection />
      <SectionDivider variant="gold" />
      <ExpertiseSection />
      <ImpactPreview />
      <SectionDivider variant="gold" />
      <InsightsPreview />
      <ContactCTA />
    </>
  )
}

export default Home
