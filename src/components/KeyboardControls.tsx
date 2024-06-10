'use client'

import * as React from 'react'

import { useGlobalStateActions } from '@/state/useGlobalState'

export default function KeyboardControls() {
  const { toggleIndex, toggleAbout } = useGlobalStateActions()
  React.useEffect(() => {
    // Close modals with escape key
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        toggleAbout(false)
        toggleIndex(false)
      }
    }
    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [toggleIndex, toggleAbout])
  return null
}
