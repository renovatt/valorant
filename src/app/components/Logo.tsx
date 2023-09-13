import Link from 'next/link'
import { SiValorant } from 'react-icons/si'

const Logo = () => {
  return (
    <Link href={'/'} className="my-6 ml-3 mr-2 md:ml-6">
      <SiValorant className="h-6 w-6 text-primary-700" />
    </Link>
  )
}
export default Logo
