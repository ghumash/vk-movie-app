import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { MovieCard, useMovieStore } from '@/entities/movie'
import { Group, Div, Spinner, Spacing } from '@vkontakte/vkui'
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
    setFiltered((prev) => {
      const queryActive = prev.length !== store.movies.length
      return queryActive ? prev : store.movies
    })
  }, [store.movies])

  const isSearching = filtered.length !== store.movies.length

  const { loaderRef } = useInfiniteScroll({
    callback: () => store.fetchMovies(),
    enabled: !isSearching,
  })

  return (
    <>
      <Div style={{ paddingTop: 0 }}>
        <Group
          separator="hide"
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        >
          <MovieSearchInput movies={store.movies} onChange={setFiltered} />
        </Group>
      </Div>

      <RequestState
        loading={store.movies.length === 0 && store.isLoading}
        error={store.error}
        empty={!store.isLoading && filtered.length === 0}
        emptyMessage="Попробуйте изменить поисковый запрос"
      >
        <Div>
          <Group>
            <Div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {filtered.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </Div>

            {!isSearching && store.isLoading && (
              <>
                <Spacing size={24} />
                <Spinner size="l" />
                <Spacing size={24} />
              </>
            )}
          </Group>
        </Div>
      </RequestState>

      {!isSearching && <div ref={loaderRef} style={{ height: 1 }} />}
    </>
  )
})
