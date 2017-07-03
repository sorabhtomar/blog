Hoy hablaremos de diferentes formas para estructurar un sistema de autenticación en GraphQL y `express`, manejando la validación por rutas o desde las consultas de GraphQL, todo con JSON Web Tokens para el intercambio seguro de información entre el servidor GraphQL y el cliente.

> Este artículo es la primera parte donde se explica una GraphQL autenticación a nivel de rutas con JSON Web Tokens, en la segunda parte se plantea una autenticación a nivel de consultas de Graphql.

Tomando como referencia el [ejemplo oficial](http://graphql.org/graphql-js/running-an-express-graphql-server/) de la implementación de `express` y GraphQL, comenzaremos:

Instalamos las librerías básicas para correr nuestra API GraphQL

> A lo largo de la lectura se irán indicando las nuevas librerías que necesitaremos.

```bash
npm install express express-graphql graphql --save
```

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

Si ejecutamos este código y accedemos a `http://localhost:4000/graphql` nos encontraremos con la interfaz GraphiQL que nos permitirá de una forma muy amigable ingresar nuestras consultas.

Podemos realizar la consulta del ejemplo y ver que todo funciona correctamente:

![graphiql](http://i.imgur.com/XTTpSX6.png)

Al igual con `curl` y obtener el mismo resultado:

```bash
curl -H 'Content-Type: application/graphql' -X POST -d '{ hello }' http://localhost:4000/graphql

{
  "data": {
    "hello": "Hello world!"
  }
}
```

> GraphiQL se activa indicando el valor `true` a la propiedad `graphiql` del objeto que es pasado como parámetro a la función `graphqlHTTP`, teniendo esto en cuenta podemos deshabilitar GraphiQL cuando nuestro codigo esté en producción:
```js
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: process.env.NODE_ENV !== 'production'
}))
```

## GraphQL Autenticación con JSON Web Tokens a nivel de rutas

Esta estructura de autenticación con GraphQL y `express` sería agregar un middleware a la ruta `/graphql`, permitiendo que cada petición a esa ruta pase por un middleware de validación, para este ejemplo necesitamos instalar `express-jwt` que nos validará cada token y `jwt-simple` para crear los token:

```bash
npm install express-jwt jwt-simple --save
```

Ya que cada consulta, que entre en la ruta `/graphql` necesita de un token válido crearemos otra ruta para obtener un token, con su esquema GraphQL y sus funciones:

```js
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const jwt = require('express-jwt')
const { encode } = require('jwt-simple')

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const userSchema = buildSchema(`
  type User {
    username: String!,
    token: String!
  }

  type Query {
    login (username: String!, password: String!): User
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!'
  }
}

// Fake db
const db = [ { username: 'admin', password: 'admin' } ]
const userRoot = {
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

    try {
      const token = encode({ username }, 'shhhhhhared-secret')

      return { username, token }
    } catch (err) {
      throw new Error('token is invalid')
    }
  }
}

const app = express()
app.use(
  '/graphql',
  jwt({ secret: 'shhhhhhared-secret' }),
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV !== 'production'
  })
)

app.use(
  '/login',
  graphqlHTTP({
    schema: userSchema,
    rootValue: userRoot,
    graphiql: process.env.NODE_ENV !== 'production'
  })
)
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
```

Ahora tenemos dos rutas `/graphql` y `/login` la primera necesita de un token para consultarla y la segunda nos provee el token. Hemos definido un esquema para obtener nuestro `token` el cual necesita de dos parámetros `username` y `password`, creamos un `array` como una falsa base de datos y la consultamos desde el resolver `login` que se encarga de buscar el usuario en la “base de datos” y crearnos un token.

Solo nos queda probar, ingresamos a `http://localhost:4000/login` para obtener nuestro token:

![graphql json web tokens authentication login](http://i.imgur.com/AXx89BF.png)

Copiamos el token, y lo enviamos en la cabecera `Authorization` con `curl`:

```bash
curl -H 'Content-Type: application/graphql' -X POST -d '{ hello }' -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.DvJk7Ku6Axy3Hocpf3DRY4KNN8cUuEzhn4UHH-0k99s' http://localhost:4000/graphql

{
  "data": {
    "hello": "Hello world!"
  }
}
```

Este enfoque vendría bien cuando creamos diferentes microservicios, podríamos crear un microservicio exclusivamente para el registro y inicio de sesión que nos provea del token, y otro para hacer las consultas que requieran una validación con JSON Web Tokens.
