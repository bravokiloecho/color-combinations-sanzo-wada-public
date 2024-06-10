import * as React from 'react'

import { cn } from '@/lib/utils'
import { animateWindowScroll } from '@/lib/utils'

import { useGlobalStateActions } from '@/state/useGlobalState'

type CombinationLinkProps = {
  combinationNumber: number
  children: React.ReactNode
  className?: string
}

export default function CombinationLink({
  combinationNumber,
  children,
  className,
}: CombinationLinkProps) {
  const { toggleIndex } = useGlobalStateActions()
  const onCombinationClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const target = e.currentTarget
      const href = target.getAttribute('href') as string
      const targetElement = document.querySelector(href) as HTMLElement
      if (targetElement) {
        animateWindowScroll({
          to: targetElement,
          offset: 16,
        })
      }
      toggleIndex(false)
      e.preventDefault()
      e.stopPropagation()
    },
    [toggleIndex],
  )
  return (
    <a
      className={cn('', className)}
      href={`#combination-${combinationNumber}`}
      onClick={onCombinationClick}
    >
      {children}
    </a>
  )
}
