export const COLOR_MODES = ['CMYK', 'Hex', 'RGB', 'vec3'] as const

export const COMBINATION_MODES = [
  'All',
  '2 colors',
  '3 colors',
  '4 colors',
] as const

export const BREAKPOINTS = {
  sm: '640px',
  // => @media (min-width: 640px) { ... }

  md: '768px',
  // => @media (min-width: 768px) { ... }

  lg: '1024px',
  // => @media (min-width: 1024px) { ... }

  xl: '1280px',
  // => @media (min-width: 1280px) { ... }
} as const
