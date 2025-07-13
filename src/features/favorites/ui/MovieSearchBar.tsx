import { Group, Button, Div } from '@vkontakte/vkui'
import { MovieSearchInput } from '@/features/movieSearchInput'
import type { Movie } from '@/entities/movie'

interface Props {
  movies: Movie[]
  onSearch: (filtered: Movie[]) => void
  onClear?: () => void
  clearLabel?: string
}

export function MovieSearchBar({
  movies,
  onSearch,
  onClear,
  clearLabel,
}: Props) {
  return (
    <Div>
      <Group separator="hide">
        <MovieSearchInput movies={movies} onChange={onSearch} />
        <Div>
          {onClear && (
            <Button mode="primary" stretched onClick={onClear}>
              {clearLabel || 'Очистить'}
            </Button>
          )}
        </Div>
      </Group>
    </Div>
  )
}
