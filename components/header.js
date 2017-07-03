// Packages
import React from 'react'

// Components
import Logo from './logo'
import Navegation from './navegation'
import Menu from './menu'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isMenuHidden: true }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick () {
    this.setState({
      isMenuHidden: !this.state.isMenuHidden
    })
  }

  render () {
    const { isMenuHidden } = this.state
    const { url, credit } = this.props.image || {}
    const headerStyle = url
      ? {
        backgroundImage: `url(${url})`,
        height: '60vh',
        marginBottom: '2rem'
      }
      : {}

    return (
      <div className={isMenuHidden ? 'nav-closed' : 'nav-opened'}>
        <header style={headerStyle}>
          <div className='header-content'>
            <Logo />
            <Navegation />

            <div onClick={this.handleOnClick} className='menu-button'>
              ☰ MENU
            </div>

            {/* Right Menu */}
            <div className='menu'>
              <Menu />
            </div>
          </div>

          {credit &&
            <p className='credit'>
              {credit}
            </p>}
        </header>

        {this.props.children}

        <style jsx>{`
          .nav-opened,
          .nav-closed {
            transition: transform 0.5s ease;
          }

          .nav-opened {
            transform: translateX(-50vw);
          }

          header {
            background-position: 50% 50%;
            background-size: cover;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .header-content {
            align-items: center;
            display: flex;
            flex-direction: row;
            padding: 2rem 1rem;
          }

          .menu-button {
            color: var(--high-color);
            cursor: pointer;
            font-size: var(--font-size-header);
          }

          .menu {
            height: 100vh;
            position: fixed;
            right: 0;
            top: 0;
            transform: translateX(50vw);
            width: 50vw;
          }

          .credit {
            margin: 0 1rem 1rem auto;
          }

          @media (min-width: 500px) {
            .nav-opened {
              transform: translateX(-20vw);
            }

            header {
              padding: 0 2rem;
            }

            .menu {
              transform: translateX(20vw);
              width: 20vw;
            }
          }
        `}</style>
      </div>
    )
  }
}
