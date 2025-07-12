import { createContext, useContext } from 'react'
import { FavoritesStore } from './favoritesStore'

const favoritesStore = new FavoritesStore()
const FavoritesContext = createContext<FavoritesStore>(favoritesStore)

export const useFavorites = () => useContext(FavoritesContext)
export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => (
  <FavoritesContext.Provider value={favoritesStore}>{children}</FavoritesContext.Provider>
)
