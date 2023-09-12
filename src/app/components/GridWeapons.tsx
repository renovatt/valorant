'use client'
import WeaponsCard from './WeaponCard'
import { useWeapons } from '@/hooks/useWeapons'

const GridWeapons = () => {
  const { data, isLoading, isError } = useWeapons()
  return (
    <article className="mt-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      {isLoading && <p className="text-white">Carregando..</p>}
      {isError && <p className="text-white">Aconteceu algum erro!</p>}
      {data &&
        data?.map((weapon) => <WeaponsCard key={weapon.uuid} {...weapon} />)}
    </article>
  )
}
export default GridWeapons
