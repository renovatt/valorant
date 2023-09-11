import { Agent } from '@/@types'
import AgentModal from '@/app/components/AgentModal'
import { handleAgentsById, handleGetAgents } from '@/services'

export async function generateStaticParams() {
  const agents = await handleGetAgents()

  return agents?.map((project: Agent) => ({
    uuid: project.uuid.toString(),
  }))
}

export default async function Project({
  params,
}: {
  params: { uuid: string }
}) {
  const agent = await handleAgentsById(params.uuid)
  return <AgentModal {...agent} />
}
