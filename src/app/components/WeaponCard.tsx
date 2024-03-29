'use client'
import Image from 'next/image'
import { WeaponsCardProps } from '@/@types'
import { TfiTarget } from 'react-icons/tfi'
import { SiRiotgames } from 'react-icons/si'
import { useSKins } from '@/hooks/useSkins'
import NextAndPrevButtons from './NextAndPrevButtons'

const WeaponsCard = ({
  displayName,
  weaponStats,
  skins,
  displayIcon,
  shopData,
}: WeaponsCardProps) => {
  const backgroundImageUrl = '/bg-card.png'
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundReteat: 'no-repeat',
    backgroundPosition: 'center',
  }

  const {
    loadingImage,
    imageLoaded,
    rerender,
    skinsQuantity,
    currentSkinImage,
    handleImageLoad,
    handleSkinError,
    handleWeaponNextSkin,
    handleWeaponPrevSkin,
  } = useSKins(skins ?? [], displayIcon ?? '')

  return (
    <section className="animate__animated animate__fadeIn bg-gradient-card relative m-2 flex h-44 w-72 items-center justify-center rounded-lg md:h-52 md:w-96">
      <div
        style={sectionStyle}
        className="absolute bottom-0 h-full w-full rounded-lg opacity-10"
      ></div>

      <article className="relative flex h-full w-full items-center justify-between rounded-lg p-2">
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

        <figure className="absolute left-0 h-8 rotate-12 pl-1 md:h-14">
          {imageLoaded ? (
            <Image
              src={imageLoaded ? currentSkinImage : loadingImage}
              alt={displayName ?? ''}
              width={300}
              height={300}
              priority
              onError={handleSkinError}
              onLoad={handleImageLoad}
              className={`h-full w-full ${
                rerender ? 'animate-fadeRight' : ''
              } object-cover`}
            />
          ) : (
            <Image
              src={loadingImage}
              alt={displayName ?? ''}
              width={300}
              height={300}
              priority
              onError={handleSkinError}
              className="relative h-full w-full animate-pulse object-cover"
            />
          )}
        </figure>

        <NextAndPrevButtons
          handleWeaponNextSkin={handleWeaponNextSkin}
          handleWeaponPrevSkin={handleWeaponPrevSkin}
        />

        <section className="pointer-events-none relative flex h-full flex-col items-start justify-start gap-5">
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

          <section className="absolute bottom-0 right-0 flex flex-col items-start justify-center">
            <span className="flex items-center justify-center text-[6px] uppercase text-white md:text-[8px]">
              <span className="pr-1 text-red-600">{'//'}</span>Skins
            </span>
            <span className="flex items-center justify-center gap-2 text-base font-semibold text-white md:text-xl">
              <SiRiotgames className="h-4 w-4 font-bold" />
              {skinsQuantity}
            </span>
          </section>
        </section>
      </article>
    </section>
  )
}

export default WeaponsCard
