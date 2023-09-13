import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridAgents from '@/app/components/GridAgents'
import Title from '@/app/components/Tiltle'

export default function Agents() {
  return (
    <ViewContainer>
      <Title title="Agentes" />
      <ViewContent>
        <GridAgents />
      </ViewContent>
    </ViewContainer>
  )
}
