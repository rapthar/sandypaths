import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import styles from './layout.module.styl'

export const metadata: Metadata = {
  title: 'Sandy Paths',
  description: 'Find the best paths for your next Beach Adventure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <header className={styles.header}>
          <a href="/">
            <Image
              src="/logo.png"
              alt="Sandy Paths Logo"
              width={150}
              height={50}
              priority
              className={styles.logo}
            />
          </a>
        </header>
        {children}
      </body>
    </html>
  )
}