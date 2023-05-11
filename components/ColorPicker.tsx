import { Signal } from '@preact/signals'
import { COLORS } from '../shared/consts.ts'

export default function ColorPicker(props: {
  selectedColorIndex: Signal<number>
}) {
  return (
    <div class='flex gap-8 justify-center'>
      <div class={`grid grid-cols-${COLORS.length} gap-x-2`}>
        {COLORS.map((color, index) => (
          <button
            onClick={() => (props.selectedColorIndex.value = index)}
            class={`w-8 h-8 bg-[${color}] `}
          />
        ))}
      </div>
    </div>
  )
}
