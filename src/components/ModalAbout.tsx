'use client'

import * as React from 'react'

import useToggleBodyScroll from '@/hooks/useToggleBodyScroll'

import Modal from '@/components/Modal'

import AboutCopy from '@/markdown/AboutCopy.mdx'
import { useGlobalStateActions, useShowAbout } from '@/state/useGlobalState'

export default function ModalAbout() {
  const showAbout = useShowAbout()
  const { toggleAbout } = useGlobalStateActions()
  const closeModal = React.useCallback(() => {
    toggleAbout(false)
  }, [toggleAbout])
  // Handle body scroll lock
  const modalId = 'ModalAbout'
  useToggleBodyScroll(modalId, showAbout)

  if (!showAbout) return null
  return (
    <Modal
      id={modalId}
      close={closeModal}
      childrenContainerClassName='w-full sm:max-w-[560px] flex-grow-1'
    >
      <div className='absolute top-0 left-0 w-full p-6 border border-black rounded-[4px] text--block'>
        <AboutCopy />
      </div>
    </Modal>
  )
}
