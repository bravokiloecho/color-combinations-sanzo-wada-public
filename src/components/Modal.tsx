import * as React from 'react'

import { cn } from '@/lib/utils'

import Button from '@/components/Button'

type ModalProps = {
  id: string
  children: React.ReactNode
  childrenContainerClassName?: string
  close: () => void
  className?: string
}

export default function Modal({
  id,
  children,
  childrenContainerClassName,
  close,
  className,
}: ModalProps) {
  return (
    <div
      id={id}
      className={cn(
        'fixed top-0 left-0 w-full h-screen bg-white bg-opacity-90 z-20',
        className,
      )}
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      {/* CLICK BACKGROUND TO CLOSE */}
      <button
        className='absolute--fill z-[1]'
        aria-label='Close Modal'
        onClick={close}
      />
      {/* CONTENT */}
      <div
        className={cn(
          'fixed w-full top-0 h-full z-[2]',
          'flex flex-col justify-end items-end',
          'sm:flex-row-reverse sm:justify-start',
          'content--padding py-6 md:py-8',
        )}
      >
        <Button
          label='Close Modal'
          className='self-start min-w-[4rem] mb-4 sm:mb-0 ml-auto sm:ml-0'
          onClick={close}
        >
          Back
        </Button>
        <div
          className={cn(
            'relative sm:mr-6 md:mr-8 h-full',
            childrenContainerClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
