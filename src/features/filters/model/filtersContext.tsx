import { createContext, useContext } from 'react'
import { FiltersStore } from './filtersStore'

const filtersStore = new FiltersStore()
const FiltersContext = createContext<FiltersStore>(filtersStore)

export const useFiltersStore = () => useContext(FiltersContext)
export const FiltersProvider = ({ children }: { children: React.ReactNode }) => (
  <FiltersContext.Provider value={filtersStore}>{children}</FiltersContext.Provider>
)
