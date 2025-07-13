import { FiltersStore } from './filtersStore'
import { FiltersContext } from './filtersContext'

const filtersStore = new FiltersStore()

export const FiltersProvider = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <FiltersContext.Provider value={filtersStore}>
    {children}
  </FiltersContext.Provider>
)
