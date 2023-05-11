import { useState } from 'preact/hooks'
import {
  DESKTOP_PIXEL_SIZE,
  HEIGHT,
  PIXELS_SIZE,
  WIDTH
} from '../shared/consts.ts'

const initialTitels = Array.from({ length: WIDTH * HEIGHT }).fill('#ffffff')

export default function PixelGrid() {
  const [tiles, setTiles] = useState(initialTitels)

  return (
    <div
      class={`
        border border-white 
        grid grid-cols-${WIDTH} w-[${WIDTH * PIXELS_SIZE}px] h-[${
        HEIGHT * PIXELS_SIZE
      }px]
        sm:w[${WIDTH * DESKTOP_PIXEL_SIZE}px] sm:h-[${
        HEIGHT * DESKTOP_PIXEL_SIZE
      }px]
      `}
    >
      {tiles.map((color, index) => (
        <div
          onClick={() => {
            setTiles((tiles) => {
              const newTiles = [...tiles]
              newTiles[index] = '#000000'
              return newTiles
            })
          }}
          class={`
            w-[${PIXELS_SIZE}px] h-[${PIXELS_SIZE}px]
            sm:w-[${DESKTOP_PIXEL_SIZE}px] sm:h-[${DESKTOP_PIXEL_SIZE}px]
            bg-[${color}]
          `}
        />
      ))}
    </div>
  )
}
