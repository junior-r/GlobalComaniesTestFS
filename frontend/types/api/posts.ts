import { Post } from "../post";

export interface PostsResponse {
  count: number;
  current_page: number;
  total_pages: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}
