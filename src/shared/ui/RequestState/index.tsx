import { Spinner, Placeholder } from '@vkontakte/vkui'
import type { ReactNode } from 'react'

interface RequestStateProps {
  loading: boolean
  error?: string | null
  empty?: boolean
  emptyMessage?: string
  children: ReactNode
}

export function RequestState({
  loading,
  error,
  empty,
  emptyMessage = 'Данные не найдены',
  children,
}: RequestStateProps) {
  if (loading) {
    return <Placeholder icon={<Spinner size="l" />}>Загрузка...</Placeholder>
  }

  if (error) {
    return <Placeholder>{error}</Placeholder>
  }

  if (empty) {
    return <Placeholder>{emptyMessage}</Placeholder>
  }

  return <>{children}</>
}
