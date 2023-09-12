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
export type AgentModalProps = Partial<Agent>
export type DesktopModalProps = Partial<Agent>
export type MobileModalProps = Partial<Agent>

type UseStoreState = {
  status: {
    isDefault: boolean
    isHovered: boolean
    skillName: string
  }
}

type UseStoreActions = {
  setStatus: (skillId: string) => void
  clearStatus: () => void
}

export type UseStoreProps = UseStoreState & UseStoreActions

export interface Maps {
  uuid: string
  displayName: string
  coordinates: string
  displayIcon: string
  listViewIcon: string
  splash: string
}

export interface GridPosition {
  row: number
  column: number
}

export interface Chroma {
  uuid: string
  displayName: string
  displayIcon?: string
  fullRender: string
  swatch?: string
  streamedVideo?: string
  assetPath: string
}

export interface Level {
  uuid: string
  displayName: string
  levelItem?: string
  displayIcon?: string
  streamedVideo?: string
  assetPath: string
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
  uuid: string
  displayName: string
  themeUuid: string
  contentTierUuid?: string
  displayIcon?: string
  assetPath: string
  chromas: Chroma[]
  levels: Level[]
}

export interface WeaponStats {
  fireRate: number
  magazineSize: number
  runSpeedMultiplier: number
  equipTimeSeconds: number
  reloadTimeSeconds: number
  firstBulletAccuracy: number
  shotgunPelletCount: number
  wallPenetration: string
  feature: string
  altFireType: string
  adsStats: AdsStats
  damageRanges: DamageRange[]
}

export interface ShopData {
  cost: number
  category: string
  categoryText: string
  gridPosition: GridPosition
  canBeTrashed: boolean
  newImage: string
  assetPath: string
}

export interface Weapons {
  uuid: string
  displayName: string
  category: string
  defaultSkinUuid: string
  displayIcon: string
  killStreamIcon: string
  assetPath: string
  weaponStats: WeaponStats
  shopData: ShopData
  skins: Skin[]
}
