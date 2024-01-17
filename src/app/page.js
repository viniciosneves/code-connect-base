import { CardPost } from "@/components/CardPost"

import styles from './page.module.css'
import { logger } from "@/logger"

async function getAllPosts() {
  const res = await fetch('http://localhost:3042/posts')

  if (!res.ok) {
    logger.error('Failed to fetch all posts.', {
      status: res.status
    })
    return []
  }
 
  return res.json()
}
 

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main>
      <div className={styles.main}>
        {posts.map(post => <CardPost key={post.id} post={post} />)}
      </div>
    </main>
  )
}
