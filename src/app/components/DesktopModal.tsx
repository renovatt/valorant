'use client'
import Image from 'next/image'
import useSkillStore from '@/store'
import { BsPlayCircle } from 'react-icons/bs'
import { useVoice } from '@/hooks/useVoice'
import { DesktopModalProps } from '@/@types'

const DesktopModal = ({
  displayName,
  background,
  role,
  description,
  fullPortrait,
  abilities,
  voiceLine,
}: DesktopModalProps) => {
  const { handleVoiceAngent } = useVoice(voiceLine)
  const { status, setStatus, clearStatus } = useSkillStore()

  const hoveredSkill = abilities?.find(
    (ability) => ability.displayName === status.skillName,
  )

  const backgroundImageUrl = `${background}`
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'fill',
    backgroundReteat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <section
      data-aos="zoom-in"
      className="relative hidden h-[90%] w-[90%] items-center justify-end lg:flex"
    >
      <div
        style={sectionStyle}
        className="absolute left-0 top-0 hidden h-full w-96 rounded-lg bg-primary-700 opacity-70 bg-blend-overlay
           lg:flex
          "
      ></div>

      <section className="z-60 relative flex h-[90%] w-[85%] items-center justify-around gap-4 rounded-lg bg-primary-600 p-2">
        <section className="flex h-full w-[30%] items-center justify-center">
          <figure className="pointer-events-none absolute -bottom-16 -left-32 z-50 flex h-[35rem] w-96 items-start justify-start">
            <Image
              className="h-full w-full animate-fadeRight object-cover"
              src={fullPortrait ?? ''}
              alt={displayName ?? ''}
              width={1000}
              height={1000}
              priority
            />
          </figure>

          <figure className="pointer-events-none relative flex h-60 w-60 items-center justify-center overflow-hidden bg-primary-500 opacity-70 mix-blend-overlay">
            <Image
              className="absolute -top-16 left-4 h-[250%] w-full object-cover"
              src={fullPortrait ?? ''}
              alt={displayName ?? ''}
              width={1000}
              height={1000}
              priority
            />
          </figure>
        </section>

        <article className="flex h-full w-full flex-col items-start justify-start p-2">
          <section className="flex w-full items-center justify-between">
            <h1 className="text-3xl font-bold uppercase text-white 2xl:text-5xl">
              {displayName}
            </h1>
            <section className="flex flex-col items-start justify-center">
              <h3 className="flex items-center justify-center gap-2 uppercase text-white">
                {'//'}Role
                <BsPlayCircle
                  className="h-5 w-5 text-white opacity-60 transition-all ease-in-out hover:cursor-pointer hover:opacity-100
                  "
                  onClick={handleVoiceAngent}
                />
              </h3>
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-base font-bold uppercase text-white 2xl:text-2xl">
                  {role?.displayName}
                </h2>
                <Image
                  src={role?.displayIcon ?? ''}
                  alt={role?.displayName ?? ''}
                  width={500}
                  height={500}
                  priority
                  className="
                    h-6 w-6 object-cover"
                />
              </div>
            </section>
          </section>
          <h3 className="my-2 uppercase text-white">{'//'}Biografia</h3>
          <p className="my-2 w-1/2 text-xs text-white">{description}</p>
          <h3 className="my-2 uppercase text-white">{'//'}Habilidades</h3>

          <section className="flex flex-col items-start justify-start gap-2 overflow-hidden">
            <article className="flex items-center justify-center gap-4">
              {abilities?.map(
                (abilities, index) =>
                  abilities.displayIcon && (
                    <figure
                      key={index}
                      className="flex opacity-60 transition-all ease-in-out hover:cursor-pointer hover:opacity-100"
                      onMouseOut={clearStatus}
                      onMouseOver={() => setStatus(abilities.displayName)}
                    >
                      <Image
                        src={abilities.displayIcon}
                        alt={displayName ?? ''}
                        width={100}
                        height={100}
                        className="h-12 w-12 p-1"
                      />
                    </figure>
                  ),
              )}
            </article>
            {hoveredSkill?.description && (
              <p className="inline-block animate-fade px-2 text-xs text-white">
                {hoveredSkill?.description}
              </p>
            )}
          </section>
        </article>
      </section>
    </section>
  )
}
export default DesktopModal
