import type { Comment } from "./Comment";

export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  thumbnail?: string;
  backdrop?: string;
  comments: Comment[];
  rating: Number
}