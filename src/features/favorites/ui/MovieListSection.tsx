import { MovieCard, type Movie } from '@/entities/movie'
import { Div, Group, Placeholder } from '@vkontakte/vkui'

interface Props {
  movies: Movie[]
  fallbackTitle?: string
  emptyTitle?: string
  emptyDescription?: string
}

export function MovieListSection({
  movies,
  fallbackTitle = 'Ничего не найдено',
  emptyTitle = 'Пусто',
  emptyDescription = 'Нет доступных фильмов',
}: Props) {
  const hasItems = movies.length > 0

  return (
    <Div>
      <Group>
        <Div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {hasItems ? (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <Placeholder
              title={movies.length === 0 ? fallbackTitle : emptyTitle}
            >
              {movies.length === 0
                ? 'Попробуйте изменить поисковый запрос'
                : emptyDescription}
            </Placeholder>
          )}
        </Div>
      </Group>
    </Div>
  )
}
