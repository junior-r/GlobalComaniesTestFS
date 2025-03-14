import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Post } from "../types/post"
import CardPost from "./components/posts/Card"
import { Button } from "./components/ui/button"


function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/")
        if (!res.ok) throw new Error("Error al obtener los posts")
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error(error)
      }
    }

    getPosts()
  }, [])

  const registerData = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/posts/register", {
      method: "OPTIONS",
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (!res.ok) throw new Error("Error al obtener los posts")
    const data = await res.json()
    window.location.reload()
  }

  const filteredPosts = posts.filter(post =>
    post.text.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className="min-h-screen max-w-7xl mx-auto">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Posts</h1>
        </header>
        <section className="p-4">
          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Search by content"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <CardPost key={post.id} post={post} />
            ))
          ) : (
            <>
              <p className="text-gray-500">No posts found</p>
              <Button onClick={registerData}>Register Data</Button>
            </>
          )}
        </section>
      </div>
    </>
  )
}

export default App
