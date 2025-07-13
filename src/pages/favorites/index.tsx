import { Panel, PanelHeader } from '@vkontakte/vkui'
import {
  FavoritesAlert,
  MovieSearchBar,
  MovieListSection,
} from '@/features/favorites'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useFavorites } from '@/features/favorites'

const FavoritesPage = observer(() => {
  const favorites = useFavorites()
  const [showAlert, setShowAlert] = useState(false)
  const [filtered, setFiltered] = useState(favorites.list)

  useEffect(() => {
    setFiltered(favorites.list)
  }, [favorites.list])

  return (
    <Panel id="favorites">
      <PanelHeader>Избранное</PanelHeader>

      {favorites.list.length > 0 && (
        <MovieSearchBar
          movies={favorites.list}
          onSearch={setFiltered}
          onClear={() => setShowAlert(true)}
          clearLabel="Очистить избранное"
        />
      )}

      <MovieListSection
        movies={filtered}
        fallbackTitle="Ничего не найдено"
        emptyTitle="Пусто"
        emptyDescription="Вы ещё не добавили фильмы в избранное"
      />

      <FavoritesAlert
        visible={showAlert}
        onCancel={() => setShowAlert(false)}
        onConfirm={() => {
          favorites.clear()
          setShowAlert(false)
          setFiltered([])
        }}
      />
    </Panel>
  )
})

export default FavoritesPage
