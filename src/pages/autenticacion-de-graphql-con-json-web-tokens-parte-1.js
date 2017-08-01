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
import { Image } from '../components/post/figure'
import Article from '../components/post/article'
import Snippet from '../components/post/snippet'
import Code from '../components/post/code'
import { H2 } from '../components/post/heading'

// Ours
import posts from '../posts.json'
const { title, description, slug, headerImage, createdAt } = posts.find(
  p => p.slug === 'autenticacion-de-graphql-con-json-web-tokens-parte-1'
)

const links = [
  'http://graphql.org/graphql-js/running-an-express-graphql-server/'
]

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
          Hoy hablaremos de diferentes formas para estructurar un sistema de
          autenticación en GraphQL y Express, manejando la validación por rutas
          o desde las consultas de GraphQL, todo con JSON Web Tokens para el
          intercambio seguro de información entre el servidor GraphQL y el
          cliente.
        </P>
        <Quote>
          Este artículo es la primera parte donde se explica una GraphQL
          autenticación a nivel de rutas con JSON Web Tokens, en la segunda
          parte se plantea una autenticación a nivel de consultas de GraphQL.
        </Quote>
        <P>
          Tomando como referencia el ejemplo oficial de la implementación de{' '}
          <a href={links[0]}>Express y GraphQL</a>, comenzaremos:
        </P>
        <P>Instalamos las librerías básicas para correr nuestra API GraphQL</P>
        <Quote>
          A lo largo de la lectura se irán indicando las nuevas librerías que
          necesitaremos.
        </Quote>
        <Snippet>npm install express express-graphql graphql --save</Snippet>
        <P>Código base para montar nuestra API:</P>
        <Snippet>{`const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// Construct a schema, using GraphQL schema language
const schema = buildSchema(\`
  type Query {
    hello: String
  }
\`)

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!'
  }
}

// Express App
const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')`}</Snippet>
        <P>
          Si ejecutamos este código y accedemos a{' '}
          <Code>http://localhost:4000/graphql</Code> nos encontraremos con la
          interfaz GraphiQL que nos permitirá de una forma muy amigable ingresar
          nuestras consultas.
        </P>
        <P>
          Podemos realizar la consulta del ejemplo y ver que todo funciona
          correctamente:
        </P>
        <Image
          src='http://i.imgur.com/XTTpSX6.png'
          alt='Express GraphQL hello world!'
        />
        <P>
          Al igual con <Code>curl</Code> y obtener el mismo resultado:
        </P>
        <Snippet
        >{`curl -H 'Content-Type: application/graphql' -X POST -d '{ hello }' http://localhost:4000/graphql

{
  "data": {
    "hello": "Hello world!"
  }
}`}</Snippet>
        <Quote>
          GraphiQL se activa indicando el valor <Code>true</Code> a la propiedad{' '}
          <Code>graphiql</Code> del objeto que es pasado como parámetro a la
          función <Code>graphqlHTTP</Code> , teniendo esto en cuenta podemos
          deshabilitar GraphiQL cuando nuestro codigo esté en producción:
        </Quote>
        <Snippet>{`app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: process.env.NODE_ENV !== 'production'
}))`}</Snippet>
        <H2 id='graphql-autenticación-con-json-web-tokens-a-nivel-de-rutas'>
          GraphQL Autenticación con JSON Web Tokens a nivel de rutas
        </H2>
        <P>
          Esta estructura de autenticación con GraphQL y <Code>express</Code>{' '}
          sería agregar un middleware a la ruta <Code>/graphql</Code>,
          permitiendo que cada petición a esa ruta pase por un middleware de
          validación, para este ejemplo necesitamos instalar{' '}
          <Code>express-jwt</Code> que nos validará cada token y{' '}
          <Code>jtw-simple</Code> para crear los token:
        </P>
        <Snippet>npm install express-jwt jwt-simple --save</Snippet>
        <P>
          Ya que cada consulta, que entra a la ruta <Code>/graphql</Code>{' '}
          necesita de un token válido crearemos otra ruta para obtener un token,
          con su esquema GraphQL y sus funciones.
        </P>
        <P>Comenzamos agregando estas dos nuevas librerías</P>
        <Snippet>{`const jwt = require('express-jwt')
const { encode } = require('jwt-simple')`}</Snippet>
        <Quote>
          Solo utilizaremos la función <Code>encode</Code> que nos provee{' '}
          <Code>jwt-simple</Code> la función <Code>decode</Code> se encargará el
          middleware <Code>jwt</Code>
        </Quote>
        <P>
          Agregamos un nuevo esquema que nos permita obtener un token, además de
          una query <Code>login</Code> que solicita un <Code>username</Code> y
          un <Code>password</Code>
        </P>
        <Snippet>{`const userSchema = buildSchema(\`
  type User {
    username: String!,
    token: String!
  }
  type Query {
    login (username: String!, password: String!): User
  }
\`)`}</Snippet>
        <P>
          Creamos un array que nos servirá como una falsa base de datos, donde
          estará el usuario que utilizaremos
        </P>
        <Snippet
        >{`const db = [ { username: 'admin', password: 'admin' } ]`}</Snippet>
        <P>Creamos el resolver que manejara las querys de autenticación</P>
        <Snippet>{`const userRoot = {
  login: ({ username, password }) => {
    // Fake query to db
    const user = db.find(u => username === u.username)

    if (!user) {
      throw new Error('invalid username')
    }

    // Extreme insecure validation (bcrypt is recommended)
    if (password !== user.password) {
      throw new Error('invalid username')
    }

    // Encode token
    try {
      const token = encode({ username }, 'shhhhhhared-secret')
      return { username, token }
    } catch (err) {
      throw new Error('token is invalid')
    }
  }
}`}</Snippet>
        <P>
          Modificamos nuestra ruta <Code>/graphql</Code> para que solo acepte
          peticiones con un token válido, esto gracias al middleware{' '}
          <Code>jwt</Code> que creamos
        </P>
        <Snippet>{`app.use(
  '/graphql',
  jwt({ secret: 'shhhhhhared-secret' }),
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV !== 'production'
  })
)`}</Snippet>
        <P>
          Agregamos nuestra nueva ruta <Code>/login</Code> con el esquema{' '}
          <Code>userSchema</Code> y sus resolvers <Code>userRoot</Code>
        </P>
        <Snippet>{`app.use(
  '/login',
  graphqlHTTP({
    schema: userSchema,
    rootValue: userRoot,
    graphiql: process.env.NODE_ENV !== 'production'
  })
)`}</Snippet>
        <P>
          Ahora tenemos dos rutas <Code>/graphql</Code> y <Code>/login</Code> la
          primera necesita de un token para consultarla y la segunda nos provee
          el token.
        </P>
        <P>
          Sólo nos queda probar, ingresamos a{' '}
          <Code>http://localhost:4000/login</Code> para obtener nuestro token:
        </P>
        <Image src='http://i.imgur.com/AXx89BF.png' alt='GraphQL jwt' />
        <P>
          Copiamos el token, y lo enviamos en la cabecera Authorization con{' '}
          <Code>curl</Code>:
        </P>
        <Snippet
        >{`curl -H 'Content-Type: application/graphql' -X POST -d '{ hello }' -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.DvJk7Ku6Axy3Hocpf3DRY4KNN8cUuEzhn4UHH-0k99s' http://localhost:4000/graphql

{
  "data": {
    "hello": "Hello world!"
  }
}`}</Snippet>
        <P>
          Este enfoque vendría bien cuando creamos diferentes microservicios,
          podríamos crear un microservicio exclusivamente para el registro y
          inicio de sesión que nos provea del token, y otro para hacer las
          consultas que requieran una validación con JSON Web Tokens.
        </P>
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
