// Packages
import React from 'react'
import Head from 'next/head'

// Ours
import { posts } from '../posts/posts.json'
import db from '../lib/db'

// Components
import Page from '../layouts/main'
import Post from '../components/post'
import Header from '../components/header'

export default class extends React.Component {
  static async getInitialProps () {
    // Get views of firebase
    const ref = db.ref('views')
    const views = (await ref.once('value')).val()

    return {
      // Inject views in list of post
      posts: posts.map(p => Object.assign({}, p, { views: views[p.id] }))
    }
  }

  render () {
    const { posts } = this.props

    return (
      <Page>
        <Head>
          <title>jlobos</title>
        </Head>

        <Header>
          <main>
            { posts.map(props => <Post key={props.id} {...props} />) }
          </main>
        </Header>
      </Page>
    )
  }
}
