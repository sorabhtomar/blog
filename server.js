// Packages
const express = require('express')
const next = require('next')
const compression = require('compression')

// Api
const api = require('./lib/api')

const {
  NODE_ENV,
  NODE_PORT
} = process.env

const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(compression())

  // Api controllers
  server.get('/api/post', api.getPost)

  server.get('*', (req, res) => handle(req, res))

  server.listen(NODE_PORT || 3000)
})
