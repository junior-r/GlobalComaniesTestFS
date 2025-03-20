import { Post } from "../post";

export interface PostsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}
