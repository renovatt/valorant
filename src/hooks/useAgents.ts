import { Agent } from '@/@types'
import { handleGetAgents } from '@/services'
import { useQuery } from '@tanstack/react-query'

export const useAgents = () => {
  const { data, isLoading, error, isError } = useQuery<Agent[]>({
    queryKey: ['agents'],
    queryFn: () => handleGetAgents(),
  })
  return { data, isLoading, error, isError }
}
