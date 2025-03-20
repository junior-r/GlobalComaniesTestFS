import { Post } from "types/post";
import { create } from "zustand";

type State = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
};

export const usePostsStore = create<State>((set) => {
  return {
    posts: [],
    setPosts: (posts: Post[]) => set({ posts }),
  };
});
