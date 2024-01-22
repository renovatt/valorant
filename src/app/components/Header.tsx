import Navbar from './Navbar'
// import SocialLinks from './SocialLinks'

function Header() {
  return (
    <header className="bg-gradient-container absolute bottom-0 left-0 z-50 flex h-20 w-full flex-row items-center justify-between overflow-hidden md:top-0 md:flex-col md:items-start md:bg-none md:p-0">
      <Navbar />
      {/* <SocialLinks /> */}
    </header>
  )
}

export default Header
