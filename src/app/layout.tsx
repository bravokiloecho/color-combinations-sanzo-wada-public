import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import * as React from 'react'
import { Suspense } from 'react'

import '@/styles/globals.css'

import KeyboardControls from '@/components/KeyboardControls'
import RouterLogic from '@/components/RouterLogic'
import SetDeviceState from '@/components/SetDeviceState'

import { siteConfig } from '@/constant/config'

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`https://${process.env.VERCEL_URL}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`https://${process.env.VERCEL_URL}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable}`}>
      <body id='root'>
        {children}
        <KeyboardControls />
        <Suspense fallback={null}>
          <RouterLogic />
          <SetDeviceState />
        </Suspense>
      </body>
    </html>
  )
}
