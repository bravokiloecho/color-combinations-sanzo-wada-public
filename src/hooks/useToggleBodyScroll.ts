import type { BodyScrollOptions } from 'body-scroll-lock'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import { useEffect } from 'react'

import { useIsDevice } from '@/state/useGlobalState'

const scrollLockOptions: BodyScrollOptions = {
  reserveScrollBarGap: true,
}

const useToggleBodyScroll = (modalId: string, isModalOpen: boolean) => {
  const isDevice = useIsDevice()
  useEffect(() => {
    if (isDevice) return
    if (isModalOpen) {
      const modalEl = document.getElementById(modalId) as HTMLElement
      disableBodyScroll(modalEl, scrollLockOptions)
    } else {
      clearAllBodyScrollLocks()
    }
  }, [modalId, isModalOpen, isDevice])
}

export default useToggleBodyScroll
