import { ContainerTypeProps } from '@/@types'

const Container = ({ children }: ContainerTypeProps) => {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center">
      {children}
    </main>
  )
}

export default Container
