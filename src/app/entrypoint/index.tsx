import AppRouter from '../routing/router'
import { MovieProvider } from '@/shared/model'
import { FavoritesProvider } from '@/features/favorites'
import { FiltersProvider } from '@/features/filters'
import '@vkontakte/vkui/dist/vkui.css'
import '../styles/globals.css'

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
