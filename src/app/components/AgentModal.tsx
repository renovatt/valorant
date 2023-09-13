'use client'
import DesktopModal from './DesktopModal'
import { useRouter } from 'next/navigation'
import { AgentModalProps } from '@/@types'
import MobileModal from './MobileModal'
import { TiArrowBackOutline } from 'react-icons/ti'
import ModalContainer from './Containers/ModalContainer'

const AgentModal = ({
  displayName,
  background,
  role,
  description,
  fullPortrait,
  abilities,
  voiceLine,
}: AgentModalProps) => {
  const router = useRouter()
  const backToAgents = () => {
    router.push('/views/agents')
  }

  return (
    <ModalContainer>
      <TiArrowBackOutline
        onClick={backToAgents}
        className="absolute right-5 top-4 hidden h-7 w-7 text-white transition-all ease-in hover:cursor-pointer hover:text-primary-700 lg:flex"
      />
      <DesktopModal
        abilities={abilities}
        description={description}
        fullPortrait={fullPortrait}
        voiceLine={voiceLine}
        displayName={displayName}
        role={role}
        background={background}
      />

      <MobileModal
        abilities={abilities}
        description={description}
        fullPortrait={fullPortrait}
        voiceLine={voiceLine}
        displayName={displayName}
        role={role}
        background={background}
      />
    </ModalContainer>
  )
}

export default AgentModal
