import Image from "next/image"
import { Avatar } from "../Avatar"

import styles from './cardpost.module.css'

export const CardPost = ({ post }) => {
    return (<article className={styles.card}>
        <header className={styles.header}>
            <figure>
                <Image src={post.cover} width={438} height={192} alt="Capa do artigo"/>
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
    </article>)
}