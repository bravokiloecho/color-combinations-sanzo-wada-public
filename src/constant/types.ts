// import type { StaticImageData } from 'next/image'
import { COLOR_MODES, COMBINATION_MODES } from '@/constant/siteConstants'

// GLOBAL STATE

export type PageTypes = 'home'

export type ColorModes = typeof COLOR_MODES
export type ColorMode = (typeof COLOR_MODES)[number]

export type CombinationModes = typeof COMBINATION_MODES
export type CombinationMode = (typeof COMBINATION_MODES)[number]

// COLOR DATA
export type ColorData = {
  cmyk: [number, number, number, number]
  hex: string
  lab: [number, number, number]
  rgb: [number, number, number]
  vec3: [number, number, number]
}

export type ColorItem = ColorData & {
  name: string
  combinations: number[]
  totalCombinations: number
  swatch: number
}

export type Combination = ColorItem[]
