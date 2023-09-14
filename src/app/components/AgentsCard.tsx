'use client'
import Image from 'next/image'
import { AgentsCardProps } from '@/@types'
import { useRouter } from 'next/navigation'

const AgentsCard = ({
  displayName,
  abilities,
  fullPortrait,
  uuid,
}: AgentsCardProps) => {
  const backgroundImageUrl = '/bg-card.png'
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundReteat: 'no-repeat',
    backgroundPosition: 'center',
  }

  const router = useRouter()
  const handleAgentsById = (uuid: string) => {
    router.push(`/views/agent/${uuid}`)
  }

  return (
    <section
      onClick={() => handleAgentsById(uuid ?? '')}
      className="bg-gradient-card animate__fadeIn animate__animated relative mx-2 my-8 flex h-48 w-32 items-center justify-end border-2 border-primary-700 bg-opacity-50 p-[2px] hover:cursor-pointer md:my-6 md:h-52 md:w-36"
    >
      <div
        style={sectionStyle}
        className="absolute bottom-0 h-full w-full opacity-20"
      ></div>
      <section className="flex h-full w-full items-center justify-center border-2 border-primary-900">
        <figure className="absolute bottom-0 z-10 flex h-64 w-full items-center justify-center transition-all ease-in-out hover:scale-110">
          <Image
            src={fullPortrait ?? ''}
            alt={displayName ?? ''}
            width={500}
            height={500}
            className="h-full w-full animate-fadeRight object-cover"
            priority
          />
        </figure>

        <article
          className="pointer-events-none absolute z-50 flex h-full
       w-full flex-col items-center justify-end pb-3"
        >
          <h1 className="my-1 text-base font-semibold uppercase text-white shadow-black drop-shadow-lg lg:text-xl">
            {displayName}
          </h1>
          <section className="flex items-center justify-normal gap-3">
            {abilities?.map(
              (abilities, index) =>
                abilities.displayIcon && (
                  <figure key={index} className="flex">
                    <Image
                      src={abilities.displayIcon}
                      alt={displayName ?? ''}
                      width={100}
                      height={100}
                      className="h-4 w-4 animate-fade"
                    />
                  </figure>
                ),
            )}
          </section>
        </article>
      </section>
    </section>
  )
}

export default AgentsCard
