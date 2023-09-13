'use client'
import { Fragment } from 'react'
import Error from './Helpers/Error'
import Loader from './Helpers/Loader'
import WeaponsCard from './WeaponCard'
import { useWeapons } from '@/hooks/useWeapons'

const GridWeapons = () => {
  const { data, isLoading, isError } = useWeapons()
  return (
    <Fragment>
      {isError && <Error />}
      {isLoading ? (
        <Loader />
      ) : (
        <article className="mt-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {data?.map((weapon) => <WeaponsCard key={weapon.uuid} {...weapon} />)}
        </article>
      )}
    </Fragment>
  )
}
export default GridWeapons
