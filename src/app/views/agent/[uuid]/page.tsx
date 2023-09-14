import { Agent } from '@/@types'
import AgentModal from '@/app/components/AgentModal'
import { handleAgentsById, handleGetAgents } from '@/services'

export async function generateStaticParams() {
  const agents = await handleGetAgents()

  return agents?.map((project: Agent) => ({
    uuid: project.uuid.toString(),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { uuid: string }
}) {
  const agent = await handleAgentsById(params.uuid)

  const APP_NAME = `Agente | ${agent?.displayName}`
  const APP_DESCRIPTION = agent?.description
  const BANNER_IMAGE = agent?.displayIcon

  return {
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
          url: BANNER_IMAGE,
        },
      ],
    },

    icons: [
      { rel: 'apple-touch-icon', url: '/icon-192x192.png' },
      { rel: 'icon', url: '/favicon.ico' },
    ],
  }
}

export default async function Agent({ params }: { params: { uuid: string } }) {
  const agent = await handleAgentsById(params.uuid)
  return <AgentModal {...agent} />
}
