import { Post } from "types/post"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ExternalLink, MessageCircle, ThumbsUpIcon } from "lucide-react"
import { Link } from "react-router-dom"

interface Props {
    post: Post
}

function CardPost({ post }: Props) {
    return (
        <Link to={`/post/${post.id}`} className="max-w-sm hover:shadow-lg flex flex-col rounded-lg">
            <Card key={post.id} className="flex flex-col h-full">
                <CardHeader>
                    <CardTitle>@{post.author}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <p>{post.text}</p>
                </CardContent>
                <CardFooter className="flex gap-2 justify-end">
                    <Badge><ThumbsUpIcon /> ({post.likes})</Badge>
                    <Badge><MessageCircle /> ({post.comments})</Badge>
                    <Badge><ExternalLink /> ({post.shares})</Badge>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default CardPost