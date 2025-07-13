import { createContext, useContext } from 'react'
import type { FiltersStore } from './filtersStore'

export const FiltersContext = createContext<FiltersStore | null>(null)

export const useFiltersStore = () => {
  const ctx = useContext(FiltersContext)
  if (!ctx) throw new Error('FiltersContext not found')
  return ctx
}
