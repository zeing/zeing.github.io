import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

const SEO = ({ title, description, image }) => {
  const { pathname } = useRouter()

  const seo = {
    title: title || 'I am',
    description: description || 'All about zeing',
    image: `${'https://zeing.me'}${image || '/images/thumbnail.png'}`,
    url: `${'https://zeing.me'}${pathname}`,
    twitterUsername: '@wwz',
  }
  return (
    <Helmet title={seo.title} titleTemplate={'%s · Zeing'}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.twitterUsername && <meta name="twitter:creator" content={seo.twitterUsername} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}
export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
