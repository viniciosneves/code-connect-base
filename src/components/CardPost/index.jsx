import Image from "next/image"
import { Avatar } from "../Avatar"

export const CardPost = ({ post }) => {
    return (<article>
        <header>
            <figure>
                <Image src={post.cover} width={396} height={196}/>
            </figure>
        </header>
        <section>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </section>
        <footer>
            <Avatar 
                imageSrc={post.author.avatar} 
                name={post.author.name}
            />
        </footer>
    </article>)
}