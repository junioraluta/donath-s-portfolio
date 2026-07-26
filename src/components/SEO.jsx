import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://donathjohn.com'

const defaultMeta = {
  title: 'Donath John | Operations & Business Development Professional',
  description:
    'Donath John is an Operations and Business Development professional with 4+ years of experience in project coordination, procurement, logistics, data reporting, and stakeholder management.',
  image: `${SITE_URL}/assets/branding/og-image.svg`,
}

const SEO = ({ title, description, image }) => {
  const { pathname } = useLocation()
  const url = `${SITE_URL}${pathname}`

  const meta = {
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    image: image || defaultMeta.image,
    url,
  }

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Helmet>
  )
}

export default SEO
