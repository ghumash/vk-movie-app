import { Caption, Text, Title } from '@vkontakte/vkui'
import type { Movie } from '../model/movieStore'

export function MovieInfo({ movie }: { movie: Movie }) {
  const genres = movie.genres?.length
    ? movie.genres.join(', ')
    : 'Жанры не указаны'

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {movie.posterUrl ? (
        <img
          src={movie.posterUrl}
          alt=""
          style={{ width: 60, height: 90, objectFit: 'cover', borderRadius: 8 }}
        />
      ) : (
        <div
          style={{ width: 60, height: 90, background: '#ccc', borderRadius: 8 }}
        />
      )}

      <div>
        <Title level="3">{movie.name || 'Без названия'}</Title>
        <Caption>Год: {movie.year}</Caption>
        <Text>
          Рейтинг: {movie.rating ? movie.rating.toFixed(1) : 'Нет данных'}
        </Text>
        <Caption>Жанры: {genres}</Caption>
      </div>
    </div>
  )
}
