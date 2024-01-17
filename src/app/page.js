import { CardPost } from "@/components/CardPost"

import styles from './page.module.css'

async function getAllPosts() {
  const res = await fetch('http://localhost:3042/posts')

  if (!res.ok) {
    console.log('Alguma coisa deu errado')
  }
 
  return res.json()
}
 

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main>
      <div className={styles.main}>
        {posts.map(post => <CardPost post={post} />)}
      </div>
    </main>
  )
}
