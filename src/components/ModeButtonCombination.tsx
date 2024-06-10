'use client'

import * as React from 'react'

import ModeButton from '@/components/ModeButton'

import { COMBINATION_MODES } from '@/constant/siteConstants'
import type { CombinationMode } from '@/constant/types'
import {
  useActiveCombinationMode,
  useGlobalStateActions,
} from '@/state/useGlobalState'

type ModeButtonCombinationProps = {
  className?: string
}

export default function ModeButtonCombination({
  className,
}: ModeButtonCombinationProps) {
  const activeCombinationMode = useActiveCombinationMode()
  const { setActiveCombinationMode } = useGlobalStateActions()
  const options = COMBINATION_MODES as unknown as CombinationMode[]
  return (
    <ModeButton<CombinationMode>
      label='Choose combination mode'
      options={options}
      setOption={setActiveCombinationMode}
      activeOption={activeCombinationMode}
      className={className}
    />
  )
}
