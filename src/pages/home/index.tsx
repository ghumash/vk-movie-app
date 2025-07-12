import { Panel, PanelHeader } from '@vkontakte/vkui'
import { FiltersPanel } from '@/features/filters'
import { MovieList } from '@/entities/movie'

const HomePage = () => {

  return (
    <Panel id="home">
      <PanelHeader>Главная</PanelHeader>
      <FiltersPanel />
      <MovieList />
    </Panel>
  )
}

export default HomePage
