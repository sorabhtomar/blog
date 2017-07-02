// Packages
import React from 'react'
import Link from 'next/link'

// Ours
import db from '../lib/db'

const Header = ({ title, image }) =>
  <header>
    <div style={{ backgroundImage: `url(${image})` }} className='post-bg' />
    <h2>
      {title}
    </h2>

    <style jsx>{`
      .post-bg {
        background-position: 50% 50%;
        background-size: cover;
        border-radius: 1rem 1rem 0 0;
        height: 180px;
        max-width: 100%;
      }

      h2 {
        padding: 1rem;
      }
    `}</style>
  </header>

const Section = () =>
  <section>
    <p>
      Below is just about everything you’ll need to style in the theme. Check
      the source code to see the many embedded elements within paragraphs.
      Heading
    </p>

    <style jsx>{`
      section {
        padding: 0 1rem;
      }
    `}</style>
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
            padding: 1rem;
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
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        margin: 1rem;
      }
    `}</style>
  </article>
