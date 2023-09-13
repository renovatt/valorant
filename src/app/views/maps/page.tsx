import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import SwiperMaps from '@/app/components/SwiperMaps'
import Title from '@/app/components/Tiltle'

export default function Maps() {
  return (
    <ViewContainer>
      <Title title="Mapas" />
      <ViewContent>
        <SwiperMaps />
      </ViewContent>
    </ViewContainer>
  )
}
