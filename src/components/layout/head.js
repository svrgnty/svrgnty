import React from 'react';
import { dom, config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const Head = () => (
  <>
    <title>Bitcoin resources | Svrgnty.com</title>
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="og:title" content="Bitcoin resources | Svrgnty.com" />
    <meta name="twitter:title" content="Bitcoin resources | Svrgnty.com" />
    <meta name="description" content="Bitcoin for financial sovereignty" />
    <meta name="og:description" content="Bitcoin for financial sovereignty" />
    <meta name="twitter:description" content="Bitcoin for financial sovereignty" />
    <meta name="og:image" content={'/images/twitter-website.jpg'} />
    <meta name="twitter:image" content={'/images/twitter-website.jpg'} />
    <meta name="og:url" content="https://svrgnty.com" />
    <meta name="twitter:creator" content="@svrgnty" />
    <meta name="theme-color" content="#003366" />
    <link rel="canonical" href="https://svrgnty.com" />
    <link rel="apple-touch-icon" href={'/images/apple-touch-icon.png'} />
    <style type="text/css">{dom.css()}</style>
  </>
)

export default Head;