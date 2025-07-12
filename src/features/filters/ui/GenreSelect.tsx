import { FormItem, ChipsSelect } from '@vkontakte/vkui'
import type { GenreOption } from '../model/types'

interface Props {
  value: GenreOption[]
  options: GenreOption[]
  onChange: (value: GenreOption[]) => void
}

export function GenreSelect({ value, options, onChange }: Props) {
  return (
    <FormItem top="Жанры">
      <ChipsSelect<GenreOption>
        value={value}
        onChange={onChange}
        options={options}
        placeholder="Выберите жанры"
      />
    </FormItem>
  )
}
