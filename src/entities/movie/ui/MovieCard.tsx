import { Icon28Favorite, Icon28FavoriteOutline } from '@vkontakte/icons'
import { IconButton, Card } from '@vkontakte/vkui'
import { useState } from 'react'
import { useFavorites } from '@/features/favorites'
import { useNavigate } from 'react-router-dom'
import { MovieInfo } from './MovieInfo'
import { FavoriteAlert } from './FavoriteAlert'
import type { Movie } from '../model/movieStore'

export function MovieCard({ movie }: { movie: Movie }) {
  const navigate = useNavigate()
  const favorites = useFavorites()
  const [showAlert, setShowAlert] = useState<'add' | 'remove' | null>(null)

  const isFav = favorites.isFavorite(movie.id)

  const handleAdd = () => {
    favorites.add(movie)
    setShowAlert(null)
  }

  const handleRemove = () => {
    favorites.remove(movie.id)
    setShowAlert(null)
  }

  return (
    <>
      <Card
        onClick={() => navigate(`/movie/${movie.id}`)}
        mode="shadow"
        style={{ padding: 12, cursor: 'pointer', position: 'relative' }}
      >
        <MovieInfo movie={movie} />

        <IconButton
          aria-label={isFav ? 'Удалить из избранного' : 'Добавить в избранное'}
          style={{ position: 'absolute', top: 8, right: 8 }}
          onClick={(e) => {
            e.stopPropagation()
            setShowAlert(isFav ? 'remove' : 'add')
          }}
        >
          {isFav ? <Icon28Favorite /> : <Icon28FavoriteOutline />}
        </IconButton>
      </Card>

      <FavoriteAlert
        type={showAlert}
        movieName={movie.name}
        onConfirm={isFav ? handleRemove : handleAdd}
        onCancel={() => setShowAlert(null)}
      />
    </>
  )
}
