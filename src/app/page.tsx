import Title from './components/Tiltle'
import Thumbnail from './components/Thumbnail'
import ViewContainer from './components/Containers/ViewContainer'
import ViewContent from './components/Containers/ViewContent'

export default function Home() {
  return (
    <ViewContainer>
      <Title title="Inicio" />
      <ViewContent>
        <Thumbnail />
      </ViewContent>
    </ViewContainer>
  )
}
