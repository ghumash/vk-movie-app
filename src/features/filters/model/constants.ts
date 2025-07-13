import type { GenreOption } from './types'

export const allGenres = [
  'драма',
  'комедия',
  'боевик',
  'триллер',
  'фантастика',
  'мелодрама',
  'ужасы',
  'приключения',
  'аниме',
]

export const genreOptions: GenreOption[] = allGenres.map((g) => ({
  value: g,
  label: g,
}))

export const toGenreOptions = (genres: string[]): GenreOption[] =>
  genres.map((g) => ({ value: g, label: g }))
