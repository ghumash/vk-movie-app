import { useState, useEffect } from 'react'
import { Search } from '@vkontakte/vkui'
import type { Movie } from '@/entities/movie'

interface Props {
  movies: Movie[]
  onChange: (filtered: Movie[]) => void
  placeholder?: string
}

export function MovieSearchInput({ movies, onChange, placeholder }: Props) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const q = query.trim().toLowerCase()
    if (q === '') {
      onChange(movies)
    } else {
      onChange(movies.filter((m) => m.name.toLowerCase().includes(q)))
    }
  }, [query, movies, onChange])

  return (
    <Search
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={placeholder || 'Поиск фильмов'}
    />
  )
}
