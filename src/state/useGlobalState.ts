'use client'

import { create } from 'zustand'

import type { ColorMode, CombinationMode, PageTypes } from '@/constant/types'

interface GlobalStoreState {
  windowWidth: number
  windowHeight: number
  isDesktopWidth: boolean | undefined
  isMobile: boolean
  isTablet: boolean
  isDevice: boolean
  currentPage: PageTypes
  previousPage: PageTypes
  activeColorMode: ColorMode
  activeCombinationMode: CombinationMode
  showAbout: boolean
  showIndex: boolean
}

interface GlobalStoreActions {
  setIsMobile: (newState: boolean) => void
  setIsTablet: (newState: boolean) => void
  setIsDevice: (newState: boolean) => void
  setWindowDimensions: (width: number, height: number) => void
  setCurrentPage: (page: PageTypes) => void
  setActiveColorMode: (mode: ColorMode) => void
  setActiveCombinationMode: (mode: CombinationMode) => void
  toggleAbout: (forceState?: boolean) => void
  toggleIndex: (forceState?: boolean) => void
}

const INITIAL_STATE: GlobalStoreState = {
  windowWidth: 0,
  windowHeight: 0,
  isDesktopWidth: undefined,
  isMobile: false,
  isTablet: false,
  isDevice: false,
  currentPage: 'home',
  previousPage: 'home',
  activeColorMode: 'Hex',
  activeCombinationMode: 'All',
  showAbout: false,
  showIndex: false,
}

const useGlobalState = create<
  GlobalStoreState & { actions: GlobalStoreActions }
>((set, get) => ({
  ...INITIAL_STATE,
  actions: {
    setIsMobile: (newState) => set({ isMobile: newState }),
    setIsTablet: (newState) => set({ isTablet: newState }),
    setIsDevice: (newState) => set({ isDevice: newState }),
    setWindowDimensions: (width, height) =>
      set({ windowWidth: width, windowHeight: height }),
    setCurrentPage: (page: PageTypes) => {
      const { currentPage } = get()
      return set(() => ({
        currentPage: page,
        previousPage: currentPage,
      }))
    },
    setActiveColorMode: (mode: ColorMode) => set({ activeColorMode: mode }),
    setActiveCombinationMode: (mode: CombinationMode) =>
      set({ activeCombinationMode: mode }),
    toggleAbout: (forceState) => {
      const { showAbout } = get()
      return set({ showAbout: forceState ?? !showAbout })
    },
    toggleIndex: (forceState) => {
      const { showIndex } = get()
      return set({ showIndex: forceState ?? !showIndex })
    },
  },
}))

// * EXPORTS

export const useWindowWidth = () => useGlobalState((state) => state.windowWidth)
export const useWindowHeight = () =>
  useGlobalState((state) => state.windowHeight)

export const useIsDesktopWidth = () =>
  useGlobalState((state) => state.isDesktopWidth)

export const useIsMobile = () => useGlobalState((state) => state.isMobile)
export const useIsTablet = () => useGlobalState((state) => state.isTablet)
export const useIsDevice = () => useGlobalState((state) => state.isDevice)

export const useCurrentPage = () => useGlobalState((state) => state.currentPage)
export const usePreviousPage = () =>
  useGlobalState((state) => state.previousPage)

export const useActiveColorMode = () =>
  useGlobalState((state) => state.activeColorMode)

export const useActiveCombinationMode = () =>
  useGlobalState((state) => state.activeCombinationMode)

export const useGlobalStateActions = () =>
  useGlobalState((state) => state.actions)

export const useShowAbout = () => useGlobalState((state) => state.showAbout)

export const useShowIndex = () => useGlobalState((state) => state.showIndex)

export default useGlobalState
