'use client'
import Image from 'next/image'
import { useState } from 'react'
import { MobileModalProps } from '@/@types'
import { useVoice } from '@/hooks/useVoice'
import { BsPlayCircle } from 'react-icons/bs'
import { TiArrowBackOutline } from 'react-icons/ti'
import { useRouter } from 'next/navigation'

const MobileModal = ({
  displayName,
  role,
  description,
  fullPortrait,
  abilities,
  voiceLine,
}: MobileModalProps) => {
  const { handleVoiceAngent } = useVoice(voiceLine)
  const [activeAbilityIndex, setActiveAbilityIndex] = useState(-1)

  const toggleAbilityDescription = (index: number) => {
    if (activeAbilityIndex === index) {
      setActiveAbilityIndex(-1)
    } else {
      setActiveAbilityIndex(index)
    }
  }

  const router = useRouter()
  const backToAgents = () => {
    router.push('/views/agents')
  }

  const backgroundImageUrl = `${fullPortrait}`
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundReteat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <section
      data-aos="zoom-in"
      className="relative flex h-full w-full flex-col items-start justify-start rounded-lg lg:hidden"
    >
      <section
        className="bg-gradient-mobile-modal relative flex h-80 w-full items-center justify-between rounded-t-lg px-4
        "
      >
        <TiArrowBackOutline
          onClick={backToAgents}
          className="absolute left-4 top-2 z-50 h-7 w-7 text-white transition-all ease-in hover:cursor-pointer hover:text-primary-700"
        />
        <div
          style={sectionStyle}
          className="absolute -top-12 left-0 z-10 h-[250%] w-60 opacity-20 mix-blend-overlay"
        ></div>
        <article className="mt-8 flex flex-col items-start justify-center gap-4">
          <h1 className="text-3xl font-bold uppercase text-white">
            {displayName}
          </h1>

          <section
            className="relative z-50 flex
      flex-col items-start justify-start"
          >
            <h3 className="flex items-center justify-center gap-2 uppercase text-white">
              {'//'}Role
              <BsPlayCircle
                className="h-5 w-5 text-white opacity-60 transition-all ease-in-out hover:cursor-pointer hover:opacity-100
          "
                onClick={handleVoiceAngent}
              />
            </h3>

            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl font-bold uppercase text-white">
                {role?.displayName}
              </h2>
              <Image
                src={role?.displayIcon ?? ''}
                alt={role?.displayName ?? ''}
                width={500}
                height={500}
                priority
                className="
            h-5 w-5 object-cover"
              />
            </div>
          </section>
        </article>

        <figure className="pointer-events-none absolute -right-32 -top-20 z-50 flex h-80 items-start justify-start">
          <Image
            data-aos="fade-left"
            className="pointer-events-none h-full w-full object-cover"
            src={fullPortrait ?? ''}
            alt={displayName ?? ''}
            width={1000}
            height={1000}
            priority
          />
        </figure>
      </section>

      <section
        data-aos="fade-up"
        className="z-40 flex h-full w-full items-start justify-center gap-4 overflow-y-scroll rounded-b-lg bg-primary-650"
      >
        <article className="flex flex-col items-start justify-start rounded-b-lg p-2">
          <h3 className="my-2 uppercase text-white">{'//'}Biografia</h3>
          <p className="my-2 text-xs text-primary-450">{description}</p>
          <h3 className="my-2 uppercase text-white">{'//'}Habilidades</h3>

          <section className="flex h-full w-full flex-col items-start justify-start gap-2">
            {abilities?.map(
              (abilities, index) =>
                abilities.displayIcon && (
                  <section
                    key={index}
                    onClick={() => toggleAbilityDescription(index)}
                    className={`${
                      activeAbilityIndex === index ? 'h-full' : 'h-16'
                    } my-1 flex min-h-[5rem] w-full flex-col items-start justify-center rounded-lg bg-primary-400 p-2 shadow-lg`}
                  >
                    <div className="flex items-center justify-center">
                      <figure className="mr-1 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-550 p-1">
                        <Image
                          src={abilities.displayIcon}
                          alt={displayName ?? ''}
                          width={100}
                          height={100}
                          className="m-1 h-full w-full"
                        />
                      </figure>

                      <h1 className="ml-1 text-xs font-semibold uppercase text-white">
                        {abilities.displayName}
                      </h1>
                    </div>
                    {activeAbilityIndex === index && (
                      <p
                        className={`my-4 animate-fade px-2 text-xs text-primary-450 ${
                          activeAbilityIndex === index ? 'flex' : 'hidden'
                        }`}
                      >
                        {abilities.description}
                      </p>
                    )}
                  </section>
                ),
            )}
          </section>
        </article>
      </section>
    </section>
  )
}
export default MobileModal
