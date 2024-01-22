'use client'
import Image from 'next/image'
import { Fragment } from 'react'
import Error from './Helpers/Error'
import Loader from './Helpers/Loader'
import { useMaps } from '@/hooks/useMaps'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

const SwiperMaps = () => {
  const { data, isError, isLoading } = useMaps()
  return (
    <Fragment>
      {isError && <Error />}
      {isLoading ? (
        <Loader />
      ) : (
        <section className="animate__fadeIn animate__animated flex h-full w-full items-center justify-center md:h-full md:w-[80%]">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            navigation={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="h-full w-full rounded-lg"
          >
            {data?.map((map) => (
              <SwiperSlide
                key={map.uuid}
                className="flex h-full w-full items-center justify-center"
              >
                <figure className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src={map.splash}
                    alt={map.displayName}
                    width={1000}
                    height={1000}
                    priority
                    className="h-full w-full rounded-lg object-cover shadow-lg"
                  />
                  <aside className="absolute bottom-10 left-2 md:bottom-2">
                    <h1
                      className="text-base font-bold uppercase
                       text-white md:text-3xl"
                    >
                      {map.displayName}
                    </h1>
                  </aside>
                </figure>
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </section>
      )}
    </Fragment>
  )
}
export default SwiperMaps
