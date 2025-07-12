import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useMovieStore } from '@/shared/model'
import { MovieCard } from '@/entities/movie'
import { Group, Div } from '@vkontakte/vkui'
import { MovieSearchInput } from '@/features/movieSearchInput'
import { useInfiniteScroll } from '@/shared/lib/hooks'
import { RequestState } from '@/shared/ui'

export const MovieList = observer(() => {
  const store = useMovieStore()
  const [filtered, setFiltered] = useState(store.movies)

  useEffect(() => {
    if (store.movies.length === 0) {
      store.fetchMovies()
    }
  }, [store])

  useEffect(() => {
    setFiltered(store.movies)
  }, [store.movies])

  const { loaderRef } = useInfiniteScroll({
    callback: () => store.fetchMovies(),
    enabled: filtered.length === store.movies.length,
  })

  return (
    <>
      <Div>
        <Group>
          <MovieSearchInput movies={store.movies} onChange={setFiltered} />
        </Group>
      </Div>

      <RequestState
        loading={store.isLoading}
        error={store.error}
        empty={filtered.length === 0}
        emptyMessage="Попробуйте изменить поисковый запрос"
      >
        <Div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Div>
      </RequestState>

      <div ref={loaderRef} style={{ height: 1 }} />
    </>
  )
})
