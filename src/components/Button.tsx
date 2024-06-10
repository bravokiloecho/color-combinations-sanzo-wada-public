'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

type ButtonProps = {
  onClick: () => void
  label: string
  children: React.ReactNode
  className?: string
}

export default function Button({
  onClick,
  label,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      aria-label={label}
      className={cn('button', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
