import { MovieStore } from '@/entities/movie'
import { MovieContext } from './movieContext'

const movieStore = new MovieStore()

export const MovieProvider = ({ children }: { children: React.ReactNode }) => (
  <MovieContext.Provider value={movieStore}>{children}</MovieContext.Provider>
)
