import Image from "next/image"
import { Avatar } from "../Avatar"

import styles from './cardpost.module.css'
import Link from "next/link"

export const CardPost = ({ post, highlight }) => {
    return (
        <article className={styles.card} style={{ width: highlight ? 996 : 486}}>
            <Link href={`/posts/${post.slug}`}>
                <header className={styles.header}>
                    <figure>
                        <Image src={post.cover} width={highlight ? 960 : 438} height={highlight ? 320 : 192} alt="Capa do artigo" />
                    </figure>
                </header>
                <section className={styles.body}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <footer className={styles.footer}>
                        <Avatar
                            imageSrc={post.author.avatar}
                            name={post.author.username}
                        />
                    </footer>
                </section>
            </Link>
        </article>
    )
}