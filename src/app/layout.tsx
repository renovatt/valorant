import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Container from './components/Container'
import Header from './components/Header'
import ReactQueryProvider from './components/Providers/ReactQueryProvider'
// import localFont from 'next/font/local'

// const myFont = localFont({
//   src: '/valorant.ttf',
//   display: 'swap',
//   variable: '--font-valorant',
// })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Container>
            <Header />
            {children}
          </Container>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
