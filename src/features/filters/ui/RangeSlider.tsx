import { FormItem, Slider } from '@vkontakte/vkui'

interface Props {
  label: string
  min: number
  max: number
  step: number
  value: [number, number]
  onChange: (value: [number, number]) => void
}

export function RangeSlider({ label, min, max, step, value, onChange }: Props) {
  return (
    <FormItem top={`${label}: ${value[0]} – ${value[1]}`}>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={(v) => onChange([v, value[1]])}
      />
      <Slider
        min={min}
        max={max}
        step={step}
        value={value[1]}
        onChange={(v) => onChange([value[0], v])}
      />
    </FormItem>
  )
}
