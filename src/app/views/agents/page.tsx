import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridAgents from '@/app/components/GridAgents'
import LogoandTitle from '@/app/components/LogoAndTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valorant | Agentes',
  description:
    'Explore o rol de Agentes em Valorant, cada um com habilidades únicas e estilos de jogo distintos. Nossa página de Agentes fornece perfis completos de cada personagem, revelando suas habilidades, biografias e estratégias para maximizar seu potencial. Domine os Agentes que mais se adequam ao seu estilo de jogo e lidere sua equipe para a vitória.',
}

export default function Agents() {
  return (
    <ViewContainer>
      <LogoandTitle title="Agentes" />
      <ViewContent>
        <GridAgents />
      </ViewContent>
    </ViewContainer>
  )
}
