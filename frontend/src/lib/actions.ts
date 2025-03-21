import { PostsResponse } from "@/types/api/posts";

const API_URL = import.meta.env.VITE_API_BASE_URL as string;

export const registerData = async () => {
  const res = await fetch(`${API_URL}/register`, {
    method: "OPTIONS",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Error al obtener los posts");
  window.location.reload();
};

export const getPosts = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error al obtener los posts");
    const data = await res.json();
    return data as PostsResponse;
  } catch (error) {
    console.error(error);
    return {
      count: 0,
      next: null,
      previous: null,
      results: [],
      current_page: 0,
      total_pages: 0,
    };
  }
};

export const getPost = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error", error);
    const err = error as Error;
    if (err.message === "Not Found") {
      return { error: true, errorCode: 404, message: "Post not found" };
    }
    return { error: true, errorCode: 500, message: "Internal server error" };
  }
};
