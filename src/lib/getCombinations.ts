import colors from '@/data/colors.json'

import type { ColorItem, Combination } from '@/constant/types'

const colorItems = colors as ColorItem[]

const getCombinations = (combinationIndex?: number): Combination[] => {
  const allCombinations = colorItems.reduce(
    (allCombinations: Combination[], colorItem: ColorItem): Combination[] => {
      const { combinations } = colorItem
      combinations.forEach((combination) => {
        if (allCombinations[combination]) {
          allCombinations[combination].push(colorItem)
        } else {
          allCombinations[combination] = [colorItem]
        }
      })
      return allCombinations
    },
    [],
  )
  // If a combinationIndex is provided, return only that combination
  if (combinationIndex !== undefined) {
    return [allCombinations[combinationIndex]]
  }
  return allCombinations
}

export default getCombinations
