// Packages
import Disqus from 'react-disqus-comments'

// Components
import App from '../layouts/post'
import Header from '../components/header'
import { Footer as Meta } from '../components/post'
import Head from '../components/head'
import Footer from '../components/footer'

// Semantics
import P from '../components/post/paragraph'
import { Image } from '../components/post/figure'
import Article from '../components/post/article'
import Snippet from '../components/post/snippet'
import Code from '../components/post/code'

// Ours
import posts from '../posts.json'
const { title, description, slug, headerImage, createdAt } = posts.find(
  p => p.slug === 'autenticacion-de-graphql-con-json-web-tokens-parte-2'
)

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

    <Article>
      <header>
        <Meta createdAt={createdAt} />
      </header>
      <section>
        <P>
          Describiremos una autenticación a nivel de consultas con GraphQL y
          JSON Web Tokens.
        </P>
        <P>
          Comenzaremos con el ejemplo del “hola mundo” básico que iniciamos en
          la primera parte, instalamos lo necesario:
        </P>
        <Snippet
        >{`npm install express express-graphql graphql --save`}</Snippet>
        <P>
          Ahora nuestro “hola mundo” de <Code>express</Code> con GraphQL
        </P>
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
          Ahora solo necesitaremos <Code>jwt-simple</Code> para trabajar con
          nuestra validación:
        </P>
        <Snippet>npm install jwt-simple --save</Snippet>
        <P>Comenzamos requiriendo esta nueva librería</P>
        <Snippet>const jwt = require('jwt-simple')</Snippet>
        <P>
          Y creando una función de alto orden que nos servirá para validar el
          token de nuestros resolvers:
        </P>
        <Snippet>{`const auth = ({ secret }, fn) => (args, context) => {
  // Token from GraphQL query or mutation
  const token = args.token

  if (!token) {
    throw new Error('No authorization token was found')
  }

  try {
    const payload = jwt.decode(token, secret)
    return fn(args, Object.assign({}, context, { user: payload }))
  } catch (err) {
    throw new Error('Token is invalid')
  }
}`}</Snippet>
        <P>
          Esta función recibirá como parámetros un secreto y la función resolver
          que deseamos que necesite de validación, esta nos devolverá en caso
          que el token sea válido la función resolver más una nueva propiedad{' '}
          <Code>user</Code> en su contexto.
        </P>
        <P>
          Para dejar esto claro, en GraphQL las funciones que se encargan de
          servir nuestras consultas o mutaciones, se le llaman “resolvers” y
          para el caso de <Code>express-graphql</Code> el primer parámetro son
          los argumentos pasados en una consulta o mutación y el segundo es el
          contexto que por defecto en <Code>express-graphql</Code> es pasado el
          objeto <Code>request</Code> de <Code>express</Code>
        </P>
        <P>Modificamos nuestro esquema para solicitar un token en la query</P>
        <Snippet>{`// Construct a schema, using GraphQL schema language
const schema = buildSchema(\`
  type Query {
    hello(token: String!): String
  }
\`)`}</Snippet>
        <P>
          Actualizamos nuestro resolver agregando la función de alto orden que
          creamos en un comienzo
        </P>
        <Snippet
        >{`// The root provides a resolver function for each API endpoint
const root = {
  hello: auth(
    { secret: 'shhhhhhared-secret' },
    () => 'Hello world!'
  )
}`}</Snippet>
        <P>
          Ahora nuestra consulta <Code>hello</Code> requiere de un token para
          ser válida:
        </P>
        <Image
          src='http://i.imgur.com/ifrpF1U.png'
          alt='GraphQL autenticación'
        />
        <P>
          Para hacer más flexible esta estructura podríamos no solo requerir el
          token desde los argumentos, sino también desde el contexto. Podríamos
          hacer que en nuestro esquema el parámetro <Code>token</Code> sea
          opcional y modificar un poco nuestra función de alto orden para
          intentar obtener el token desde el contexto.
        </P>
        <P>
          Para este enfoque necesitaremos instalar la librería{' '}
          <Code>express-bearer-token</Code> que obtiene un token desde la
          cabecera si es que este existe:
        </P>
        <Snippet>npm install express-bearer-token --save</Snippet>
        <P>Lo requerimos</P>
        <Snippet>const bearerToken = require('express-bearer-token')</Snippet>
        <P>
          Modificamos nuestra función <Code>auth</Code> para obtener el token
          desde sus argumentos o desde su contexto, recordemos que el contexto
          para este ejemplo por defecto es el objeto <Code>request</Code> de{' '}
          <Code>express</Code>
        </P>
        <Snippet>{`const auth = ({ secret }, fn) => (args, context) => {
  // Token from GraphQL query/mutation or Bearer token extract by express-bearer-token
  const token = args.token || context.token

  if (!token) {
    throw new Error('No authorization token was found')
  }

  try {
    const payload = jwt.decode(token, secret)
    return fn(args, Object.assign({}, context, { user: payload }))
  } catch (err) {
    throw new Error('Token is invalid')
  }
}`}</Snippet>
        <P>
          Modificamos nuestro esquema para que el argumento token ya no sea
          obligatorio
        </P>
        <Snippet>{`// Construct a schema, using GraphQL schema language
const schema = buildSchema(\`
  type Query {
    hello(token: String): String
  }
\`)`}</Snippet>
        <P>
          Y por último agregamos el middleware que intentara obtener el token, a
          nuestra ruta
        </P>
        <Snippet>{`app.use(
  '/graphql',
  bearerToken(),
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)`}</Snippet>
        <P>
          Ahora podríamos especificar nuestro token por medio de querys GraphQL
          o solo agregando la cabecera de autenticación a nuestra request como
          lo vimos en la primera parte.
        </P>
      </section>
      <Footer>
        <Disqus
          shortname='jlobos'
          identifier={slug}
          title={title}
          url={`https://jlobos.com/${slug}`}
        />
      </Footer>
    </Article>
  </App>
