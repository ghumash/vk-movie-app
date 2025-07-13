import { createContext, useContext } from 'react'
import type { MovieStore } from '@/entities/movie'

export const MovieContext = createContext<MovieStore | null>(null)

export const useMovieStore = () => {
  const ctx = useContext(MovieContext)
  if (!ctx) throw new Error('MovieContext not found')
  return ctx
}
