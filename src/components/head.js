// Packages
import Head from 'next/head'

export default ({ title, type, url, image, description, author }) =>
  <Head>
    <title>
      {title}
    </title>

    {/* Open Graph protocol */}
    <meta property='og:title' content={title} />
    <meta property='og:type' content={type} />
    <meta property='og:url' content={url} />
    <meta property='og:image' content={image} />
    <meta property='og:description' content={description} />

    {/* Twitter */}
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image:src' content={image} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:creator' content='@jlobitu' />

    {/* Google */}
    <link rel='canonical' href={url} />
    <meta name='description' content={description} />
    <meta property='author' content={author} />
    <meta name='robots' content='index, follow' />
  </Head>