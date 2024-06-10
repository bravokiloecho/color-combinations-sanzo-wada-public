import copy from 'copy-to-clipboard'
import * as React from 'react'

import { getColorValue } from '@/lib/colorUtils'
import { cn } from '@/lib/utils'

import type { ColorData, ColorMode } from '@/constant/types'

type ColorValueProps = {
  colorData: ColorData
  activeColorMode: ColorMode
  className?: string
}

export default function ColorValue({
  colorData,
  activeColorMode,
  className,
}: ColorValueProps) {
  const colorValue = getColorValue({
    ...colorData,
    mode: activeColorMode,
  })

  const [copied, setCopied] = React.useState(false)

  const runCopy = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const target = e.currentTarget
      const colorValue = target.getAttribute('data-color-value') as string
      copy(colorValue)
      setCopied(true)
    },
    [],
  )

  React.useEffect(() => {
    if (!copied) return
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [copied])

  const tooltipText = copied ? 'copied' : 'copy'

  return (
    <p className={cn('relative group inline-block', className)}>
      <button
        data-color-value={colorValue}
        className='hover:text-blue'
        aria-label='Copy value'
        onClick={runCopy}
      >
        {colorValue}
      </button>
      <span
        className='copy--tooltip'
        style={
          copied
            ? {
                opacity: 1,
              }
            : {}
        }
      >
        {tooltipText}
      </span>
    </p>
  )
}
