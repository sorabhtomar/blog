import Post from '../layouts/post'
import Snippet from '../components/snippet'
import Code from '../components/code'
import posts from '../posts'

const props = posts.find(
  p => p.slug === 'autenticacion-de-graphql-con-json-web-tokens-parte-2'
)

export default () => (
  <Post {...props}>
    <p>
      Describiremos una autenticación a nivel de consultas con GraphQL y JSON
      Web Tokens.
    </p>
    <p>
      Comenzaremos con el ejemplo del “hola mundo” básico que iniciamos en la
      primera parte, instalamos lo necesario:
    </p>
    <Snippet>{`npm install express express-graphql graphql --save`}</Snippet>
    <p>
      Ahora nuestro “hola mundo” de <Code>express</Code> con GraphQL
    </p>
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
    <p>
      Ahora solo necesitaremos <Code>jwt-simple</Code> para trabajar con nuestra
      validación:
    </p>
    <Snippet>npm install jwt-simple --save</Snippet>
    <p>Comenzamos requiriendo esta nueva librería</p>
    <Snippet>const jwt = require('jwt-simple')</Snippet>
    <p>
      Y creando una función de alto orden que nos servirá para validar el token
      de nuestros resolvers:
    </p>
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
    <p>
      Esta función recibirá como parámetros un secreto y la función resolver que
      deseamos que necesite de validación, esta nos devolverá en caso que el
      token sea válido la función resolver más una nueva propiedad{' '}
      <Code>user</Code> en su contexto.
    </p>
    <p>
      Para dejar esto claro, en GraphQL las funciones que se encargan de servir
      nuestras consultas o mutaciones, se le llaman “resolvers” y para el caso
      de <Code>express-graphql</Code> el primer parámetro son los argumentos
      pasados en una consulta o mutación y el segundo es el contexto que por
      defecto en <Code>express-graphql</Code> es pasado el objeto{' '}
      <Code>request</Code> de <Code>express</Code>
    </p>
    <p>Modificamos nuestro esquema para solicitar un token en la query</p>
    <Snippet>{`// Construct a schema, using GraphQL schema language
const schema = buildSchema(\`
  type Query {
    hello(token: String!): String
  }
\`)`}</Snippet>
    <p>
      Actualizamos nuestro resolver agregando la función de alto orden que
      creamos en un comienzo
    </p>
    <Snippet>{`// The root provides a resolver function for each API endpoint
const root = {
  hello: auth(
    { secret: 'shhhhhhared-secret' },
    () => 'Hello world!'
  )
}`}</Snippet>
    <p>
      Ahora nuestra consulta <Code>hello</Code> requiere de un token para ser
      válida:
    </p>
    <img src="http://i.imgur.com/ifrpF1U.png" alt="GraphQL autenticación" />
    <p>
      Para hacer más flexible esta estructura podríamos no solo requerir el
      token desde los argumentos, sino también desde el contexto. Podríamos
      hacer que en nuestro esquema el parámetro <Code>token</Code> sea opcional
      y modificar un poco nuestra función de alto orden para intentar obtener el
      token desde el contexto.
    </p>
    <p>
      Para este enfoque necesitaremos instalar la librería{' '}
      <Code>express-bearer-token</Code> que obtiene un token desde la cabecera
      si es que este existe:
    </p>
    <Snippet>npm install express-bearer-token --save</Snippet>
    <p>Lo requerimos</p>
    <Snippet>const bearerToken = require('express-bearer-token')</Snippet>
    <p>
      Modificamos nuestra función <Code>auth</Code> para obtener el token desde
      sus argumentos o desde su contexto, recordemos que el contexto para este
      ejemplo por defecto es el objeto <Code>request</Code> de{' '}
      <Code>express</Code>
    </p>
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
    <p>
      Modificamos nuestro esquema para que el argumento token ya no sea
      obligatorio
    </p>
    <Snippet>{`// Construct a schema, using GraphQL schema language
const schema = buildSchema(\`
  type Query {
    hello(token: String): String
  }
\`)`}</Snippet>
    <p>
      Y por último agregamos el middleware que intentara obtener el token, a
      nuestra ruta
    </p>
    <Snippet>{`app.use(
  '/graphql',
  bearerToken(),
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)`}</Snippet>
    <p>
      Ahora podríamos especificar nuestro token por medio de querys GraphQL o
      solo agregando la cabecera de autenticación a nuestra request como lo
      vimos en la primera parte.
    </p>
  </Post>
)
