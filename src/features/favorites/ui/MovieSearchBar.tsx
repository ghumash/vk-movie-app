import { Group, Button } from '@vkontakte/vkui'
import { MovieSearchInput } from '@/features/movieSearchInput'
import type { Movie } from '@/entities/movie'

interface Props {
  movies: Movie[]
  onSearch: (filtered: Movie[]) => void
  onClear?: () => void
  clearLabel?: string
}

export function MovieSearchBar({ movies, onSearch, onClear, clearLabel }: Props) {
  return (
    <Group>
      <MovieSearchInput movies={movies} onChange={onSearch} />
      {onClear && (
        <Button
          mode="primary"
          stretched
          onClick={onClear}
          style={{ marginTop: 12 }}
        >
          {clearLabel || 'Очистить'}
        </Button>
      )}
    </Group>
  )
}
