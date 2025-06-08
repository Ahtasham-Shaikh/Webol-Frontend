import type { Movie } from './Movie';

export interface Comment {
  id: number;
  userName: string;
  rating: number;
  review?: string | null;
  commentedAt: string;
  upvotes: number;
  movieId: number;
  movie?: Movie;
}