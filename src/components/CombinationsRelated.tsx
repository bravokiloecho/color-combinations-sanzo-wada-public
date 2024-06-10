'use client'

import * as React from 'react'

import CombinationsRelatedItem from '@/components/CombinationsRelatedItem'

import { useActiveCombinationMode } from '@/state/useGlobalState'

type CombinationsRelatedProps = {
  combinations: number[]
  combinationNumber: number
  version: 'numbers' | 'preview'
}

export default function CombinationsRelated({
  combinations,
  combinationNumber,
  // version = 'numbers',
}: CombinationsRelatedProps) {
  const activeCombinationMode = useActiveCombinationMode()
  // if (version === 'numbers') {
  //   return (
  //     <ul className='flex flex-wrap justify-center gap-4 px-4 p--small'>
  //       {combinations.map((combination, combinationIndex) => {
  //         if (combination === combinationNumber) return null
  //         return (
  //           <li key={combinationIndex}>
  //             <CombinationLink
  //               className='hover:text-blue'
  //               combinationNumber={combination}
  //             >
  //               {combination}
  //             </CombinationLink>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //   )
  // }
  return (
    <ul className='md:px-12'>
      {combinations.map((combination, combinationIndex) => {
        if (combination === combinationNumber) return null
        return (
          <CombinationsRelatedItem
            key={combinationIndex}
            className='mb-2'
            combinationNumber={combination}
            activeCombinationMode={activeCombinationMode}
          />
        )
      })}
    </ul>
  )
}
