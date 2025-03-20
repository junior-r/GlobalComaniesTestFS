import { usePaginationStore } from "@/store/Posts/pagination";
import { Button } from "../ui/button";
import { PostsResponse } from "../../../types/api/posts";

type Props = {
  apiResponse: PostsResponse;
};

function Pagination({ apiResponse }: Props) {
  const setPage = usePaginationStore((state) => state.setPage);
  console.log(apiResponse?.count / apiResponse?.results.length);

  return (
    <div className="flex gap-4 items-center justify-center mt-4 p-4">
      <Button
        disabled={!apiResponse?.previous}
        onClick={() => setPage(apiResponse?.previous || null)}
      >
        Anterior
      </Button>
      <Button
        disabled={!apiResponse?.next}
        onClick={() => setPage(apiResponse?.next || null)}
      >
        Siguiente
      </Button>
    </div>
  );
}

export default Pagination;
