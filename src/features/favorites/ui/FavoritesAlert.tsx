import { Alert } from '@vkontakte/vkui'

interface Props {
  visible: boolean
  onCancel: () => void
  onConfirm: () => void
}

export function FavoritesAlert({ visible, onCancel, onConfirm }: Props) {
  if (!visible) return null

  return (
    <Alert
      actions={[
        { title: 'Удалить всё', mode: 'destructive', action: onConfirm },
        { title: 'Отмена', mode: 'cancel', action: onCancel },
      ]}
      actionsLayout="horizontal"
      dismissLabel="Отмена"
      onClose={onCancel}
      title="Очистить избранное?"
      description="Все фильмы будут удалены из списка избранного. Продолжить?"
    />
  )
}
