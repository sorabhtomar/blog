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
    const { image } = this.props
    const headerStyle = image
      ? {
        backgroundImage: `url(${image})`,
        paddingBottom: '50vh',
        marginBottom: '2rem'
      } : {}

    return (
      <div className={isMenuHidden ? 'nav-closed' : 'nav-opened'} >
        <header style={headerStyle} >
          <Logo />
          <Navegation />

          <div onClick={this.handleOnClick} className='menu-button'>
            ☰ MENU
          </div>

          {/* Right Menu */}
          <div className='menu' >
            <Menu />
          </div>
        </header>

        { this.props.children }

        <style jsx>{`
          .nav-opened,
          .nav-closed {
            transition: transform 0.5s ease;
          }

          .nav-opened {
            transform: translateX(-50vw);
          }

          .nav-closed {
            transform: translateX(0);
          }

          header {
            align-items: center;
            background-position: 50% 50%;
            background-size: cover;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
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
        `}</style>
      </div>
    )
  }
}
