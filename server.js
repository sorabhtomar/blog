// Packages
const express = require('express')
const next = require('next')

const { PORT } = process.env

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => handle(req, res))

  server.listen(PORT || 3000)
})
