import { useState } from "react";
import { Input } from "../ui/input";

import { useDebouncedCallback } from "use-debounce";
import { usePostsStore } from "@/store/Posts/posts";
import { getPosts } from "@/lib/actions";
import { usePaginationStore } from "@/store/Posts/pagination";

const apiListUrl = import.meta.env.VITE_API_BASE_URL as string;

function Search() {
  const page = usePaginationStore((state) => state.page);
  const setPostsResponse = usePostsStore((state) => state.setPostsData);

  const [search, setSearch] = useState("");
  const debounced = useDebouncedCallback((value) => {
    getPosts(`${apiListUrl}/?search=${value}`).then((data) => {
      setPostsResponse(data);
    });
  }, 300);

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value.trim() === "") {
      getPosts(page || apiListUrl).then((data) => setPostsResponse(data));
    } else {
      debounced(value);
    }
  };

  return (
    <section className="p-4">
      <div className="mb-4">
        <Input
          placeholder="Search by content"
          onChange={(e) => handleSearch(e.target.value)}
          value={search}
        />
      </div>
    </section>
  );
}

export default Search;
