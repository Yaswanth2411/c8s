import { Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

import './globals.css'

