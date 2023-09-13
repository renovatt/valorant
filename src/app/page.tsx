import ViewContainer from './components/Containers/ViewContainer'
import ViewContent from './components/Containers/ViewContent'
import Title from './components/Tiltle'

export default function Home() {
  return (
    <ViewContainer>
      <Title title="Inicio" />
      <ViewContent>
        <h1>Dashboard</h1>
      </ViewContent>
    </ViewContainer>
  )
}
