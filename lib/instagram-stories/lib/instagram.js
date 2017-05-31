// Packages
import fetch from 'isomorphic-fetch'

// Get random stories from microservice
// https://stories-random.now.sh/
export default async () => {
  const res = await fetch('https://stories-random.now.sh/')
  const stories = await res.json()

  return stories[Math.floor(Math.random() * stories.length)]
}
