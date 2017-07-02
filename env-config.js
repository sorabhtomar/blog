const { NODE_ENV, NODE_PORT } = process.env

const prod = NODE_ENV === 'production'
const port = NODE_PORT || 3000

module.exports = {
  API: prod ? 'https://jlobos.com/api' : `http://localhost:${port}/api`
}
