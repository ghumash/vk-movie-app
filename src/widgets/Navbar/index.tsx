import { Tabbar, TabbarItem } from '@vkontakte/vkui'
import { Icon28HomeOutline, Icon28FavoriteOutline } from '@vkontakte/icons'
import { useNavigate, useLocation } from 'react-router-dom'

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Tabbar mode="vertical">
      <TabbarItem
        selected={location.pathname === '/'}
        label="Главная"
        onClick={() => navigate('/')}
      >
        <Icon28HomeOutline />
      </TabbarItem>
      <TabbarItem
        selected={location.pathname === '/favorites'}
        label="Избранное"
        onClick={() => navigate('/favorites')}
      >
        <Icon28FavoriteOutline />
      </TabbarItem>
    </Tabbar>
  )
}
