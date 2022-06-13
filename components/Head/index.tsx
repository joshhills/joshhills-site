import React from 'react'
import NextHead from 'next/head'
import getConfig from 'next/config'
import { useRouter } from 'next/router'

const { publicRuntimeConfig: { SERVER_URL } } = getConfig();

const defaultDescription = 'Portfolio and blog'
const defaultTitle = 'Online Game Developer'
const titleSuffix = ' - Josh Hills'
const defaultOGImage = `${SERVER_URL}/images/og-image.jpg`
const defaultKeywords = 'developer, multiplayer, online, games, blog, tech, medium, portfolio, career, AAA'

type Props = {
  title?: string
  description?: string
  ogImage?: string
  ogVideo?: string
  keywords?: string
  ogPublishDate?: string
};

const Head: React.FC<Props> = ({ title, description, ogImage, keywords, ogVideo, ogPublishDate }) => {
  const { asPath } = useRouter()

  const getTitle = (title) => {
    if (title) return title + titleSuffix
    return defaultTitle + titleSuffix
  }

  return (
    <NextHead>
      <title>
        {getTitle(title)}
      </title>
      <link
        rel="icon"
        type="image/x-icon"
        href="/icons/joshhills-dev-logo.svg"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#ffa351" />
      <meta name="msapplication-TileColor" content="#ffa351" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="theme-color" content="#ffa351" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <meta
        name="description"
        content={description || defaultDescription}
      />
      <meta name="author" content="Josh Hills" />
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
        content={getTitle(title)}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        name="twitter:title"
        content={getTitle(title)}
      />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta
        name="twitter:site"
        content="@joshmarcushills"
      />
      <meta
        name="twitter:creator"
        content="@joshmarcushills"
      />
      <meta
        name="twitter:card"
        content={ogVideo ? "player" : "summary_large_image"}
      />
      <meta
        name="twitter:image"
        content={ogImage || defaultOGImage}
      />
      <meta
        property="og:image"
        content={ogImage || defaultOGImage}
      />
      {ogVideo && <meta
        property="og:video"
        content={ogVideo}
      />}
      {ogVideo && <meta name="twitter:player" content={ogVideo} />}
      {ogPublishDate && <meta property="og:publish_date" name="publish_date" content={ogPublishDate} />}
      {ogPublishDate && <time dateTime={ogPublishDate}/>}
      
      <meta property="og:site_name" content="Josh Hills"></meta>
    </NextHead>
  )
}

export default Head;
