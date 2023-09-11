'use client'
import { AgentModal } from '@/@types'
import { useRouter } from 'next/navigation'

const AgentModal = ({ displayName }: AgentModal) => {
  const router = useRouter()
  const backToAgents = () => {
    router.push('/views/agents')
  }

  return (
    <div className="h-40 w-40">
      <h1 className="text-white">{displayName}</h1>
      <button onClick={backToAgents}>Voltar</button>
    </div>
  )
}

export default AgentModal
