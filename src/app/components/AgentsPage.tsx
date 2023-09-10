import Title from './Tiltle'
import GridAgents from './GridAgents'
import ViewContent from './ViewContent'
import ViewContainer from './ViewContainer'

const AgentsPage = () => {
  return (
    <ViewContainer>
      <Title title="Agentes" />
      <ViewContent>
        <GridAgents />
      </ViewContent>
    </ViewContainer>
  )
}

export default AgentsPage
