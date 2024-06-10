'use client'

import { useEffect } from 'react'

import { testForDevice } from '@/lib/utils'

import { useGlobalStateActions } from '@/state/useGlobalState'

export default function SetDeviceState() {
  const { setIsMobile, setIsTablet, setIsDevice } = useGlobalStateActions()
  useEffect(() => {
    const { isMobile, isTablet, isDevice } = testForDevice()
    setIsMobile(isMobile)
    setIsTablet(isTablet)
    setIsDevice(isDevice)
  }, [setIsMobile, setIsTablet, setIsDevice])
  return null
}
