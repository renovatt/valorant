import Thumbnail from './components/Thumbnail'
import ViewContainer from './components/Containers/ViewContainer'
import ViewContent from './components/Containers/ViewContent'
import LogoandTitle from './components/LogoAndTitle'

export default function Home() {
  return (
    <ViewContainer>
      <LogoandTitle title="Início" />
      <ViewContent>
        <Thumbnail />
      </ViewContent>
    </ViewContainer>
  )
}
