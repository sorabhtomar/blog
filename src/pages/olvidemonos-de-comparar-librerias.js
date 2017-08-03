// Packages
import Disqus from 'react-disqus-comments'

// Components
import App from '../layouts/post'
import Header from '../components/header'
import Head from '../components/head'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Time from '../components/time'

// Semantics
import P from '../components/post/paragraph'
import Quote from '../components/post/quote'
import Figure, { Image } from '../components/post/figure'
import Article from '../components/post/article'

// Ours
import posts from '../posts.json'
const { title, description, slug, headerImage, createdAt } = posts.find(
  p => p.slug === 'olvidemonos-de-comparar-librerias'
)

const links = ['https://devschile.slack.com']

export default () =>
  <App>
    <Head
      title={`${title} – Jesus Lobos – jlobos`}
      type='article'
      url={`https://jlobos.com/${slug}`}
      image={headerImage.url}
      description={description}
      author='Jesús Lobos'
    />

    <Header image={headerImage} title={title} url={`/${slug}`} />
    <Menu />

    <Article>
      <header>
        <Time createdAt={createdAt} />
      </header>
      <section>
        <P>
          Existe una batalla tremenda a la hora de escoger un framework o
          librería en nuestros proyectos web, comparar React.js, Vue.js,
          Angular, etc. Es increíble la magnitud de las discusiones que se
          generan al respecto, dejemos de lado eso y preguntémonos qué sería lo
          más rápido y más cómodo para nuestro equipo de trabajo. Si necesitas
          un sitio simple HTML, CSS, jQuery y listo al usuario final no le
          importara en lo más mínimo si lo que está viendo es un componente
          renderizado en un virtual DOM o que las estilos fueron creados en
          componentes de Javascript…
        </P>
        <P>
          Todo esto es relativo al trabajo que se necesita desarrollar, hace
          poco leí una anécdota donde un equipo de trabajo estuvo tres días
          creando una landing page en React.js, no tenia nada mas que una imagen
          full width/height y con un texto que debía estar siempre centrado, me
          imagino que dos de esos días fueron configurando Webpack. Pienso que
          no tiene nada de malo pero fácilmente montas eso con HTML puro en una
          mañana, además no creo que por tener la libreria de moda tengas más
          conversiones en la lading.
        </P>
        <P>
          Aqui otro mensaje para pensar un poco, aclaro que no es de mi parte es
          de una discusión de las tantas en{' '}
          <a href={links[0]} target='_blank'>
            https://devschile.slack.com
          </a>
        </P>
        <Quote>
          Es que es anti ético hacer una landing custom que te gastó 3 días de
          desarrollo sabiendo que hay servicios que ni siquiera debes programar
          para hacer una landing profesional (y que se integra con todo los
          servicios de marketing existentes xD)
        </Quote>
        <P>
          Otro factor que acrecienta estas comparaciones y discusiones es el
          hecho de cerrarse a lo que sabes, aprendiste o te gusta, evangelizar
          esa librería porque para ti es la mejor de todas y negarse a aprender
          algo nuevo.
        </P>
        <Quote>
          Estamos en un rubro donde los caminos son muchos y los objetivos aún
          más.
        </Quote>
        <P>Otro mensaje extraído del chat, que pienso que sucede bastante:</P>
        <Quote>
          — Cuando me toca meter mano y pregunto, ya, pero por qué Angular?, por
          qué eligieron React? por qué están pensando Vue?
          <br />
          — Esque leí un post en Medium el otro día sobre React vs Vue
        </Quote>
        <P>
          Las ideas y mensajes de este pequeño articulo se discutieron en{' '}
          <a href={links[0]} target='_blank'>
            https://devschile.slack.com
          </a>{' '}
          exactamente en el canal de #frontend
        </P>
        <Figure desc='Open Source violento y locura'>
          <Image
            src='https://i.imgur.com/uGxoVgI.jpg'
            alt='Open Source violento y locura'
          />
        </Figure>
      </section>
      <footer>
        <Disqus
          shortname='jlobos'
          identifier={slug}
          title={title}
          url={`https://jlobos.com/${slug}`}
        />
      </footer>
    </Article>
    <Footer />
  </App>
