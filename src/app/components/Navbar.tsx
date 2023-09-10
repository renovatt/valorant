'use client'
import RouteLinks from './RouterLinks'
import { GiCrocSword } from 'react-icons/gi'
import { RxDashboard } from 'react-icons/rx'
import { LiaIdCardAltSolid, LiaMapSolid } from 'react-icons/lia'

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-center md:w-auto">
      <ul className="flex h-full w-full flex-col items-center justify-center md:flex-row">
        <RouteLinks href="/" icon={RxDashboard} text="Inicio" />
        <RouteLinks
          href="/views/agents"
          icon={LiaIdCardAltSolid}
          text="Agentes"
        />
        <RouteLinks href="/views/weapons" icon={GiCrocSword} text="Armas" />
        <RouteLinks href="/views/maps" icon={LiaMapSolid} text="Mapas" />
      </ul>
    </nav>
  )
}

export default Navbar
