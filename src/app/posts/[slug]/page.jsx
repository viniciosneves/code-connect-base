import { CardPost } from "@/components/CardPost"
import { logger } from "@/logger"
import { remark } from 'remark';
import html from 'remark-html';

import styles from './page.module.css'

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
        const post = posts[0]
        const processedContent = await remark()
            .use(html)
            .process(post.markdown);
        const markdown = processedContent.toString();
    
        return {
            ...post,
            markdown
        }
    }
    return null
  }
   

export default async function PostPage ({ params }) {

    const post = await getPostBy(params.slug)
    return (
        <div>
            <CardPost post={post} highlight/>
            <h3 className={styles.subtitle}>Código:</h3>
            <div className={styles.code}>
                <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
            </div>
        </div>
    )    
}