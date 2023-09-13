import Image from 'next/image'
import ViewContainer from '../Containers/ViewContainer'
import ViewContent from '../Containers/ViewContent'
import loader from '../../../../public/loader.svg'

export default function Loader() {
  return (
    <ViewContainer>
      <ViewContent>
        <section className="flex h-full w-[80%] items-center justify-center rounded-lg md:mt-10 md:h-[80%]">
          <Image src={loader} alt="loader" />
        </section>
      </ViewContent>
    </ViewContainer>
  )
}
