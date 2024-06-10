import * as React from 'react'

export default function TheHeader() {
  return (
    <header className='w-full content--padding pt-6 md:pt-8 md:header--width--md'>
      <h1 className=''>
        <span className='h1 mr-4'>A Dictionary of Color Combinations</span>
        <br className='lg:hidden' />
        <span className='h1'>by Sanzo Wada</span>
      </h1>
    </header>
  )
}
