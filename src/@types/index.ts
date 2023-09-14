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

export type ModalContainerProps = {
  children: ReactNode
}

export type AOSProviderProps = {
  children: React.ReactNode
}

export type NextAndPrevButtonsProps = {
  handleWeaponPrevSkin: () => void
  handleWeaponNextSkin: () => void
}

type UseStoreActions = {
  setStatus: (skillId: string) => void
  clearStatus: () => void
}

type UseStoreState = {
  status: {
    isDefault: boolean
    isHovered: boolean
    skillName: string
  }
}

export type UseStoreProps = UseStoreState & UseStoreActions

export interface Maps {
  uuid: string
  displayName: string
  splash: string
}

export interface AdsStats {
  zoomMultiplier: number
  fireRate: number
  runSpeedMultiplier: number
  burstCount: number
  firstBulletAccuracy: number
}

export interface DamageRange {
  rangeStartMeters: number
  rangeEndMeters: number
  headDamage: number
  bodyDamage: number
  legDamage: number
}

export interface Skin {
  length: Skin
  uuid: string
  displayName: string
  themeUuid: string
  contentTierUuid?: string
  displayIcon?: string
  assetPath: string
}

export interface WeaponStats {
  fireRate: number
  magazineSize: number
  adsStats: AdsStats
  damageRanges: DamageRange[]
}

export interface ShopData {
  cost: number
}

export interface Weapons {
  uuid: string
  displayName: string
  category: string
  displayIcon: string
  weaponStats: WeaponStats
  shopData: ShopData
  skins: Skin[]
}

export interface Role {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
}

export interface Ability {
  slot: string
  displayName: string
  description: string
  displayIcon: string
}

export interface MediaList {
  id: number
  wave: string
}

export interface VoiceLine {
  mediaList: MediaList[]
}

export interface Agent {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
  fullPortrait: string
  background: string
  backgroundGradientColors: string[]
  role: Role
  abilities: Ability[]
  voiceLine: VoiceLine
}

export type AgentsCardProps = Partial<Agent>
export type WeaponsCardProps = Partial<Weapons>
export type AgentModalProps = Partial<Agent>
export type DesktopModalProps = Partial<Agent>
export type MobileModalProps = Partial<Agent>
