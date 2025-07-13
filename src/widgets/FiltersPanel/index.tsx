import { useEffect, useState } from 'react'
import { Accordion, Group, Div, Button } from '@vkontakte/vkui'
import { Icon24Filter } from '@vkontakte/icons'
import { observer } from 'mobx-react-lite'

import { useMovieStore } from '@/entities/movie'
import {
  genreOptions,
  toGenreOptions,
  useFiltersStore,
  useSyncFiltersFromURL,
  GenreSelect,
  RangeSlider,
  ApplyFiltersButton,
} from '@/features/filters'

const DEFAULT_RATING: [number, number] = [0, 10]
const DEFAULT_YEARS: [number, number] = [1990, new Date().getFullYear()]

export const FiltersPanel = observer(() => {
  const filters = useFiltersStore()
  const movieStore = useMovieStore()
  const { updateURL } = useSyncFiltersFromURL()

  const [selectedGenres, setSelectedGenres] = useState(
    toGenreOptions(filters.genres),
  )
  const [rating, setRating] = useState<[number, number]>(filters.rating)
  const [years, setYears] = useState<[number, number]>(filters.years)

  useEffect(() => {
    setSelectedGenres(toGenreOptions(filters.genres))
    setRating(filters.rating)
    setYears(filters.years)
  }, [filters.genres, filters.rating, filters.years])

  const applyFilters = () => {
    const newGenres = selectedGenres.map((v) => v.value)
    filters.setGenres(newGenres)
    filters.setRating(rating)
    filters.setYears(years)
    updateURL()
    movieStore.setFilters({
      genres: newGenres,
      rating,
      years,
    })
  }

  const resetFilters = () => {
    filters.setGenres([])
    filters.setRating(DEFAULT_RATING)
    filters.setYears(DEFAULT_YEARS)

    setSelectedGenres([])
    setRating(DEFAULT_RATING)
    setYears(DEFAULT_YEARS)

    updateURL()
    movieStore.setFilters({
      genres: [],
      rating: DEFAULT_RATING,
      years: DEFAULT_YEARS,
    })
  }

  return (
    <Div style={{ paddingBottom: 0 }}>
      <Group
        separator="hide"
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      >
        <Accordion>
          <Accordion.Summary before={<Icon24Filter />}>
            Фильтры
          </Accordion.Summary>
          <Accordion.Content>
            <GenreSelect
              value={selectedGenres}
              options={genreOptions}
              onChange={setSelectedGenres}
            />
            <RangeSlider
              label="Рейтинг"
              min={0}
              max={10}
              step={0.5}
              value={rating}
              onChange={setRating}
            />
            <RangeSlider
              label="Годы"
              min={1990}
              max={2025}
              step={1}
              value={years}
              onChange={setYears}
            />
            <Div>
              <ApplyFiltersButton onClick={applyFilters} />
              <Button
                stretched
                size="l"
                mode="secondary"
                onClick={resetFilters}
                style={{ marginTop: 8 }}
              >
                Сбросить фильтры
              </Button>
            </Div>
          </Accordion.Content>
        </Accordion>
      </Group>
    </Div>
  )
})
