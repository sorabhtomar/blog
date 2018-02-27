const posts = require('./posts.json')

module.exports = {
  // Static HTML export
  exportPathMap: () => {
    // Tranform the list of posts into a map of pages
    const pages = posts.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/${post.slug}`]: { page: `/${post.slug}` }
        }),
      {}
    )

    // Combine the map of post pages with other pages
    return Object.assign({}, pages, { '/': { page: '/' } })
  }
}
