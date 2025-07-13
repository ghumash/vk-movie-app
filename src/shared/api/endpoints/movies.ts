import { api } from '../axios'

interface GetMoviesParams {
  page?: number
  limit?: number
  'genres.name'?: string[]
  'rating.imdb'?: string
  year?: string
}

export const getMovies = (params: GetMoviesParams) => {
  return api.get('/movie', { params })
}

export const getMovieById = (id: string) => {
  return api.get(`/movie/${id}`)
}
