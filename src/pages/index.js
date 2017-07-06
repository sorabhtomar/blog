// Packages
import React from 'react'
import fetch from 'isomorphic-fetch'

// Components
import App from '../layouts/main'
import Header from '../components/header'
import Post from '../components/post'
import Footer from '../components/footer'
import Head from '../components/head'

const API = 'https://jlobos-blog.herokuapp.com'
const bg = {
  url:
    'https://images.unsplash.com/photo-1484542603127-984f4f7d14cb?&w=1080&h=720',
  credit: 'Photo by Brady Bellini on Unsplash'
}

export default class extends React.Component {
  static async getInitialProps () {
    // Get posts of api
    const response = await fetch(`${API}/posts`)
    const posts = await response.json()

    return { posts }
  }

  render () {
    return (
      <App>
        <Head
          title='jlobos'
          type='website'
          url='https://jlobos.com/'
          img={bg.url}
          description=''
          author='Jesús Lobos'
        />

        <Header image={bg} />
        <main>
          {this.props.posts.map(post => <Post {...post} key={post.id} />)}
        </main>
        <Footer />

        <style jsx>{`
          main {
            margin: 0 auto;
            max-width: 768px;
          }
        `}</style>
      </App>
    )
  }
}
