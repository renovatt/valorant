import { handleGetWeapons } from '@/services'
import { useQuery } from '@tanstack/react-query'

export const useWeapons = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['weapons'],
    queryFn: () => handleGetWeapons(),
  })
  return { data, isLoading, error, isError }
}
