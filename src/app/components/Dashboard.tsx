import Title from './Tiltle'
import ViewContent from './ViewContent'
import ViewContainer from './ViewContainer'

const Dashboard = () => {
  return (
    <ViewContainer>
      <Title title="Inicio" />
      <ViewContent>
        <h1>Dashboard</h1>
      </ViewContent>
    </ViewContainer>
  )
}

export default Dashboard
