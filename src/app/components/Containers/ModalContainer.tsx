import { ModalContainerProps } from '@/@types'

const ModalContainer = ({ children }: ModalContainerProps) => {
  const backgroundImageUrl = '/bg-card.png'
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundReteat: 'no-repeat',
    backgroundPosition: 'center',
  }
  return (
    <section className="lg:bg-gradient-modal-container relative z-50 m-auto flex h-[80%] w-[80%] flex-col items-center justify-center rounded-lg bg-primary-400 shadow-xl shadow-zinc-950 md:h-[80%]">
      <div
        style={sectionStyle}
        className="absolute bottom-0 h-full w-full rounded-lg  opacity-10"
      ></div>
      {children}
    </section>
  )
}

export default ModalContainer
