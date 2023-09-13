import { useState } from 'react'

export const useAbility = () => {
  const [activeAbilityIndex, setActiveAbilityIndex] = useState(-1)

  const toggleAbility = (index: number) => {
    if (activeAbilityIndex === index) {
      setActiveAbilityIndex(-1)
    } else {
      setActiveAbilityIndex(index)
    }
  }
  return {
    toggleAbility,
    activeAbilityIndex,
  }
}
