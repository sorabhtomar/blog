/* global API */

// Packages
import React from 'react'
import fetch from 'isomorphic-fetch'

// Ours
import db from './db'

// Function by @rauchg
// https://github.com/rauchg/blog
export default fn =>
  class extends React.Component {
    static async getInitialProps ({ pathname }) {
      // Remove leading `/`
      const id = pathname.substr(1)
      const post = await fetch(`${API}/post?id=${id}`).then(res => res.json())

      // Fetch views
      const ref = db.ref('views').child(id)
      const views = await ref.once('value')

      // Register a view asynchronously
      fetch(
        'https://jlobos-blog.herokuapp.com/?id=' + encodeURIComponent(id)
      ).catch(err => console.error('view save error:', err.stack))

      return Object.assign({}, post, { views: views.val() })
    }

    constructor (props) {
      super(props)
      this.state = Object.assign({}, props)
      this.onViews = this.onViews.bind(this)
    }

    componentDidMount () {
      const { id } = this.props
      db.ref('views').child(id).on('value', this.onViews)
    }

    componentWillUnmount () {
      const { id } = this.props
      db.ref('views').child(id).off('value', this.onViews)
    }

    onViews (views) {
      this.setState({ views: views.val() })
    }

    render () {
      return fn(this.state)
    }
  }
