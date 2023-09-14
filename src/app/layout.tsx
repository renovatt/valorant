import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'animate.css'
import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'
import Container from './components/Containers/Container'
import { AosProvider } from './components/Providers/AosProvider'
import ReactQueryProvider from './components/Providers/ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

const APP_NAME = 'Valorant'
const APP_DESCRIPTION =
  'Explore um rico universo de informações sobre o jogo Valorant neste website dedicado. Encontre detalhes minuciosos sobre os personagens, armas e suas coleções de skins, bem como mapas estratégicos. Desenvolvi esta aplicação como entusiasta do jogo, com um design cuidadosamente elaborado para fornecer uma experiência informativa e envolvente. Satisfaça sua curiosidade sobre Valorant aqui!'

export const metadata: Metadata = {
  title: APP_NAME,
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: [
    'wildemberg',
    'Valorant',
    'renovatt',
    'Wildemberg Renovato',
    'personagens do valorant',
    'skins do valorant',
    'mapas do valorant',
    'agentes do valorant',
  ],
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#1f2333' }],
  authors: [
    { name: 'renovatt' },
    { name: 'renovatt', url: 'https://www.linkedin.com/in/renovatt/' },
  ],
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',

  openGraph: {
    type: 'website',
    url: 'https://valorant-renovatt.vercel.app/',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: 'https://valorant-renovatt.vercel.app/icon-192x192.png',
      },
    ],
  },

  icons: [
    { rel: 'apple-touch-icon', url: '/icon-192x192.png' },
    { rel: 'icon', url: '/favicon.ico' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ReactQueryProvider>
          <AosProvider>
            <Container>
              <Header />
              {children}
              <Footer />
            </Container>
          </AosProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
