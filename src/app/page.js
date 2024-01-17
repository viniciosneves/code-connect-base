import { CardPost } from "@/components/CardPost"

export default function Home() {
  const post = {
    "id": 2,
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/css-grid-na-pratica.png",
    "title": "CSS Grid na Prática",
    "slug": "css-grid-na-pratica",
    "body": "Aprenda a criar layouts responsivos com CSS Grid. Este post aborda desde a definição de grid até a criação de layouts complexos de forma simples e eficaz.",
    "markdown": "```css\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n```",
    "author": {
        "id": 101,
        "name": "Ana Beatriz",
        "username": "anabeatriz_dev",
        "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
    }
}
  return (
    <main>

      <CardPost post={post} />

    </main>
  )
}
