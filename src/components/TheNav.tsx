'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

import Button from '@/components/Button'
import ModeButtonColor from '@/components/ModeButtonColor'
import ModeButtonCombination from '@/components/ModeButtonCombination'

import { useGlobalStateActions } from '@/state/useGlobalState'

type TheNavProps = {
  className?: string
}

export default function TheNav({ className }: TheNavProps) {
  const { toggleIndex, toggleAbout } = useGlobalStateActions()
  return (
    <div
      className={cn(
        'sticky top-0 px-4 md:px-0',
        'md:fixed md:left-auto md:right-6 md:right-8',
        'flex justify-between',
        className,
      )}
    >
      <ModeButtonCombination className='self-start min-w-[6.7rem] mr-4' />
      <ModeButtonColor className='self-start mr-4' />
      <Button
        className='self-start mr-4 mb-4'
        label='About'
        onClick={() => {
          toggleAbout(true)
        }}
      >
        About
      </Button>
      <Button
        label='Show Index'
        className='self-start'
        onClick={() => {
          toggleIndex(true)
        }}
      >
        Index
      </Button>
    </div>
  )
}
