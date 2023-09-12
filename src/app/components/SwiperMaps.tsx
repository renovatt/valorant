'use client'
import Image from 'next/image'
import { useMaps } from '@/hooks/useMaps'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

const SwiperMaps = () => {
  const { data, isError, isLoading } = useMaps()
  return (
    <>
      {isLoading && <p className="text-white">Carregando..</p>}
      {isError && <p className="text-white">Aconteceu algum erro!</p>}
      <section
        data-aos="zoom-in"
        className="m-auto flex w-full flex-col items-center justify-center px-4 md:h-full"
      >
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          navigation={true}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="h-full w-full"
        >
          {data?.map((map) => (
            <SwiperSlide
              key={map.uuid}
              className="flex items-center justify-center"
            >
              <figure className="relative flex items-center justify-center">
                <Image
                  src={map.splash}
                  alt={map.displayName}
                  width={1000}
                  height={1000}
                  priority
                  className="block object-cover 
                    "
                />
                <aside className="absolute bottom-2 left-2 block lg:bottom-10">
                  <h1
                    className="text-xs uppercase text-white
                 md:text-base lg:text-3xl"
                  >
                    {map.displayName}
                  </h1>
                </aside>
              </figure>
            </SwiperSlide>
          ))}
          <div className="slider-controler hidden lg:flex">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </section>
    </>
  )
}
export default SwiperMaps