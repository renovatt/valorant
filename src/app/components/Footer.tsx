import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCopyright,
} from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="absolute bottom-0 right-0 hidden h-10 w-full items-center justify-end md:flex">
      <span className="flex items-center justify-center text-xs text-primary-800">
        <AiOutlineCopyright className="h-4 w-4" />
        <span className="hidden md:flex">Todos direitos reservados</span>
      </span>
      <Link
        className="flex items-center justify-center text-xs font-semibold text-primary-800 transition-all ease-in hover:text-white"
        href={'https://portfolio-renovatt.vercel.app/'}
        target="_blank"
      >
        <li className="flex items-center justify-center p-1">renovatt</li>
      </Link>
      <Link
        className="mx-1 flex items-center justify-center text-xs font-semibold text-primary-800 transition-all ease-in hover:text-white"
        href={'https://github.com/renovatt'}
        target="_blank"
      >
        <AiFillGithub className="h-4 w-4" />
        <li className="flex items-center justify-center p-1">GitHub</li>
      </Link>
      <Link
        className="mx-1 flex items-center justify-center text-xs font-semibold text-primary-800 transition-all ease-in hover:text-white"
        href={'https://www.linkedin.com/in/renovatt/'}
        target="_blank"
      >
        <AiFillLinkedin className="h-4 w-4" />
        <li className="flex items-center justify-center p-1">Linkedin</li>
      </Link>
    </footer>
  )
}
export default Footer
