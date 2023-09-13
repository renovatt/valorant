import { ContainerTypeProps } from '@/@types'

const Container = ({ children }: ContainerTypeProps) => {
  const backgroundImageUrl = '/bg-wallpaper.jpg'

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundReteat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <main
      style={sectionStyle}
      className="flex min-h-screen flex-1 flex-col items-center justify-center bg-transparent"
    >
      <section className="bg-gradient-container relative flex h-[90vh] w-[90%] items-center justify-center overflow-hidden rounded-lg shadow-2xl">
        {children}
      </section>
    </main>
  )
}

export default Container
