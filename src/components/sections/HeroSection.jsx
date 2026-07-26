import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import FadeIn from '../motion/FadeIn'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-navy section-lg">
      {/* Subtle background treatment */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d2847]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-main relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-gold" aria-hidden="true" />
                <p className="text-body-sm uppercase tracking-[0.2em] text-gold font-medium">
                  Operations & Business Development
                </p>
              </div>

              <h1 className="text-hero text-white mb-3 tracking-tight">
                DONATH JOHN
              </h1>

              <p className="font-body text-lg md:text-xl text-white/85 font-light mb-6">
                Operations &amp; Business Development Professional
              </p>

              <div className="w-20 h-[1px] bg-white/20 mb-6" aria-hidden="true" />

              <p className="text-body text-white/65 mb-10 max-w-md leading-relaxed">
                Driving operational excellence through strategy, data, and execution.
                Experienced in business operations, project coordination, procurement,
                reporting, and stakeholder management.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" href="/documents/Donath_John_CV.pdf" download="Donath_John_CV.pdf">
                  Download CV
                  <ArrowRight size={16} className="ml-2 inline-block" aria-hidden="true" />
                </Button>
                <Button variant="outline-light" href="/contact">
                  Get in Touch
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Right - Premium Image Frame */}
          <FadeIn delay={0.25}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Gold corner accent */}
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" aria-hidden="true" />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-lg" aria-hidden="true" />

                {/* Image container */}
                <div className="w-72 h-80 md:w-80 md:h-[26rem] rounded-lg overflow-hidden shadow-2xl shadow-black/20">
                  <img
                    src="/documents/donath_profile.jpeg"
                    alt="Donath John — Operations and Business Development Professional"
                    width="320"
                    height="416"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
