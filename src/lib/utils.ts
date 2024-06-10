import { mix } from '@motionone/utils'
import clsx, { ClassValue } from 'clsx'
import type { AnimationOptions } from 'motion'
import { animate } from 'motion'
import { twMerge } from 'tailwind-merge'

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRandomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

export const getRandomItemFromArray = <T>(arr: T[]) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const generateRandomIndices = (count: number, max: number) => {
  const indices = new Uint32Array(count)
  for (let i = 0; i < count; i++) {
    indices[i] = Math.floor(Math.random() * max) * 3
  }
  return indices
}

export const animateWindowScroll = ({
  to,
  offset = 0,
  props = {},
}: {
  to: number | HTMLElement
  offset?: number
  props?: AnimationOptions
}) => {
  const scrollTo = typeof to === 'number' ? to : to.offsetTop + offset
  const from = window.scrollY
  // @ts-ignore
  const animation = animate(
    (progress: number) => {
      const value = mix(from, scrollTo, progress)
      window.scrollTo(0, value)
    },
    {
      duration: 0.5,
      easing: 'ease-in-out',
      delay: 0,
      ...props,
    },
  )

  return animation.finished
}

// Convert hex to vec3

export const roundToFraction = (num: number, places: number) => {
  const multiplier = 10 ** places
  return Math.round(num * multiplier) / multiplier
}

export const forceFraction = (value: number, decimalPlaces = 3) => {
  if (value % 1) return roundToFraction(value, decimalPlaces)
  return value.toFixed(1)
}

export const convertRgbToVec3 = ([r, g, b]: [number, number, number]) => {
  const rString = forceFraction(r / 255)
  const gString = forceFraction(g / 255)
  const bString = forceFraction(b / 255)
  return `vec3(${rString}, ${gString}, ${bString})`
}

export const testForDevice = (): {
  isMobile: boolean
  isTablet: boolean
  isDevice: boolean
} => {
  // Test for iOS or Android
  const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent)
  // Test for iPad
  const isTablet = /iPad/i.test(navigator.userAgent)
  const isDevice = isMobile || isTablet
  return { isMobile, isTablet, isDevice }
}
