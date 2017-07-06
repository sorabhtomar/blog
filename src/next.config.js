// Packages
const fetch = require('isomorphic-fetch')

module.exports = {
  // Static HTML export
  exportPathMap: async () => {
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    const response = await fetch('https://jlobos-blog.herokuapp.com/posts')
    const postList = await response.json()

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = postList.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/${post.slug}`]: {
            page: '/post',
            query: { slug: post.slug }
          }
        }),
      {}
    )

    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      '/': { page: '/' }
    })
  }
}
