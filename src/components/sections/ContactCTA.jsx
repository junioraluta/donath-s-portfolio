import Button from '../ui/Button'
import FadeIn from '../motion/FadeIn'

const ContactCTA = () => {
  return (
    <section className="bg-navy section-md">
      <div className="container-main text-center">
        <FadeIn>
          <div className="w-12 h-1 bg-gold mx-auto mb-8" aria-hidden="true" />
          <h2 className="text-page-heading text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-8">
            Open to opportunities in operations, business development, and project
            management. Reach out to discuss how I can contribute to your organization.
          </p>
          <Button variant="primary" href="/contact">
            Get in Touch
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

export default ContactCTA
