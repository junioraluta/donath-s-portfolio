import { useState } from 'react'
import { Mail, Globe, Clock } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import SectionTitle from '../components/ui/SectionTitle'
import ContactCard from '../components/ui/ContactCard'
import FormField from '../components/ui/FormField'
import Button from '../components/ui/Button'
import FadeIn from '../components/motion/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerContainer'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const contactInfo = [
  {
    title: 'Email',
    value: 'donathj8@gmail.com',
    icon: Mail,
    href: 'mailto:donathj8@gmail.com',
  },
  {
    title: 'LinkedIn',
    value: 'Donath John',
    icon: Globe,
    href: 'https://www.linkedin.com/in/donath-john-94867a24b/',
  },
  {
    title: 'Availability',
    value: 'Open to professional conversations',
    icon: Clock,
    href: null,
  },
]

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('submitting')

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error')
      return
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData(initialFormState)
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setFormData(initialFormState)
    setErrors({})
  }

  return (
    <>
      <SEO
        title="Contact Donath John"
        description="Get in touch with Donath John for operations support, consulting opportunities, business collaboration, and professional networking."
      />
      <PageHero
        title="Contact"
        description="Let's discuss opportunities, collaborations, and professional engagements."
      />

      {/* Introduction */}
      <section className="section-lg bg-white">
        <div className="container-main">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <p className="text-body-lg text-dark/80">
                Whether you represent an organization looking for operations support,
                a consulting opportunity, or professional collaboration — I welcome the
                conversation. Reach out through the form below or connect directly via email.
              </p>
            </div>
          </FadeIn>

          {/* Contact Info Cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {contactInfo.map((info) => (
              <StaggerItem key={info.title}>
                <ContactCard
                  title={info.title}
                  value={info.value}
                  icon={info.icon}
                  href={info.href}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Contact Form */}
          <FadeIn>
            <div className="max-w-2xl">
              <SectionTitle
                subtitle="Message"
                title="Send a Message"
              />

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <p className="text-body font-medium text-green-800 mb-2">
                    Thank you. Your message has been sent successfully.
                  </p>
                  <p className="text-body-sm text-green-700">
                    I will respond as soon as possible.
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-body-sm text-navy font-medium mt-4 underline underline-offset-2 hover:text-gold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6" role="alert">
                      <p className="text-body-sm text-red-700 font-medium">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <FormField
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                    />
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </div>
                  <FormField
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                  />
                  <FormField
                    label="Message"
                    name="message"
                    type="textarea"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    rows={6}
                  />
                  <div className="mt-6">
                    <button
                      type="submit"
                      className={`btn-primary${status === 'submitting' ? ' btn-disabled' : ''}`}
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
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
              Open to Opportunities
            </h2>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-8">
              Available for consulting engagements, operations roles, and professional
              collaborations. Let&apos;s explore how we can work together.
            </p>
            <Button variant="primary" href="mailto:donathj8@gmail.com">
              Email Directly
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Contact
