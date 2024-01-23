import React from 'react'
import Logo from './Logo'
import Title from './Tiltle'

export default function LogoandTitle({ title }: { title: string }) {
  return (
    <div className="flex w-full items-center justify-between px-2 md:hidden">
      <Logo />
      <Title title={title} />
    </div>
  )
}
