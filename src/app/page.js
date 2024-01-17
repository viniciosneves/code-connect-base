import { CardPost } from "@/components/CardPost"

import styles from './page.module.css'
import { logger } from "@/logger"
import Link from "next/link"
import { CustomLink } from "@/components/CustomLink"

async function getAllPosts(page = 1) {
  const res = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)

  if (!res.ok) {
    logger.error('Failed to fetch all posts.', {
      status: res.status
    })
    return []
  }
 
  return res.json()
}
 

export default async function Home({ searchParams }) {
  
  const currentPage = searchParams?.page || 1

  const { data: posts, next, prev } = await getAllPosts(currentPage)

  return (
    <main>
      <div className={styles.main}>
        {posts.map(post => <CardPost key={post.id} post={post} />)}
      </div>
      <p className={styles.navigation}>
        {prev && <CustomLink href={`?page=${prev}`}>
          Página anterior
        </CustomLink>}
        {next && <CustomLink href={`?page=${next}`}>
          Próxima página
        </CustomLink>}
      </p>
    </main>
  )
}
