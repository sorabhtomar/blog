// Packages
import React from 'react'

// Components
import Title from './title'
import Navegation from './navegation'

export default class extends React.Component {
  render () {
    const { pathname } = this.props
    const { url, credit } = this.props.image || {}
    const headerStyle = url
      ? {
        backgroundImage: `url(${url})`,
        height: '60vh',
        marginBottom: pathname === '/' ? '1rem' : '0'
      }
      : {}

    return (
      <header style={headerStyle}>
        <Navegation />
        <Title title={this.props.title} url={this.props.url} />

        {credit &&
          <p className='credit'>
            {credit}
          </p>}

        <style jsx>{`
          header {
            align-items: center;
            background-position: 50% 50%;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1rem;
          }

          .credit {
            color: var(--soft-color);
          }
        `}</style>
      </header>
    )
  }
}
