'use client'

import * as React from 'react'

import { testIfCombinationIsActive } from '@/lib/colorUtils'
import { cn } from '@/lib/utils'

import CombinationBlock from '@/components/CombinationBlock'

import type { Combination } from '@/constant/types'
import { useActiveCombinationMode } from '@/state/useGlobalState'

type TheContentProps = {
  combinations: Combination[]
  className?: string
}

export default function TheContent({
  combinations,
  className,
}: TheContentProps) {
  const activeCombinationMode = useActiveCombinationMode()
  return (
    <main className={cn('content--padding pb-32', className)}>
      {combinations.map((combination, combinationNumber) => {
        const isActive = testIfCombinationIsActive(
          combination,
          activeCombinationMode,
        )
        if (!isActive) return null
        return (
          <CombinationBlock
            key={combinationNumber}
            colorItems={combination}
            combinationNumber={combinationNumber}
            className='pt-32 last:mb-0'
          />
        )
      })}
    </main>
  )
}
