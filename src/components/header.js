// Packages
import React from 'react'

// Components
import Title from './title'
import Navegation from './navegation'

export default class extends React.Component {
  render () {
    const { url, credit } = this.props.image || {}
    const headerStyle = url
      ? {
        backgroundImage: `url(${url})`,
        height: '60vh'
      }
      : {}

    return (
      <header style={headerStyle}>
        <Navegation />
        <Title />

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
            margin-bottom: 1rem;
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
