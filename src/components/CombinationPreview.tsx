import * as React from 'react'

import getCombinations from '@/lib/getCombinations'
import { cn } from '@/lib/utils'

import type { ColorItem } from '@/constant/types'

type CombinationPreviewProps = {
  colorItems?: ColorItem[]
  combinationNumber: number
  size?: 'small' | 'regular'
  numberSide?: 'left' | 'right' | 'both'
  numbersVisible?: boolean
  as?: React.ElementType
  className?: string
}

const NUMBER = ({
  combinationNumber,
  numbersVisible,
  className,
}: {
  combinationNumber: number
  numbersVisible: boolean
  className?: string
}) => (
  <p
    className={cn(
      'p--small text-left',
      numbersVisible
        ? 'opacity-100 group-hover:text-blue'
        : 'md:opacity-0 group-hover:opacity-100',
      className,
    )}
    style={{ flex: '0 0 2.2rem' }}
  >
    {combinationNumber}
  </p>
)

export default function CombinationPreview({
  colorItems,
  combinationNumber,
  size = 'regular',
  numberSide = 'both',
  numbersVisible = false,
  as: El = 'div',
  className,
}: CombinationPreviewProps) {
  const colors = colorItems || getCombinations(combinationNumber)[0]
  const heightClass = size === 'small' ? 'h-3' : 'h-6'
  return (
    <El className={cn('flex items-center group', heightClass, className)}>
      {(numberSide === 'left' || numberSide === 'both') && (
        <NUMBER
          combinationNumber={combinationNumber}
          numbersVisible={numbersVisible}
          className='text-left'
        />
      )}
      {colors.map((colorItem, itemIndex) => {
        const { hex } = colorItem
        return (
          <div
            key={itemIndex}
            className={cn('w-full', heightClass)}
            style={{
              backgroundColor: hex,
            }}
          />
        )
      })}
      {(numberSide === 'right' || numberSide === 'both') && (
        <NUMBER
          combinationNumber={combinationNumber}
          numbersVisible={numbersVisible}
          className='text-right hidden md:block'
        />
      )}
    </El>
  )
}
