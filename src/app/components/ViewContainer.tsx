import { ViewContainerProps } from '@/@types'

const ViewContainer = ({ children }: ViewContainerProps) => {
  return (
    <section className="flex h-full w-full flex-col items-end justify-center p-2 md:h-[80%] md:items-start">
      {children}
    </section>
  )
}

export default ViewContainer
