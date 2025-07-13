import { Alert } from '@vkontakte/vkui'

interface Props {
  type: 'add' | 'remove' | null
  movieName: string
  onConfirm: () => void
  onCancel: () => void
}

export function FavoriteAlert({ type, movieName, onCancel, onConfirm }: Props) {
  if (!type) return null

  const title =
    type === 'add' ? 'Добавить в избранное?' : 'Удалить из избранного?'
  const description =
    type === 'add'
      ? `Вы уверены, что хотите добавить фильм «${movieName || 'Без названия'}» в избранное?`
      : `Вы уверены, что хотите удалить фильм «${movieName || 'Без названия'}» из избранного?`

  const actionTitle = type === 'add' ? 'Добавить' : 'Удалить'
  const mode = type === 'add' ? 'default' : 'destructive'

  return (
    <Alert
      actions={[
        { title: actionTitle, mode, action: onConfirm },
        { title: 'Отмена', mode: 'cancel', action: onCancel },
      ]}
      actionsLayout="horizontal"
      dismissLabel="Отмена"
      onClose={onCancel}
      title={title}
      description={description}
    />
  )
}
