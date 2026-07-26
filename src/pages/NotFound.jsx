import SEO from '../components/SEO'
import Button from '../components/ui/Button'

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found | Donath John"
        description="The page you are looking for does not exist."
      />
      <section className="section-lg bg-white">
        <div className="container-main text-center">
          <p className="text-body-sm uppercase tracking-widest text-gold font-medium mb-4">
            404
          </p>
          <h1 className="text-page-heading text-dark mb-4">
            Page Not Found
          </h1>
          <p className="text-body-lg text-dark/70 max-w-md mx-auto mb-10">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" href="/">
              Back to Home
            </Button>
            <Button variant="secondary" href="/contact">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
