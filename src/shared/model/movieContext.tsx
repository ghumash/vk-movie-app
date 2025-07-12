import { createContext, useContext } from 'react'
import { MovieStore } from '@/entities/movie'

const movieStore = new MovieStore()
const MovieContext = createContext<MovieStore>(movieStore)

export const useMovieStore = () => useContext(MovieContext)
export const MovieProvider = ({ children }: { children: React.ReactNode }) => (
  <MovieContext.Provider value={movieStore}>{children}</MovieContext.Provider>
)
