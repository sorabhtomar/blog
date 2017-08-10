// Packages
import Head from 'next/head'

// Components
import App from '../layouts/post'
import Footer from '../components/footer'
import Header from '../components/header'
import Menu from '../components/menu'
import Contact from '../components/contact'

export default () =>
  <App>
    <Head>
      <title>Contacto – jlobos</title>
    </Head>

    <Header title='Contacto' url='/contacto' />
    <Menu />
    <Contact />
    <Footer />
  </App>
