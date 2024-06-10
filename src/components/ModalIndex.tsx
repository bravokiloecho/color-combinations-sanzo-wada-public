'use client'

import * as React from 'react'

import { testIfCombinationIsActive } from '@/lib/colorUtils'
import useToggleBodyScroll from '@/hooks/useToggleBodyScroll'

import CombinationLink from '@/components/CombinationLink'
import CombinationPreview from '@/components/CombinationPreview'
import Modal from '@/components/Modal'

import type { Combination } from '@/constant/types'
import {
  useActiveCombinationMode,
  useGlobalStateActions,
  useShowIndex,
} from '@/state/useGlobalState'

type ModalIndexProps = {
  combinations: Combination[]
}

export default function ModalIndex({ combinations }: ModalIndexProps) {
  const showIndex = useShowIndex()
  const { toggleIndex } = useGlobalStateActions()
  const closeModal = React.useCallback(() => {
    toggleIndex(false)
  }, [toggleIndex])
  // Handle body scroll lock
  const modalId = 'ModalIndex'
  useToggleBodyScroll(modalId, showIndex)

  const activeCombinationMode = useActiveCombinationMode()

  if (!showIndex) return null
  return (
    <Modal
      id={modalId}
      close={closeModal}
      childrenContainerClassName='w-full sm:max-w-[320px] flex-grow-1'
    >
      <div className='absolute top-0 left-0 w-full h-full p-6 border border-black rounded-[4px] overflow-y-scroll'>
        <ul className=''>
          {combinations.map((colorItems, index) => {
            const isActive = testIfCombinationIsActive(
              colorItems,
              activeCombinationMode,
            )
            if (!isActive) return null
            return (
              <li key={index} className='mb-4'>
                <CombinationLink combinationNumber={index}>
                  <CombinationPreview
                    colorItems={colorItems}
                    combinationNumber={index}
                    numberSide='left'
                    numbersVisible
                  />
                </CombinationLink>
              </li>
            )
          })}
        </ul>
      </div>
    </Modal>
  )
}
