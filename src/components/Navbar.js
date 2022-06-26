import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"

function Navbar() {
  return (
    <nav className="h-[3.7rem] flex items-center justify-between px-8">
        <Navigation />
        <Auth />
    </nav>
  )
}

export default Navbar