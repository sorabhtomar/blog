// Packages
import React from 'react'
import fetch from 'isomorphic-fetch'
import Disqus from 'react-disqus-comments'

// Components
import App from '../layouts/post'
import Header from '../components/header'
import { Footer as Meta } from '../components/post'
import Head from '../components/head'
import Footer from '../components/footer'

const API = 'https://jlobos-blog.herokuapp.com'

export default class extends React.Component {
  static async getInitialProps ({ query }) {
    const { slug } = query
    // Get post of api
    const post = await fetch(`${API}/post?slug=${slug}`).then(res => res.json())

    // Register a view asynchronously
    fetch(`${API}/?id=` + encodeURIComponent(slug)).catch(err =>
      console.error('view save error:', err.stack)
    )

    return { post }
  }

  render () {
    const { post } = this.props
    return (
      <App>
        <Head
          title={post.value.title}
          type='article'
          url={`https://jlobos.com/${post.value.slug}`}
          image={post.injected.meta.image.url}
          description={post.value.content.subtitle}
          author='Jesús Lobos'
        />

        <Header image={post.injected.meta.image} />

        <article>
          <header>
            <Meta
              createdAt={post.value.createdAt}
              readingTime={post.value.virtuals.readingTime}
            />
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.injected.html }} />
          <Footer>
            <Disqus
              shortname='jlobos'
              identifier={post.value.slug}
              title={post.value.title}
              url={`https://jlobos.com/${post.value.slug}`}
            />
          </Footer>
        </article>
      </App>
    )
  }
}
