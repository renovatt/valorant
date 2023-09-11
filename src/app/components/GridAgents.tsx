'use client'
import { useAgents } from '@/hooks/useAgents'
import AgentsCard from './AgentsCard'

const GridAgents = () => {
  const { data, isLoading, isError } = useAgents()
  return (
    <article className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-8">
      {isLoading && <p className="text-white">Carregando..</p>}
      {isError && <p className="text-white">Aconteceu algum erro!</p>}
      {data && data?.map((agent) => <AgentsCard key={agent.uuid} {...agent} />)}
    </article>
  )
}
export default GridAgents
