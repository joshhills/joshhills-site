import React from 'react'
import NextHead from 'next/head'
import getConfig from 'next/config'
import { useRouter } from 'next/router'

const { publicRuntimeConfig: { SERVER_URL } } = getConfig();

const defaultDescription = 'Portfolio and blog'
const defaultTitle = 'Online Game Developer'
const titleSuffix = ' | Josh Hills'
const defaultOGImage = `${SERVER_URL}/images/og-image.jpg`
const defaultKeywords = 'developer, multiplayer, online, games, blog, tech, medium, portfolio, career, AAA'

type Props = {
  title?: string,
  description?: string,
  ogImage?: string,
  keywords?: string,
};

const Head: React.FC<Props> = ({ title, description, ogImage, keywords }) => {
  const { asPath } = useRouter()

  const getTitle = () => {
    if (title) return title + titleSuffix
    return defaultTitle + titleSuffix
  }

  return (
    <NextHead>
      <title>
        {getTitle()}
      </title>
      <link
        rel="icon"
        type="image/x-icon"
        href="/icons/joshhills-dev-logo.svg"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#ffa351" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffa351" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="theme-color" content="#ffa351" />
      <meta
        name="description"
        content={description || defaultDescription}
      />
      <meta
        name="keywords"
        content={keywords || defaultKeywords}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        property="og:url"
        content={`${SERVER_URL}${asPath}`}
      />
      <meta
        property="og:title"
        content={title || defaultTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="twitter:title"
        content={title || defaultTitle}
      />
      <meta
        name="twitter:site"
        content="@joshmarcushills"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:image"
        content={ogImage || defaultOGImage}
      />
      <meta
        property="og:image"
        content={ogImage || defaultOGImage}
      />
    </NextHead>
  )
}

export default Head;
