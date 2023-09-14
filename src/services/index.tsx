import { Agent, Maps, Weapons } from '@/@types'

const AGENTS_URL =
  'https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR'
const WEAPONS_URL = 'https://valorant-api.com/v1/weapons?language=pt-BR'
const MAPS_URL = 'https://valorant-api.com/v1/maps?language=pt-BR'

export const handleGetAgents = async (): Promise<Agent[]> => {
  const response = await fetch(AGENTS_URL)
  const json = await response.json()
  return json.data
}

export const handleGetWeapons = async (): Promise<Weapons[] | undefined> => {
  const response = await fetch(WEAPONS_URL)
  if (response.ok) {
    const json = await response.json()
    return json.data
  }
}

export const handleGetMaps = async (): Promise<Maps[] | undefined> => {
  const response = await fetch(MAPS_URL)
  if (response.ok) {
    const json = await response.json()
    return json.data
  }
}

export const handleAgentsById = async (
  id: string,
): Promise<Agent | undefined> => {
  const response = await fetch(
    `https://valorant-api.com/v1/agents/${id}?isPlayableCharacter=true&language=pt-BR`,
  )
  if (response.ok) {
    const json = await response.json()
    return json.data
  }
}
