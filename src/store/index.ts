import { create } from 'zustand'
import { UseStoreProps } from '@/@types'

const useSkillStore = create<UseStoreProps>()((set) => ({
  status: {
    isDefault: false,
    isHovered: false,
    skillName: '',
  },
  setStatus: (skillId: string) => {
    set((state) => {
      return {
        ...state,
        status: {
          isDefault: false,
          isHovered: true,
          skillName: skillId,
        },
      }
    })
  },
  clearStatus: () => {
    set((state) => {
      return {
        ...state,
        status: {
          isDefault: true,
          isHovered: false,
          skillName: '',
        },
      }
    })
  },
}))

export default useSkillStore
