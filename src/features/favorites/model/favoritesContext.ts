import { createContext, useContext } from 'react'
import type { FavoritesStore } from './favoritesStore'

export const FavoritesContext = createContext<FavoritesStore | null>(null)

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('FavoritesContext not found')
  return ctx
}
