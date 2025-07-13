import { Panel, PanelHeader } from '@vkontakte/vkui'
import { FiltersPanel } from '@/widgets/FiltersPanel'
import { MovieList } from '@/widgets/MovieList'

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
