import { convertRgbToVec3 } from '@/lib/utils'

import type {
  ColorData,
  ColorMode,
  Combination,
  CombinationMode,
} from '@/constant/types'

export const getColorValue = ({
  cmyk,
  hex,
  rgb,
  mode,
}: ColorData & {
  mode: ColorMode
}): string => {
  if (mode === 'CMYK') {
    return `CMYK(${cmyk.join(', ')})`
  }
  if (mode === 'vec3') {
    return convertRgbToVec3(rgb)
  }
  if (mode === 'RGB') {
    return `RGB(${rgb.join(', ')})`
  }
  return hex
}

export const testIfCombinationIsActive = (
  combination: Combination,
  activeMode: CombinationMode,
): boolean => {
  if (activeMode === 'All') return true
  const totalColors = combination.length
  const activeColorTotal = parseInt(activeMode)
  if (totalColors !== activeColorTotal) return false
  return true
}
