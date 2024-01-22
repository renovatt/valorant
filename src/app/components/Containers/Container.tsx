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
      <section className="bg-gradient-container relative flex h-screen w-full items-center justify-center overflow-hidden shadow-2xl md:h-[90vh]  md:w-[90%] md:rounded-lg">
        {children}
      </section>
    </main>
  )
}

export default Container
