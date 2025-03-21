import { usePaginationStore } from "@/store/Posts/pagination";
import { Button } from "../ui/button";
import { PostsResponse } from "@/types/api/posts";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  apiResponse: PostsResponse;
};

const apiListUrl = import.meta.env.VITE_API_BASE_URL as string;

function Pagination({ apiResponse }: Props) {
  const setPage = usePaginationStore((state) => state.setPage);

  const isCurrentPage = (page: number) => {
    return apiResponse.current_page === page;
  };

  return (
    <div className="flex gap-4 items-center justify-center mt-4 p-4">
      <Button
        disabled={!apiResponse?.previous}
        onClick={() => setPage(apiResponse?.previous || null)}
      >
        <ChevronLeft />
      </Button>
      <div className="flex gap-2 justify-between items-center">
        {Array.from({ length: apiResponse?.total_pages || 0 }).map((_, idx) => (
          <Button
            key={idx}
            variant={isCurrentPage(idx + 1) ? "ghost" : "default"}
            onClick={() => setPage(apiListUrl + `/?page=${idx + 1}`)}
            className={
              isCurrentPage(idx + 1)
                ? "cursor-not-allowed border"
                : "cursor-pointer"
            }
            disabled={isCurrentPage(idx + 1)}
          >
            {idx + 1}
          </Button>
        ))}
      </div>
      <Button
        disabled={!apiResponse?.next}
        onClick={() => setPage(apiResponse?.next || null)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}

export default Pagination;
