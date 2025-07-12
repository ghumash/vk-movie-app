import { api } from '../axios'

export const getMovies = (params: Record<string, any>) => {
  return api.get('/movie', { params })
}

export const getMovieById = (id: string) => {
  return api.get(`/movie/${id}`)
}