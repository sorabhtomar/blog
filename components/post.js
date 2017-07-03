// Packages
import React from 'react'
import Link from 'next/link'

// Ours
import db from '../lib/db'

const Header = ({ title }) =>
  <header>
    <h2>
      {title}
    </h2>

    <style jsx>{`
      h2 {
        padding: 1rem 0;
      }
    `}</style>
  </header>

const Section = ({ description }) =>
  <section>
    <p>
      {description}
    </p>
  </section>

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { views: props.views }
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
    const { date } = this.props
    const { views } = this.state

    return (
      <footer>
        <span>
          {date}
        </span>
        <span>
          {views} views
        </span>

        <style jsx>{`
          footer {
            display: flex;
            justify-content: space-between;
            padding: 1rem 0;
          }

          span {
            color: var(--text-color);
            display: block;
          }
        `}</style>
      </footer>
    )
  }
}

export default props =>
  <article>
    <Link prefetch href={`/${props.id}`}>
      <a>
        <Header {...props} />
        <Section {...props} />
        <Footer {...props} />
      </a>
    </Link>

    <style jsx>{`
      article {
        margin: 0 1rem;
      }
    `}</style>
  </article>
