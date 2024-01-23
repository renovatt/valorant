import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridWeapons from '@/app/components/GridWeapons'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valorant | Armas',
  description:
    'Descubra todas as armas no jogo Valorant e mergulhe no arsenal tático que o ajudará a alcançar a vitória. Nossa página de Armas apresenta informações detalhadas sobre cada arma, incluindo estatísticas.',
}

export default function Weapons() {
  return (
    <ViewContainer>
      <LogoandTitle title="Armas" />
      <ViewContent>
        <GridWeapons />
      </ViewContent>
    </ViewContainer>
  )
}
