import { handleGetMaps } from '@/services'
import { useQuery } from '@tanstack/react-query'

export const useMaps = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['maps'],
    queryFn: () => handleGetMaps(),
  })
  return { data, isLoading, error, isError }
}
