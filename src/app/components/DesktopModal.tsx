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
      className="relative hidden h-[90%] w-[90%] items-center justify-end overflow-hidden lg:flex"
    >
      <div
        style={sectionStyle}
        className="absolute left-0 top-0 hidden h-[100%] w-[40%] rounded-lg bg-primary-700 opacity-70 bg-blend-hue
           lg:flex
          "
      ></div>
      <section className="z-60 relative flex h-[90%] w-[85%] items-center justify-around gap-4 rounded-lg bg-primary-600 p-2">
        <section className="pointer-events-none flex h-full w-[30%] items-center justify-center">
          <figure className="absolute -bottom-8 -left-32 z-50 flex h-[35rem] w-96 items-start justify-start">
            <Image
              data-aos="fade-right"
              className="pointer-events-none h-full w-full object-cover"
              src={fullPortrait ?? ''}
              alt={displayName ?? ''}
              width={1000}
              height={1000}
              priority
            />
          </figure>
          <figure className="relative flex h-60 w-60 items-start justify-start overflow-hidden bg-primary-500 mix-blend-overlay">
            <Image
              className="absolute -top-20 left-4 h-[50rem] w-full object-cover"
              src={fullPortrait ?? ''}
              alt={displayName ?? ''}
              width={1000}
              height={1000}
              priority
            />
          </figure>
        </section>

        <article className="flex h-full w-[70%] flex-col items-start justify-start rounded-l p-2">
          <section className="flex w-full items-center justify-between">
            <h1 className="text-5xl font-bold uppercase text-white">
              {displayName}
            </h1>
            <section
              className="flex flex-col items-start
              justify-start"
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
          </section>
          <h3 className="my-2 uppercase text-white">{'//'}Biografia</h3>
          <p className="my-2 w-1/2 text-xs text-white">{description}</p>
          <h3 className="my-2 uppercase text-white">{'//'}Habilidades</h3>

          <section className="flex h-full w-full flex-col items-start justify-start gap-2 overflow-hidden">
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
                        className="h-10 w-10 p-1"
                      />
                    </figure>
                  ),
              )}
            </article>
            {hoveredSkill?.description && (
              <p
                data-aos="fade-up"
                className="h-full w-full text-xs text-white"
              >
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
