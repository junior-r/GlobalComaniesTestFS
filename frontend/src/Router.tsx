import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "@/App"
import PostDetail from "@/post/Detail"
import NotFound from "@/components/NotFound"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="*" element={<NotFound />} /> {/* Página si no hay posts */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router
