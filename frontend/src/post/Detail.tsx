import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Post } from "types/post"

const postDate = (date: string) => {
    return new Date(date).toLocaleDateString("es-ES")
}

function PostDetail() {
    const navigate = useNavigate()
    const [post, setPost] = useState<Post | undefined>(undefined)

    const id = window.location.pathname.split("/").pop()

    const getPost = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/posts/${id}`)
            if (!res.ok) throw new Error(res.statusText)
            const data: Post = await res.json()
            console.log("Data", data)
            return data
        } catch (error: any) {
            console.error(error.message)
            if (error.message === "Not Found") {
                navigate("/")
            }
        }
    }

    useEffect(() => {
        getPost()
            .then(data => setPost(data))
            .catch(error => console.error(error))
    }, [])

    if (!post) return <p>Loading...</p>

    return (
        <section className="p-4 max-w-7xl mx-auto flex gap-6">
            <div className="space-y-4">
                <Button onClick={() => navigate("/")}>
                    <ArrowLeftIcon />
                    <span>Home</span>
                </Button>
                <div className="space-y-2">
                    <h1 className="text-lg"><span className="font-semibold">Author</span>: @{post?.author}</h1>
                    <h2 className="text-base"><span className="font-semibold">Fecha</span>: {postDate(post?.createdAt)}</h2>
                </div>
            </div>
            <div className="flex-1 pt-12">
                <p className="p-4 rounded-lg bg-gray-200">
                    {post.text}
                </p>
                <div className="p-4 rounded-lg flex gap-2">
                    <Badge variant={"outline"}>{post.likes} Likes</Badge>
                    <Badge variant={"outline"}>{post.comments} Comments</Badge>
                    <Badge variant={"outline"}>{post.shares} Shares</Badge>
                </div>
            </div>
        </section>
    )
}

export default PostDetail
