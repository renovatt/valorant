const AGENTS_URL =
  'https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR'
const WEAPONS_URL = 'https://valorant-api.com/v1/weapons?language=pt-BR'
const GEAR_URL = 'https://valorant-api.com/v1/gear?language=pt-BR'
const MAPS_URL = 'https://valorant-api.com/v1/maps?language=pt-BR'

export const handleGetAgents = async () => {
  const response = await fetch(AGENTS_URL)
  const json = await response.json()
  return json.data
}

export const handleGetWeapons = async () => {
  const response = await fetch(WEAPONS_URL)
  if (response.ok) {
    const json = await response.json()
    return json.data
  }
}

export const handleGetGear = async () => {
  const response = await fetch(GEAR_URL)
  if (response.ok) {
    const json = await response.json()
    return json.data
  }
}

export const handleGetMaps = async () => {
  const response = await fetch(MAPS_URL)
  if (response.ok) {
    const json = await response.json()
    return json.data
  }
}

export const handleAgentsById = async (id: string) => {
  const response = await fetch(
    `https://valorant-api.com/v1/agents/${id}?isPlayableCharacter=true&language=pt-BR`,
  )
  if (response.ok) {
    const json = await response.json()
    return json.data
  }
}
