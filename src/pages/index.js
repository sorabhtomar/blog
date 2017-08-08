// Packages
import React from 'react'

// Components
import App from '../layouts/main'
import Header from '../components/header'
import Post from '../components/post'
import Footer from '../components/footer'
import Head from '../components/head'

import Menu from '../components/menu'

// Ours
import posts from '../posts.json'

const bg = {
  url:
    'https://images.unsplash.com/photo-1484542603127-984f4f7d14cb?&w=1080&h=720',
  credit: 'Photo by Brady Bellini on Unsplash'
}

export default class extends React.Component {
  render () {
    return (
      <App>
        <Head
          title='Jesus Lobos – jlobos'
          type='website'
          url='https://jlobos.com/'
          image={bg.url}
          description=''
          author='Jesús Lobos'
        />

        <Header image={bg} />
        <Menu pathname={this.props.url.pathname} />
        <main>
          {posts.map((post, i) => <Post {...post} key={i} />)}
        </main>
        <Footer />

        <style jsx>{`
          main {
            margin: 1rem auto;
            max-width: 768px;
          }
        `}</style>
      </App>
    )
  }
}
