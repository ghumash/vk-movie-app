import { makeAutoObservable, runInAction } from 'mobx'
import { api } from '@/shared/api'
import type { AxiosResponse } from 'axios'

export interface Movie {
  id: number
  name: string
  year: number
  rating: number
  genres: string[]
  posterUrl: string
  description?: string
  releaseDate?: string
}

export interface RawMovie {
  id: number
  name?: string
  alternativeName?: string
  year?: number
  releaseYears?: { start: number }[]
  rating?: { imdb?: number }
  genres?: { name: string }[]
  poster?: { previewUrl: string }
  description?: string
  shortDescription?: string
}

interface MovieApiResponse {
  docs: RawMovie[]
}

export class MovieStore {
  movies: Movie[] = []
  isLoading = false
  page = 1
  hasMore = true
  error: string | null = null

  filters = {
    genres: [] as string[],
    rating: [0, 10] as [number, number],
    years: [1990, new Date().getFullYear()] as [number, number],
  }

  constructor() {
    makeAutoObservable(this)
  }

  setFilters(filters: Partial<typeof this.filters>) {
    this.filters = { ...this.filters, ...filters }
    this.reset()
    this.fetchMovies()
  }

  reset() {
    this.movies = []
    this.page = 1
    this.hasMore = true
  }

  async fetchMovies() {
    if (this.isLoading || !this.hasMore) return

    this.isLoading = true
    this.error = null

    try {
      const response: AxiosResponse<MovieApiResponse> = await api.get(
        '/movie',
        {
          params: {
            page: this.page,
            limit: 50,
            'genres.name': this.filters.genres.map((g) => `+${g}`),
            'rating.imdb': `${this.filters.rating[0]}-${this.filters.rating[1]}`,
            year: `${this.filters.years[0]}-${this.filters.years[1]}`,
          },
        },
      )

      const movies = response.data.docs.map(this.adaptMovie)

      runInAction(() => {
        this.movies = [...this.movies, ...movies]
        this.page++
        this.hasMore = movies.length === 50
      })
    } catch (error) {
      runInAction(() => {
        this.error =
          error instanceof Error
            ? error.message
            : 'Произошла ошибка при загрузке фильмов'
        this.hasMore = false
      })
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  private adaptMovie(raw: RawMovie): Movie {
    return {
      id: raw.id,
      name: raw.name ?? raw.alternativeName ?? 'Без названия',
      year: raw.year ?? raw.releaseYears?.[0]?.start ?? 0,
      rating: raw.rating?.imdb ?? 0,
      genres: raw.genres?.map((g) => g.name) ?? [],
      posterUrl: raw.poster?.previewUrl ?? '',
      description: raw.description ?? raw.shortDescription ?? '',
      releaseDate: raw.releaseYears?.[0]?.start?.toString() ?? '',
    }
  }
}
