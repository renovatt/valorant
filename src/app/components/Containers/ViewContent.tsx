import { ViewContentProps } from '@/@types'

const ViewContent = ({ children }: ViewContentProps) => {
  return (
    <section
      className="mb-20 flex h-full w-full items-start justify-center
       overflow-auto md:m-0"
    >
      {children}
    </section>
  )
}

export default ViewContent
