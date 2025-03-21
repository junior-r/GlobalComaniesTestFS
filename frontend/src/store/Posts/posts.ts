import { PostsResponse } from "types/api/posts";
import { create } from "zustand";

type State = {
  data: PostsResponse;
  setPostsData: (data: PostsResponse) => void;
};

export const usePostsStore = create<State>((set) => {
  return {
    data: {
      count: 0,
      next: null,
      previous: null,
      results: [],
      current_page: 0,
      total_pages: 0,
    },
    setPostsData: (data: PostsResponse) => set({ data }),
  };
});
