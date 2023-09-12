import Image from 'next/image'
import { WeaponsCardProps } from '@/@types'
import { TfiTarget } from 'react-icons/tfi'

const WeaponsCard = ({
  displayName,
  weaponStats,
  skins,
  displayIcon,
  shopData,
}: WeaponsCardProps) => {
  return (
    <section className="animate__animated animate__fadeIn  bg-gradient-weapon-card relative m-2 flex h-44 w-72 items-center justify-center rounded-lg p-1 md:h-52 md:w-96">
      {/* <div className="absolute left-10 z-10 h-20 w-20 rounded-full border-2 md:left-24 md:h-28 md:w-28 md:border-4"></div> */}

      <article className="relative flex h-full w-full items-center justify-between p-2">
        <section className="flex h-full flex-col items-start justify-between">
          <h1 className="text-base font-bold uppercase text-white md:text-2xl">
            {displayName}
          </h1>

          <section className="flex flex-col items-start justify-center">
            <span className="flex items-center justify-center text-[6px] uppercase text-white md:text-[8px]">
              <span className="pr-1 text-red-600">{'//'}</span>Custo
            </span>
            <span className="flex items-center justify-center gap-2 text-base font-semibold text-white md:text-xl">
              <TfiTarget className="h-4 w-4 font-bold" />
              {shopData?.cost ? shopData?.cost : '0'}
            </span>
          </section>
        </section>

        <figure className="absolute left-0 z-20 h-8 rotate-12 pl-1 md:h-14">
          <Image
            src={displayIcon ?? ''}
            alt={displayName ?? ''}
            width={300}
            height={300}
            priority
            className="h-full w-full object-cover"
          />
        </figure>
        {/*  */}
        <section
          className="flex h-full flex-col items-start justify-start gap-5
      "
        >
          <aside className="flex flex-col items-start justify-center">
            <span className="flex items-center justify-center text-[6px] uppercase text-white md:text-[8px]">
              <span className="pr-1 text-red-600">{'//'}</span>Estatísticas
              Gerais
            </span>
            <section className="flex items-start justify-around gap-5">
              <article className="flex flex-col items-start justify-center">
                <span className="text-[6px] font-bold text-white md:text-base">
                  {weaponStats?.fireRate
                    ? weaponStats?.fireRate.toFixed(2)
                    : '0'}
                </span>
                <span className="text-[6px] font-semibold uppercase text-white">
                  Taxa de Tiro
                </span>
              </article>

              <article className="flex flex-col items-start justify-center">
                <span className="text-[6px] font-bold text-white md:text-base">
                  {weaponStats?.magazineSize
                    ? parseInt(weaponStats?.magazineSize.toString(), 10)
                    : '0'}
                </span>
                <span className="text-[6px] font-semibold uppercase text-white">
                  Rounds
                </span>
              </article>

              <article className="flex flex-col items-start justify-center">
                <span className="text-[6px] font-bold text-white md:text-base">
                  <span className="text-[6px] font-bold text-white md:text-base">
                    {weaponStats?.damageRanges[0].rangeEndMeters ? (
                      <span className="text-[6px] font-bold text-white md:text-base">
                        {weaponStats?.damageRanges[0].rangeEndMeters}
                      </span>
                    ) : (
                      '0'
                    )}
                  </span>
                </span>

                <span className="text-[6px] font-semibold uppercase text-white">
                  Metros
                </span>
              </article>
            </section>
          </aside>

          <aside className="flex flex-col items-start justify-center">
            <span className="flex items-center justify-center text-[8px] uppercase text-white">
              <span className="pr-1 text-red-600">{'//'}</span>Saida de Dano
            </span>
            <section className="flex items-start justify-around gap-5">
              <article className="flex flex-col items-start justify-center">
                {weaponStats?.damageRanges[0].headDamage ? (
                  <span className="text-[6px] font-bold text-white md:text-base">
                    {weaponStats?.damageRanges[0].headDamage}
                  </span>
                ) : (
                  <span className="text-[6px] font-bold text-white md:text-base">
                    0
                  </span>
                )}
                <span className="text-[6px] font-semibold uppercase text-white">
                  Cabeça
                </span>
              </article>

              <article className="flex flex-col items-start justify-center">
                {weaponStats?.damageRanges[0].bodyDamage ? (
                  <span className="text-[6px] font-bold text-white md:text-base">
                    {weaponStats?.damageRanges[0].bodyDamage}
                  </span>
                ) : (
                  <span className="text-[6px] font-bold text-white md:text-base">
                    0
                  </span>
                )}
                <span className="text-[6px] font-semibold uppercase text-white">
                  Corpo
                </span>
              </article>

              <article className="flex flex-col items-start justify-center">
                {weaponStats?.damageRanges[0].legDamage ? (
                  <span className="text-[6px] font-bold text-white md:text-base">
                    {weaponStats?.damageRanges[0].legDamage.toFixed(2)}
                  </span>
                ) : (
                  <span className="text-[6px] font-bold text-white md:text-base">
                    0
                  </span>
                )}
                <span className="text-[6px] font-semibold uppercase text-white">
                  Pernas
                </span>
              </article>
            </section>
          </aside>
        </section>
      </article>
    </section>
  )
}

export default WeaponsCard
