// Packages
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  // Custom route for posts
  server.get('/:slug', (req, res) => {
    const { slug } = req.params
    return app.render(req, res, '/post', { slug })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
