import { handleGetGear } from '@/services'
import { useQuery } from '@tanstack/react-query'

export const useGear = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['gear'],
    queryFn: () => handleGetGear(),
  })
  return { data, isLoading, error, isError }
}
