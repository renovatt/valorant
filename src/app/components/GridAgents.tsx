'use client'
import { Fragment } from 'react'
import AgentsCard from './AgentsCard'
import { useAgents } from '@/hooks/useAgents'

const GridAgents = () => {
  const { data, isLoading, isError } = useAgents()
  return (
    <Fragment>
      {isError && <p className="border text-white">Aconteceu algum erro!</p>}
      {isLoading ? (
        <p className="text-white">Carregando..</p>
      ) : (
        <article className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-8">
          {data?.map((agent) => <AgentsCard key={agent.uuid} {...agent} />)}
        </article>
      )}
    </Fragment>
  )
}
export default GridAgents
