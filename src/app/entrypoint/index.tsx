import AppRouter from '../routing/router'
import '@vkontakte/vkui/dist/vkui.css'
import '../styles/globals.css'

import { FiltersProvider } from '@/features/filters'
import { MovieProvider } from '@/entities/movie'
import { FavoritesProvider } from '@/features/favorites/model/favoritesProvider'

export default function App() {
  return (
    <FiltersProvider>
      <FavoritesProvider>
        <MovieProvider>
          <AppRouter />
        </MovieProvider>
      </FavoritesProvider>
    </FiltersProvider>
  )
}
