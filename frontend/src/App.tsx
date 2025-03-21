import { useEffect } from "react";
import CardPost from "./components/posts/Card";
import { Button } from "./components/ui/button";
import { getPosts, registerData } from "./lib/actions";
import { usePaginationStore } from "./store/Posts/pagination";
import { usePostsStore } from "./store/Posts/posts";
import Pagination from "./components/posts/Pagination";
import Search from "./components/posts/Search";

const apiListUrl = import.meta.env.VITE_API_BASE_URL as string;

function App() {
  const postsResponse = usePostsStore((state) => state.data);
  const page = usePaginationStore((state) => state.page);
  const setPostsResponse = usePostsStore((state) => state.setPostsData);

  useEffect(() => {
    getPosts(page || apiListUrl).then((data) => {
      setPostsResponse(data);
    });
  }, [page, setPostsResponse]);

  return (
    <>
      <div className="min-h-screen max-w-7xl mx-auto">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">
            Posts ({postsResponse.results.length})
          </h1>
        </header>
        <Search />
        {postsResponse && <Pagination apiResponse={postsResponse} />}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {postsResponse.results.length > 0 ? (
            postsResponse.results.map((post) => (
              <CardPost key={post.id} post={post} />
            ))
          ) : (
            <>
              <p className="text-gray-500">No posts found</p>
              <Button onClick={registerData}>Register Data</Button>
            </>
          )}
        </section>
        {postsResponse && <Pagination apiResponse={postsResponse} />}
      </div>
    </>
  );
}

export default App;
