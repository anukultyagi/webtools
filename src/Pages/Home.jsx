import React from 'react'
import { Helmet } from 'react-helmet-async'
import { domain } from '../data/siteData'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Free Online Tools for Developers & Creators | WebTools</title>
        <link rel="canonical" href={`${domain}`} />
        <meta name="description" content="Free online tools including QR code generator, markdown editor and more. Fast, simple and privacy-friendly."></meta>
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Free Online Tools for Developers & Creators | WebTools"
        />

        <meta
          property="og:description"
          content="Free online tools including QR code generator, markdown editor and more. Fast, simple and privacy-friendly."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://webtools-alpha.vercel.app"
        />

        <meta
          property="og:image"
          content="https://webtools-alpha.vercel.app/og.png"
        />
        <meta
          name="robots"
          content="index, follow"
        />

      </Helmet>
      <div>Home</div>
    </>
  )
}

export default Home