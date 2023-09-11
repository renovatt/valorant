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

export type ReactQueryProviderProps = {
  children: ReactNode
}

export interface Role {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
  assetPath: string
}

export interface Ability {
  slot: string
  displayName: string
  description: string
  displayIcon: string
}

export interface MediaList {
  id: number
  wwise: string
  wave: string
}

export interface VoiceLine {
  minDuration: number
  maxDuration: number
  mediaList: MediaList[]
}

export interface Agent {
  uuid: string
  displayName: string
  description: string
  developerName: string
  displayIcon: string
  displayIconSmall: string
  bustPortrait: string
  fullPortrait: string
  fullPortraitV2: string
  killfeedPortrait: string
  background: string
  backgroundGradientColors: string[]
  assetPath: string
  isFullPortraitRightFacing: boolean
  isPlayableCharacter: boolean
  isAvailableForTest: boolean
  isBaseContent: boolean
  role: Role
  abilities: Ability[]
  voiceLine: VoiceLine
}

export type AgentsCardProps = Partial<Agent>
