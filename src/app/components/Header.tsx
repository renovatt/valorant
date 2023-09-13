import Navbar from './Navbar'
import SocialLinks from './SocialLinks'

function Header() {
  return (
    <header className="absolute left-0 top-0 flex h-full w-20 flex-col items-center justify-between overflow-hidden md:h-20 md:w-full md:flex-row md:p-0">
      <Navbar />
      <SocialLinks />
    </header>
  )
}

export default Header
