import * as React from 'react'

import { cn } from '@/lib/utils'

import ColorValue from '@/components/ColorValue'
import CombinationsRelated from '@/components/CombinationsRelated'

import type { ColorItem, ColorMode } from '@/constant/types'

type CombinationColorInfoProps = {
  colorItem: ColorItem
  activeColorMode: ColorMode
  combinationNumber: number
  className?: string
}

export default function CombinationColorInfo({
  colorItem,
  activeColorMode,
  combinationNumber,
  className,
}: CombinationColorInfoProps) {
  const { name, combinations: relatedCombinations, ...colorData } = colorItem
  const [showRelated, setSetshowRelated] = React.useState(false)
  const relatedButtonSymbol = showRelated ? '-' : '+'
  const hasRelated = relatedCombinations.length > 1
  return (
    <div className={cn('', className)}>
      <div className='flex justify-start mb-2 lg:mb-0 lg:block'>
        <p className='lg:mb-4 mr-4 lg:mr-0'>
          {name}
          <span className='lg:hidden'>:</span>
        </p>
        <ColorValue
          colorData={colorData}
          activeColorMode={activeColorMode}
          className='lg:mb-4'
        />
      </div>
      {hasRelated && (
        <>
          <div className='pt-0 mb-4'>
            <button
              className='flex gap-2 lg:justify-center w-full hover:text-blue'
              onClick={() => setSetshowRelated(!showRelated)}
              aria-label='Show related combinations'
            >
              <span className='hidden lg:block'>{relatedButtonSymbol}</span>
              <span>related combinations</span>
              <span>{relatedButtonSymbol}</span>
            </button>
          </div>
          {showRelated && (
            <CombinationsRelated
              combinations={relatedCombinations}
              combinationNumber={combinationNumber}
              version='preview'
            />
          )}
        </>
      )}
    </div>
  )
}
