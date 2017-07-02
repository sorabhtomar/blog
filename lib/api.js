// Native
const { promisify } = require('util')
const path = require('path')
const readFileAsync = promisify(require('fs').readFile)

// Packages
const marked = require('marked')

// List of posts
const { posts } = require('../posts/posts.json')

// Folder of posts
const postsPath = path.join(__dirname, '../posts')

exports.getPost = async (req, res) => {
  const { id } = req.query

  const post = posts.find(p => p.id === id)
  if (!post) {
    return res.status(400).json({ error: 'invalid id' })
  }

  const markdown = await readFileAsync(`${postsPath}/${post.id}.md`, {
    encoding: 'utf8'
  })
  const html = marked(markdown, { sanitize: false })

  res.status(200).json(Object.assign({}, post, { html }))
}

exports.getPosts = (req, res) => {
  res.status(200).json(posts)
}
