import { TitleProps } from '@/@types'

const Title = ({ title }: TitleProps) => {
  return (
    <header className="mb-4 mt-2">
      <h1 className="inline-block text-3xl font-semibold text-white">
        {title}
      </h1>
    </header>
  )
}

export default Title
