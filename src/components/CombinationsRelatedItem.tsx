import * as React from 'react'

import { testIfCombinationIsActive } from '@/lib/colorUtils'
import getCombinations from '@/lib/getCombinations'

import CombinationLink from '@/components/CombinationLink'
import CombinationPreview from '@/components/CombinationPreview'

import type { CombinationMode } from '@/constant/types'

type CombinationsRelatedItemProps = {
  combinationNumber: number
  activeCombinationMode: CombinationMode
  className?: string
}

export default function CombinationsRelatedItem({
  combinationNumber,
  activeCombinationMode,
  className,
}: CombinationsRelatedItemProps) {
  const colorItems = getCombinations(combinationNumber)[0]
  const isActive = testIfCombinationIsActive(colorItems, activeCombinationMode)
  if (!isActive) return null
  return (
    <li className={className}>
      <CombinationLink combinationNumber={combinationNumber}>
        <CombinationPreview
          size='small'
          colorItems={colorItems}
          combinationNumber={combinationNumber}
        />
      </CombinationLink>
    </li>
  )
}
