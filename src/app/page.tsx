import getCombinations from '@/lib/getCombinations'

import ModalAbout from '@/components/ModalAbout'
import ModalIndex from '@/components/ModalIndex'
import TheContent from '@/components/TheContent'
import TheHeader from '@/components/TheHeader'
import TheNav from '@/components/TheNav'

export default async function HomePage() {
  const combinations = getCombinations()
  return (
    <>
      <TheHeader />
      <TheNav className='pt-6 md:pt-8 z-[2]' />
      <TheContent combinations={combinations} />
      <ModalAbout />
      <ModalIndex combinations={combinations} />
    </>
  )
}
