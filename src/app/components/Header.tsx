import Navbar from './Navbar'

function Header() {
  return (
    <header className="absolute left-0 top-0 flex h-full w-20 flex-col items-center justify-between overflow-hidden md:h-20 md:w-full md:flex-row md:p-0">
      <Navbar />
      <div className="my-4 h-10 w-10 rounded-full bg-primary-800 md:mx-4"></div>
    </header>
  )
}

export default Header
