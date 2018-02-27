import Post from '../layouts/post'
import posts from '../posts'

const props = posts.find(p => p.slug === 'olvidemonos-de-comparar-librerias')

const links = ['https://devschile.slack.com']

export default () => (
  <Post {...props}>
    <p>
      Existe una batalla tremenda a la hora de escoger un framework o librería
      en nuestros proyectos web, comparar React.js, Vue.js, Angular, etc. Es
      increíble la magnitud de las discusiones que se generan al respecto,
      dejemos de lado eso y preguntémonos qué sería lo más rápido y más cómodo
      para nuestro equipo de trabajo. Si necesitas un sitio simple HTML, CSS,
      jQuery y listo al usuario final no le importara en lo más mínimo si lo que
      está viendo es un componente renderizado en un virtual DOM o que las
      estilos fueron creados en componentes de Javascript…
    </p>
    <p>
      Todo esto es relativo al trabajo que se necesita desarrollar, hace poco
      leí una anécdota donde un equipo de trabajo estuvo tres días creando una
      landing page en React.js, no tenia nada mas que una imagen full
      width/height y con un texto que debía estar siempre centrado, me imagino
      que dos de esos días fueron configurando Webpack. Pienso que no tiene nada
      de malo pero fácilmente montas eso con HTML puro en una mañana, además no
      creo que por tener la libreria de moda tengas más conversiones en la
      lading.
    </p>
    <p>
      Aqui otro mensaje para pensar un poco, aclaro que no es de mi parte es de
      una discusión de las tantas en{' '}
      <a href={links[0]} target="_blank" rel="noopener noreferrer">
        https://devschile.slack.com
      </a>
    </p>
    <blockquote>
      Es que es anti ético hacer una landing custom que te gastó 3 días de
      desarrollo sabiendo que hay servicios que ni siquiera debes programar para
      hacer una landing profesional (y que se integra con todo los servicios de
      marketing existentes xD)
    </blockquote>
    <p>
      Otro factor que acrecienta estas comparaciones y discusiones es el hecho
      de cerrarse a lo que sabes, aprendiste o te gusta, evangelizar esa
      librería porque para ti es la mejor de todas y negarse a aprender algo
      nuevo.
    </p>
    <blockquote>
      Estamos en un rubro donde los caminos son muchos y los objetivos aún más.
    </blockquote>
    <p>Otro mensaje extraído del chat, que pienso que sucede bastante:</p>
    <blockquote>
      — Cuando me toca meter mano y pregunto, ya, pero por qué Angular?, por qué
      eligieron React? por qué están pensando Vue?
      <br />
      — Esque leí un post en Medium el otro día sobre React vs Vue
    </blockquote>
    <p>
      Las ideas y mensajes de este pequeño articulo se discutieron en{' '}
      <a href={links[0]} target="_blank" rel="noopener noreferrer">
        https://devschile.slack.com
      </a>{' '}
      exactamente en el canal de #frontend
    </p>
    <figure>
      <img
        src="https://i.imgur.com/uGxoVgI.jpg"
        alt="Open Source violento y locura"
      />
      <p>Open Source violento y locura</p>
    </figure>
  </Post>
)
