import { ContainerTypeProps } from '@/@types'

const Container = ({ children }: ContainerTypeProps) => {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center">
      <section className="relative flex h-[90vh] w-[90%] items-center justify-center overflow-hidden rounded-lg bg-primary-900">
        {children}
      </section>
    </main>
  )
}

export default Container
