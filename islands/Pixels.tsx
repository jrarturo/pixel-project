import { useSignal } from '@preact/signals'
import ColorPicker from '../components/ColorPicker.tsx'
import PixelGrid from '../components/PixelGrid.tsx'

export default function Pixels() {
  const colorSelectedIndex = useSignal<number>(0)
  return (
    <>
      <PixelGrid />
      <ColorPicker selected={colorSelectedIndex} />
    </>
  )
}
