import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const SocialLinks = () => {
  return (
    <section className="my-8 flex flex-col items-center justify-center gap-5 md:hidden">
      <Link
        className="mx-1 flex items-center justify-center text-xs font-semibold text-primary-800 transition-all ease-in hover:text-white"
        href={'https://github.com/renovatt'}
        target="_blank"
      >
        <AiFillGithub className="h-8 w-8" />
      </Link>
      <Link
        className="mx-1 flex items-center justify-center text-xs font-semibold text-primary-800 transition-all ease-in hover:text-white"
        href={'https://www.linkedin.com/in/renovatt/'}
        target="_blank"
      >
        <AiFillLinkedin className="h-8 w-8" />
      </Link>
    </section>
  )
}
export default SocialLinks
