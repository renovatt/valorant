import { ElementType, ReactNode } from 'react'

export type ContainerTypeProps = {
  children: ReactNode
}

export type RouteLinksProps = {
  text: string
  href: string
  icon: ElementType
}

export type TitleProps = {
  title: string
}

export type ViewContainerProps = {
  children: ReactNode
}

export type ViewContentProps = {
  children: ReactNode
}
