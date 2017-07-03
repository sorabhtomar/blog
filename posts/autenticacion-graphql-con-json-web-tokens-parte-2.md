Esta es la segunda parte del artículo

Aquí describiremos una autenticación a nivel de consultas con GraphQL y JSON Web Tokens.

Comenzaremos con el ejemplo del  `hola mundo`, para ir adecuando a nuestras necesidades, instalamos lo básico:

```bash
npm install express express-graphql graphql --save
```

Ejemplo básico de `express` con GraphQL

```js
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!'
  }
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
```

Podemos ver que es igual a como empezamos en el primer artículo, instalaremos `jwt-simple`:

```bash
npm install jwt-simple --save
```

Comenzaremos creando una función de alto orden que nos servirá para validar el token de nuestros resolvers:

```js
const auth = ({ secret }, fn) => (args, context) => {
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
}
```

Le pasamos un secreto y la función resolver que deseamos que necesite de validación, esta nos devolverá en caso que el token sea válido la función resolver más una nueva propiedad `user` en su contexto.

Para dejar esto claro, en GraphQL las funciones que se encargan de servir nuestras consultas o mutaciones, se le llaman `resolvers` y para el caso de `express-graphql` el primer parámetro son los argumentos (`args`) pasados en una consulta o mutación y el segundo es el contexto (`context`) que por defecto en `express-graphql` es pasado el objeto `request` de `express`:

```js
// function resolver
const hello = (args, context) => { return 'Hello world!' }
```

Nuestro `hello word` quedaría:

```js
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const jwt = require('jwt-simple')

const auth = ({ secret }, fn) => (args, context) => {
  // Token from GraphQL query
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
}

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello(token: String!): String
  }
`)

// Resolvers
function hello () {
  return 'Hello world!'
}

// The root provides a resolver function for each API endpoint
const root = {
  hello: auth({ secret: 'shhhhhhared-secret' }, hello)
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
```

Ahora nuestra consulta `hello` requiere de un token para validar la consulta:

![graphql authentication by query](http://i.imgur.com/ifrpF1U.png)

Para hacer más flexible esta estructura podríamos no solo requerir el token desde los argumentos, sino también desde el contexto. Podríamos hacer que en nuestro esquema el parámetro `token` sea opcional y modificar un poco nuestra función de alto orden para intentar sacar el token desde el contexto.

Para este enfoque necesitaremos instalar la librería `express-bearer-token` que obtiene un token desde la cabecera si es que este existe:

```bash
npm install express-bearer-token --save
```
Agregamos `express-bearer-token` como un middleware de nuestra ruta `/graphql`, hacemos que el argumento  `token` de nuestro esquema sea opcional y modificamos un poco la función de alto orden `auth`:

```js
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const jwt = require('jwt-simple')
const bearerToken = require('express-bearer-token')

const auth = ({ secret }, fn) => (args, context) => {
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
}

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello(token: String): String
  }
`)

// Resolvers
function hello () {
  return 'Hello world!'
}

// The root provides a resolver function for each API endpoint
const root = {
  hello: auth({ secret: 'shhhhhhared-secret' }, hello)
}

const app = express()
app.use(
  '/graphql',
  bearerToken(),
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
```
Bueno esas serian 3 formas de autenticarnos en GraphQL con JSON Web Tokens, si encuentras algún error o conoces cómo mejorar algunos de estos conceptos, por favor comentanos!!
