import { FavoritesStore } from './favoritesStore'
import { FavoritesContext } from './favoritesContext'

const favoritesStore = new FavoritesStore()

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <FavoritesContext.Provider value={favoritesStore}>
    {children}
  </FavoritesContext.Provider>
)
