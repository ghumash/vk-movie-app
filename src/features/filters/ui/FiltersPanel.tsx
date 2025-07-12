import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Accordion, Group, Div } from '@vkontakte/vkui'
import { Icon24Filter } from '@vkontakte/icons'
import { useFiltersStore } from '../model/filtersContext'
import { useMovieStore } from '@/shared/model'
import { useSyncFiltersFromURL } from '../lib/useSyncFiltersFromURL'
import { genreOptions, toGenreOptions } from '../model/constants'

import { GenreSelect } from './GenreSelect'
import { RangeSlider } from './RangeSlider'
import { ApplyFiltersButton } from './ApplyFiltersButton'

export const FiltersPanel = observer(() => {
  const filters = useFiltersStore()
  const movieStore = useMovieStore()
  const { updateURL } = useSyncFiltersFromURL()

  const [selectedGenres, setSelectedGenres] = useState(toGenreOptions(filters.genres))

  useEffect(() => {
    setSelectedGenres(toGenreOptions(filters.genres))
  }, [filters.genres])

  const applyFilters = () => {
    const newGenres = selectedGenres.map((v) => v.value)
    filters.setGenres(newGenres)
    updateURL()
    movieStore.setFilters({
      genres: newGenres,
      rating: filters.rating,
      years: filters.years,
    })
  }

  return (
    <Div>
      <Group>
        <Accordion>
          <Accordion.Summary before={<Icon24Filter />}>Фильтры</Accordion.Summary>
          <Accordion.Content>
            <GenreSelect value={selectedGenres} options={genreOptions} onChange={setSelectedGenres} />
            <RangeSlider label="Рейтинг" min={0} max={10} step={0.5} value={filters.rating} onChange={filters.setRating} />
            <RangeSlider label="Годы" min={1990} max={2025} step={1} value={filters.years} onChange={filters.setYears} />
            <ApplyFiltersButton onClick={applyFilters} />
          </Accordion.Content>
        </Accordion>
      </Group>
    </Div>
  )
})
