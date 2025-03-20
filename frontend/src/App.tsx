import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import CardPost from "./components/posts/Card";
import { Button } from "./components/ui/button";
import { getPosts, registerData } from "./lib/actions";
import { usePaginationStore } from "./store/Posts/pagination";
import { usePostsStore } from "./store/Posts/posts";
import { PostsResponse } from "../types/api/posts";
import Pagination from "./components/posts/Pagination";

function App() {
  const posts = usePostsStore((state) => state.posts);
  const setPosts = usePostsStore((state) => state.setPosts);
  const page = usePaginationStore((state) => state.page);

  const [search, setSearch] = useState("");
  const [apiResponse, setApiResponse] = useState<PostsResponse | null>(null);

  const apiListUrl = import.meta.env.VITE_API_BASE_URL as string;

  useEffect(() => {
    getPosts(page || apiListUrl).then((data) => {
      setPosts(data.results);
      setApiResponse(data);
    });
  }, [apiListUrl, page, setPosts]);

  const filteredPosts = posts.filter((post) =>
    post.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen max-w-7xl mx-auto">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Posts ({posts.length})</h1>
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
        {apiResponse && <Pagination apiResponse={apiResponse} />}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <CardPost key={post.id} post={post} />)
          ) : (
            <>
              <p className="text-gray-500">No posts found</p>
              <Button onClick={registerData}>Register Data</Button>
            </>
          )}
        </section>
        {apiResponse && <Pagination apiResponse={apiResponse} />}
      </div>
    </>
  );
}

export default App;
