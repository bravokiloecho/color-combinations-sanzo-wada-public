import * as React from 'react'

import { cn } from '@/lib/utils'

import DeltaDown from '@/components/svgs/deltaDown.svg'

type ModeButtonProps<T> = {
  options: T[]
  setOption: (option: T) => void
  activeOption: T
  label: string
  className?: string
}

const sortModes = <T,>(modes: T[], activeMode: T): T[] => {
  const activeIndex = modes.indexOf(activeMode)
  const sorted = [...modes]
  sorted.splice(activeIndex, 1)
  sorted.unshift(activeMode)
  return sorted
}

export default function ModeButton<T extends string | number>({
  options,
  setOption,
  activeOption,
  label,
  className,
}: ModeButtonProps<T>) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [modes, setModes] = React.useState(() =>
    sortModes(options, activeOption),
  )
  React.useEffect(() => {
    setModes(sortModes(options, activeOption))
  }, [activeOption, setModes, options])
  const [firstMode, ...restModes] = modes
  return (
    <div
      aria-label={label}
      role='button'
      className={cn('button', className)}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div
        className='flex items-center justify-between'
        // style={{
        //   width: '4.5rem',
        // }}
      >
        <span>{firstMode}</span>
        <DeltaDown
          className='ml-3 w-3 h-auto'
          style={{
            transform: 'translateY(1px)',
          }}
        />
      </div>
      {isOpen && (
        <>
          <ul className='pt-2'>
            {restModes.map((mode) => (
              <li key={mode} className='mb-2 last:mb-0'>
                <button
                  className='opacity-50 hover:opacity-100 hover:text-blue w-full text-left'
                  onClick={(e) => {
                    setOption(mode)
                    setIsOpen(false)
                    e.stopPropagation()
                  }}
                >
                  {mode}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
