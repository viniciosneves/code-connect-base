import { logger } from "@/logger"

async function getPostBy(slug) {
    const res = await fetch(`http://localhost:3042/posts?slug=${slug}`)
  
    if (!res.ok) {
      logger.error('Failed to fetch post.', {
        status: res.status,
        slug
      })
      return []
    }
   
    const posts = await res.json()
    if (posts && posts.length > 0) {
        return posts[0]
    }
    return null
  }
   

export default async function PostPage ({ params }) {

    const post = await getPostBy(params.slug)
    return (
        <h1>{post.title}</h1>
    )    
}