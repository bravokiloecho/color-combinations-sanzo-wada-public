'use client'

import * as React from 'react'

import ModeButton from '@/components/ModeButton'

import { COLOR_MODES } from '@/constant/siteConstants'
import type { ColorMode } from '@/constant/types'
import {
  useActiveColorMode,
  useGlobalStateActions,
} from '@/state/useGlobalState'

type ModeButtonColorProps = {
  className?: string
}

export default function ModeButtonColor({ className }: ModeButtonColorProps) {
  const activeColorMode = useActiveColorMode()
  const { setActiveColorMode } = useGlobalStateActions()
  const options = COLOR_MODES as unknown as ColorMode[]
  return (
    <ModeButton<ColorMode>
      label='Choose color mode'
      options={options}
      setOption={setActiveColorMode}
      activeOption={activeColorMode}
      className={className}
    />
  )
}
