import { Button } from '@vkontakte/vkui'

interface Props {
  onClick: () => void
}

export function ApplyFiltersButton({ onClick }: Props) {
  return (
    <Button stretched size="l" mode="primary" onClick={onClick}>
      Применить фильтры
    </Button>
  )
}
