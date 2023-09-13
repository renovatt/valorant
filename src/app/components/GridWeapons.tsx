'use client'
import { Fragment } from 'react'
import WeaponsCard from './WeaponCard'
import { useWeapons } from '@/hooks/useWeapons'

const GridWeapons = () => {
  const { data, isLoading, isError } = useWeapons()
  return (
    <Fragment>
      {isError && <p className="border text-white">Aconteceu algum erro!</p>}
      {isLoading ? (
        <p className="text-white">Carregando..</p>
      ) : (
        <article className="mt-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {data?.map((weapon) => <WeaponsCard key={weapon.uuid} {...weapon} />)}
        </article>
      )}
    </Fragment>
  )
}
export default GridWeapons
