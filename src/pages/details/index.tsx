import { useParams } from 'react-router-dom'
import { useRequest } from '@/shared/lib/hooks'
import { getMovieById } from '@/shared/api'
import { Panel, PanelHeader } from '@vkontakte/vkui'
import { RequestState } from '@/shared/ui'
import { MovieDetails } from '@/entities/movie'

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>()
  const {
    data: movie,
    loading,
    error,
  } = useRequest(() => getMovieById(id!), [id])

  return (
    <Panel id="details">
      <PanelHeader>
        {loading
          ? 'Загрузка...'
          : error
            ? 'Ошибка'
            : movie?.name || 'Информация'}
      </PanelHeader>

      <RequestState
        loading={loading}
        error={error}
        empty={!movie}
        emptyMessage="Фильм не найден"
      >
        {movie && <MovieDetails movie={movie} />}
      </RequestState>
    </Panel>
  )
}
