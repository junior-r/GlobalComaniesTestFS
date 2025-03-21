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
    },
    setPostsData: (data: PostsResponse) => set({ data }),
  };
});
