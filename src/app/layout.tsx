import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './Providers/ThemeProvider'
import Navbar from '@/components/Navbar'
import SideBar from '@/components/Sidebar'
import News from '@/components/News'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Football Info',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="px-2 md:px-16 md:py-2">
            <Navbar />
            <section className="flex mx-auto justify-between space-x-4 space-y-8 mt-20">
              <News />
              {children}
              <SideBar />
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}