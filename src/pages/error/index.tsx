import { Button, Placeholder } from '@vkontakte/vkui'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        boxSizing: 'border-box',
      }}
    >
      <Placeholder
        title="Ошибка"
        action={<Button onClick={() => navigate('/')}>На главную</Button>}
      >
        Такой страницы не существует или произошла ошибка.
      </Placeholder>
    </div>
  )
}
