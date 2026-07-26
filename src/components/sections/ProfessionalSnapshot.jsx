import SectionTitle from '../ui/SectionTitle'
import FadeIn from '../motion/FadeIn'

const ProfessionalSnapshot = () => {
  return (
    <section className="section-lg bg-white">
      <div className="container-main">
        <FadeIn>
          <SectionTitle
            subtitle="About"
            title="Professional Snapshot"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="border-l-2 border-gold/30 pl-6">
              <p className="text-body text-dark/80 mb-4">
                A detail-oriented professional with hands-on experience in business
                operations, project coordination, and stakeholder management across
                donor-funded and private sector environments.
              </p>
              <p className="text-body text-dark/80">
                Skilled in supporting cross-functional teams, streamlining operational
                workflows, and delivering data-driven reports that inform strategic
                decision-making.
              </p>
            </div>
            <div className="border-l-2 border-gold/30 pl-6">
              <p className="text-body text-dark/80 mb-4">
                Experienced in procurement and logistics coordination, business
                development support, and maintaining effective communication between
                internal teams and external stakeholders.
              </p>
              <p className="text-body text-dark/80">
                Committed to operational excellence and continuous improvement in
                every project undertaken.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default ProfessionalSnapshot
