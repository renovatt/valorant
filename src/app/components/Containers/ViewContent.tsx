import { ViewContentProps } from '@/@types'

const ViewContent = ({ children }: ViewContentProps) => {
  return (
    <section
      className="flex h-full w-full items-start justify-end
       overflow-auto md:justify-center"
    >
      {children}
    </section>
  )
}

export default ViewContent
