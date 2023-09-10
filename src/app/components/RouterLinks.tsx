'use client'
import Link from 'next/link'
import { RouteLinksProps } from '@/@types'
import { usePathname } from 'next/navigation'

const RouteLinks = ({ href, icon: Icon, text }: RouteLinksProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      className={`flex items-center justify-center p-2 text-xs font-semibold transition-all ease-in hover:text-white ${
        isActive ? 'text-white' : 'text-primary-800'
      }`}
      href={href}
    >
      <Icon className="md:-w-5 my-2 h-8 w-8 md:m-0 md:h-5" />
      <li className="hidden items-center justify-center p-2 text-xs font-semibold md:flex">
        {text}
      </li>
    </Link>
  )
}

export default RouteLinks
