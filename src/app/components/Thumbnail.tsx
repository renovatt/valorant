'use client'
import Image from 'next/image'
import thumb from '../../../public/thumb.png'
import logo from '../../../public/valorant-logo.svg'
import Link from 'next/link'

const Thumbnail = () => {
  const handleLoadingImage = (
    event: React.SyntheticEvent<HTMLImageElement>,
  ): void => {
    event.currentTarget.style.opacity = '1'
  }
  return (
    <section className="bg-gradient-weapon-card animate__fadeIn animate__animated relative flex h-full w-[100%] items-center justify-center rounded-lg md:h-full md:w-[90%]">
      <Image
        src={logo}
        alt="valorant-logo"
        className="reflection mt-24 opacity-30 md:mt-16"
        priority
      />
      <figure className="z-20" data-aos="zoom-in">
        <Image
          src={thumb}
          alt="valorant-logo"
          className="object-cover opacity-0 md:h-96 md:w-96"
          priority
          onLoad={handleLoadingImage}
        />
      </figure>

      <Link
        href={'/views/agents'}
        className="center-absolute z-30 w-[90%] max-w-xs border-2 border-primary-700 py-2 text-center text-2xl uppercase text-primary-700 transition-all
      ease-in-out hover:border-white hover:text-white"
      >
        Eliminar
      </Link>
    </section>
  )
}
export default Thumbnail
