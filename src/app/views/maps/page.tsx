import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import LogoandTitle from '@/app/components/LogoandTitle'
import SwiperMaps from '@/app/components/SwiperMaps'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valorant | Mapas',
  description: 'Conheça todos os mapas do jogo Valorant.',
}

export default function Maps() {
  return (
    <ViewContainer>
      <LogoandTitle title="Mapas" />
      <ViewContent>
        <SwiperMaps />
      </ViewContent>
    </ViewContainer>
  )
}
