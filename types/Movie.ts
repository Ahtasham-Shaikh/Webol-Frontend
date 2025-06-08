import type { Comment } from "./Comment";

export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  thumbnail?: string | null;
  backdrop?: string | null;
  comments: Comment[];
  rating: Number
}