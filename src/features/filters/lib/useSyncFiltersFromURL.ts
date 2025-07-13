import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useFiltersStore } from '@/features/filters'
import { useMovieStore } from '@/entities/movie'

export const useSyncFiltersFromURL = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const filters = useFiltersStore()
  const movies = useMovieStore()

  useEffect(() => {
    const genres = searchParams.get('genres')?.split(',').filter(Boolean) ?? []
    const rating = searchParams.get('rating')?.split(',').map(Number) as
      | [number, number]
      | undefined
    const years = searchParams.get('years')?.split(',').map(Number) as
      | [number, number]
      | undefined

    filters.setGenres(genres)
    if (rating?.length === 2) filters.setRating(rating)
    if (years?.length === 2) filters.setYears(years)

    movies.setFilters({
      genres,
      rating: rating ?? filters.rating,
      years: years ?? filters.years,
    })
  }, [])

  const updateURL = () => {
    setSearchParams({
      genres: filters.genres.join(','),
      rating: filters.rating.join(','),
      years: filters.years.join(','),
    })
  }

  return { updateURL }
}
