/* global fetch */

import React from 'react'
import db from './db'

import 'isomorphic-fetch'

// function by @rauchg
// https://github.com/rauchg/blog
const withViews = (fn) => (
  class extends React.Component {
    static async getInitialProps ({ pathname }) {
      const id = pathname.substr(1) || 'home'

      // fetch views
      const ref = db.ref('views').child(id)
      const views = await ref.once('value')

      // register a view asynchronously
      fetch('https://jlobos-blog.herokuapp.com/?id=' + encodeURIComponent(id))
      .catch((err) => console.error('view save error:', err.stack))

      return { postId: id, views: views.val() }
    }

    constructor (props) {
      super(props)
      this.state = Object.assign({}, props)
      this.onViews = this.onViews.bind(this)
    }

    componentDidMount () {
      const { postId } = this.props
      db.ref('views').child(postId).on('value', this.onViews)
    }

    componentWillUnmount () {
      const { postId } = this.props
      db.ref('views').child(postId).off('value', this.onViews)
    }

    onViews (views) {
      this.setState({ views: views.val() })
    }

    render () {
      return fn(this.state)
    }
  }
)

export default withViews
