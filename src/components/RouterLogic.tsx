'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import * as React from 'react'

import type { PageTypes } from '@/constant/types'
import { useGlobalStateActions } from '@/state/useGlobalState'

const getPageType = (pathname: string): PageTypes => {
  const page = pathname.split('/')[1]
  if (!page) return 'home'
  return page as PageTypes
}

export default function RouterLogic() {
  // Close menu when route changes
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { setCurrentPage } = useGlobalStateActions()
  React.useEffect(() => {
    const pageType = getPageType(pathname)
    // const url = `${pathname}?${searchParams}`
    // console.log('pageType', pageType)
    // console.log('pathname', pathname)
    // console.log('searchParams', searchParams)
    // console.log(url)
    setCurrentPage(pageType)
  }, [pathname, searchParams, setCurrentPage])

  // * DEBUGGING
  // const currentPage = useCurrentPage()
  // const previousPage = usePreviousPage()
  // React.useEffect(() => {
  //   console.log('currentPage', currentPage)
  //   console.log('previousPage', previousPage)
  //   console.log('****')
  // }, [currentPage, previousPage])

  return null
}
