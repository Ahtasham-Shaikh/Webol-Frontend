export interface TvComment {
  id: number
  userName: string
  rating: number
  review?: string
  commentedAt: string
  upvotes: number
  tvShowId: number
}

export interface TvShow {
  id: number
  title: string
  firstAirDate: string
  lastAirDate: string 
  thumbnail: string 
  backdrop: string 
  rating: number 
  comments: TvComment[] 
}
