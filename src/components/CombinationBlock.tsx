'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

import CombinationColorInfo from '@/components/CombinationColorInfo'

import type { Combination } from '@/constant/types'
import { useActiveColorMode } from '@/state/useGlobalState'

type CombinationProps = {
  colorItems: Combination
  combinationNumber: number
  className?: string
}

export default function CombinationBlock({
  colorItems,
  combinationNumber,
  className,
}: CombinationProps) {
  const title = `Combination #${combinationNumber}`
  const activeColorMode = useActiveColorMode()

  return (
    <div
      id={`combination-${combinationNumber}`}
      className={cn('text-center', className)}
    >
      <h3 className='h3 mb-16'>{title}</h3>
      <div className='flex justify-center'>
        {colorItems.map((colorItem, itemIndex) => {
          const { hex } = colorItem
          return (
            <div key={itemIndex} className='w-full lg:w-1/4'>
              {/* COLOR SWATCH */}
              <div
                className='relative w-full'
                style={{
                  paddingTop: '100%',
                }}
              >
                <div
                  className='absolute--fill flex items-center justify-center'
                  style={{
                    backgroundColor: hex,
                  }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
      {/* INFO */}
      <div className='lg:flex justify-center'>
        {colorItems.map((colorItem, itemIndex) => {
          return (
            <CombinationColorInfo
              key={itemIndex}
              colorItem={colorItem}
              activeColorMode={activeColorMode}
              combinationNumber={combinationNumber}
              className='w-full pt-4 lg:w-1/4'
            />
          )
        })}
      </div>
    </div>
  )
}
