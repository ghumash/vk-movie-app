import { Group, Title, Text, Div, SimpleCell, Separator } from '@vkontakte/vkui'

interface Props {
  movie: {
    name?: string
    alternativeName?: string
    description?: string
    shortDescription?: string
    genres?: { name: string }[]
    year?: number
    releaseYears?: { start: number }[]
    rating?: { imdb?: number }
    poster?: { url?: string }
  }
}

export function MovieDetails({ movie }: Props) {
  console.log(movie)
  return (
    <Group>
      <Div>
        {movie.poster?.url && (
          <img
            src={movie.poster.url}
            alt={movie.name}
            style={{
              width: '100%',
              maxHeight: 420,
              objectFit: 'cover',
              borderRadius: 12,
              marginBottom: 16,
            }}
          />
        )}

        <Title level="1" weight="2" style={{ marginBottom: 12 }}>
          {movie.name || movie.alternativeName || 'Без названия'}
        </Title>

        <Text style={{ marginBottom: 20 }}>
          {movie.description ||
            movie.shortDescription ||
            'Описание отсутствует'}
        </Text>

        <Separator style={{ margin: '16px 0' }} />

        <Group mode="plain" separator="hide">
          <SimpleCell>
            <strong>Жанры:</strong>{' '}
            {movie.genres?.map((g) => g.name).join(', ') || 'Не указано'}
          </SimpleCell>
          <SimpleCell>
            <strong>Рейтинг IMDb:</strong>{' '}
            {movie.rating?.imdb?.toFixed(1) ?? 'Нет данных'}
          </SimpleCell>
          <SimpleCell>
            <strong>Дата выхода:</strong>{' '}
            {movie.releaseYears?.[0]?.start ?? 'Не указано'}
          </SimpleCell>
        </Group>
      </Div>
    </Group>
  )
}
