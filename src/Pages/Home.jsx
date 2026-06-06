import React from 'react'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Free Online Tools for Developers & Creators | WebTools</title>
        <link rel="canonical" href={`${domain}/tools/free-qr-code-generator`} />
        <meta name="description" content="Free online tools including QR code generator, markdown editor and more. Fast, simple and privacy-friendly."></meta>
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Free QR Code Generator"
        />

        <meta
          property="og:description"
          content="Create beautiful custom QR codes with logo, colors and download support."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://webtools-ten-theta.vercel.app/tools/free-qr-code-generator"
        />

        <meta
          property="og:image"
          content="https://webtools-ten-theta.vercel.app/og.png"
        />

      </Helmet>
      <div>Home</div>
    </>
  )
}

export default Home