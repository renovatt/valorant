import Title from './Tiltle'
import SwiperMaps from './SwiperMaps'
import ViewContent from './ViewContent'
import ViewContainer from './ViewContainer'

const MapsPage = () => {
  return (
    <ViewContainer>
      <Title title="Mapas" />
      <ViewContent>
        <SwiperMaps />
      </ViewContent>
    </ViewContainer>
  )
}
export default MapsPage
